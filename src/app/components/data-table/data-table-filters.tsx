// filepath: src/app/components/data-table/data-table-filters.tsx
"use client";

import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter as FilterIcon, X, Plus } from "lucide-react";
import { useState } from "react";

interface DataTableFiltersProps<TData> {
  table: Table<TData>;
  isAdvancedOpen: boolean;
  setIsAdvancedOpen: (open: boolean) => void;
}

interface ActiveFilter {
  id: string;
  columnId: string;
  value: string | string[];
  label: string;
}

interface ColumnMetaWithFilter {
  filterVariant?: 'text' | 'select';
  selectOptions?: string[];
}

// Column labels mapping for better readability
const COLUMN_LABELS: Record<string, string> = {
  name: "Name",
  uniqueStudyId: "Unique Study ID",
  studyTitle: "Study Title",
  sponsorRepresentative: "Sponsor Representative",
  studySpecies: "Study Species",
  projectName: "Project Name",
  fileUploadYear: "File Upload Year",
  externalAssignedStudyNumber: "External Assigned Study Number",
  studyMaterialOrMoleculeIdentification: "Study Material or Molecule Identification",
  studyType: "Study Type",
  regulatoryStandard: "Regulatory Standard",
  investigatorName: "Investigator Name",
  primaryOrganizationName: "Primary Organization Name",
};

function FilterRow({ 
  table, 
  filter, 
  onUpdate, 
  onRemove 
}: { 
  table: Table<any>;
  filter: ActiveFilter;
  onUpdate: (filterId: string, value: string | string[]) => void;
  onRemove: (filterId: string) => void;
}) {
  const column = table.getColumn(filter.columnId);
  const meta = column?.columnDef.meta as ColumnMetaWithFilter | undefined;
  const { selectOptions, filterVariant } = meta ?? {};

  if (filterVariant === "select") {
    return (
      <div className="flex items-center gap-2 p-2 border rounded-lg bg-white">
        <span className="text-sm font-medium min-w-[120px]">{filter.label}:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 min-w-[150px] justify-start">
              {Array.isArray(filter.value) && filter.value.length > 0 
                ? `${filter.value.length} selected`
                : "Select values..."
              }
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            {selectOptions?.map((option: string) => {
              const isSelected = Array.isArray(filter.value) && filter.value.includes(option);
              return (
                <DropdownMenuCheckboxItem
                  key={option}
                  className="capitalize"
                  checked={isSelected}
                  onCheckedChange={(checked) => {
                    const currentValue = Array.isArray(filter.value) ? filter.value : [];
                    if (checked) {
                      onUpdate(filter.id, [...currentValue, option]);
                    } else {
                      onUpdate(filter.id, currentValue.filter((value: string) => value !== option));
                    }
                  }}
                >
                  {option}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(filter.id)}
          className="h-8 w-8 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 p-2 border rounded-lg bg-white">
      <span className="text-sm font-medium min-w-[120px]">{filter.label}:</span>
      <Input
        placeholder={`Search ${filter.label.toLowerCase()}...`}
        value={(filter.value as string) ?? ""}
        onChange={(event) => onUpdate(filter.id, event.target.value)}
        className="h-8 min-w-[200px]"
      />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onRemove(filter.id)}
        className="h-8 w-8 p-0"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function DataTableFilters<TData>({
  table,
  isAdvancedOpen,
  setIsAdvancedOpen,
}: DataTableFiltersProps<TData>) {
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([]);
  const [selectedColumn, setSelectedColumn] = useState<string>("");

  const availableColumns = table.getAllColumns()
    .filter((column) => 
      column.getCanFilter() && 
      column.getIsVisible() && 
      column.id !== 'select' && 
      column.id !== 'actions' &&
      !activeFilters.some(filter => filter.columnId === column.id)
    );

  const addFilter = () => {
    if (!selectedColumn) return;

    const column = table.getColumn(selectedColumn);
    if (!column) return;

    const meta = column.columnDef.meta as ColumnMetaWithFilter | undefined;
    const newFilter: ActiveFilter = {
      id: `${selectedColumn}-${Date.now()}`,
      columnId: selectedColumn,
      value: meta?.filterVariant === "select" ? [] : "",
      label: COLUMN_LABELS[selectedColumn] || selectedColumn,
    };

    setActiveFilters(prev => [...prev, newFilter]);
    setSelectedColumn("");
  };

  const updateFilter = (filterId: string, value: string | string[]) => {
    setActiveFilters(prev => 
      prev.map(filter => 
        filter.id === filterId 
          ? { ...filter, value }
          : filter
      )
    );

    // Update the actual table filter
    const filter = activeFilters.find(f => f.id === filterId);
    if (filter) {
      const column = table.getColumn(filter.columnId);
      column?.setFilterValue(value);
    }
  };

  const removeFilter = (filterId: string) => {
    const filter = activeFilters.find(f => f.id === filterId);
    if (filter) {
      const column = table.getColumn(filter.columnId);
      column?.setFilterValue(undefined);
    }

    setActiveFilters(prev => prev.filter(f => f.id !== filterId));
  };

  const clearAllFilters = () => {
    activeFilters.forEach(filter => {
      const column = table.getColumn(filter.columnId);
      column?.setFilterValue(undefined);
    });
    setActiveFilters([]);
  };

  const hasActiveFilters = activeFilters.some(filter => {
    if (Array.isArray(filter.value)) {
      return filter.value.length > 0;
    }
    return filter.value !== "";
  });

  return (
    <div className="mb-4">
      <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="h-8">
            <FilterIcon className="mr-2 h-4 w-4" />
            Advanced Filters
            {hasActiveFilters && (
              <span className="ml-1 rounded bg-blue-100 px-1 text-xs">
                {activeFilters.filter(filter => {
                  if (Array.isArray(filter.value)) {
                    return filter.value.length > 0;
                  }
                  return filter.value !== "";
                }).length}
              </span>
            )}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="mt-4 p-4 border rounded-lg bg-gray-50/50 space-y-3">
            {/* Add new filter row */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Filter by:</span>
              <Select value={selectedColumn} onValueChange={setSelectedColumn}>
                <SelectTrigger className="h-8 w-[200px]">
                  <SelectValue placeholder="Select column..." />
                </SelectTrigger>
                <SelectContent>
                  {availableColumns.map((column) => (
                    <SelectItem key={column.id} value={column.id}>
                      {COLUMN_LABELS[column.id] || column.id}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="sm"
                onClick={addFilter}
                disabled={!selectedColumn}
                className="h-8"
              >
                <Plus className="mr-1 h-3 w-3" />
                Add Filter
              </Button>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="h-8 ml-auto"
                >
                  <X className="mr-1 h-3 w-3" />
                  Clear All
                </Button>
              )}
            </div>

            {/* Active filters */}
            {activeFilters.map((filter) => (
              <FilterRow
                key={filter.id}
                table={table}
                filter={filter}
                onUpdate={updateFilter}
                onRemove={removeFilter}
              />
            ))}

            {activeFilters.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                No active filters. Select a column above to add a filter.
              </div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}