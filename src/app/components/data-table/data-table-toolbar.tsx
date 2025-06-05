"use client";

import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Search, X, Settings2, RotateCcw } from "lucide-react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  resetAllFilters: () => void;
  hasActiveFilters: boolean;
}

export function DataTableToolbar<TData>({
  table,
  globalFilter,
  setGlobalFilter,
  resetAllFilters,
  hasActiveFilters,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search all columns..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(String(event.target.value))}
            className="pl-8 max-w-sm"
          />
          {globalFilter && (
            <Button
              variant="ghost"
              onClick={() => setGlobalFilter("")}
              className="absolute right-1 top-1 h-6 w-6 p-0"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={resetAllFilters}
            className="h-9 px-3"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset All Filters
          </Button>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Settings2 className="mr-2 h-4 w-4" />
              View
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
