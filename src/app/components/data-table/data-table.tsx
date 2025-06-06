"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  useReactTable,
  ColumnOrderState,
  ColumnPinningState,
} from "@tanstack/react-table";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  type DragEndEvent,
  type UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTableToolbar } from "./data-table-toolbar";
import { DataTableFilters } from "./data-table-filters";
import { DataTableHeader } from "./data-table-header";
import { DataTablePagination } from "./data-table-pagination";
import { globalFilterFn } from "./data-table-utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [expanded, setExpanded] = React.useState<ExpandedState>({});
  const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>(
    columns.map((column) => column.id as string)
  );
  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>({
    left: ["select"],
    right: ["actions"],
  });
  const [isAdvancedOpen, setIsAdvancedOpen] = React.useState(false);

  // Add this state to prevent hydration mismatch
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    onExpandedChange: setExpanded,
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,
    getSubRows: (row: any) => row.subRows,
    globalFilterFn: globalFilterFn,
    filterFns: {
      hierarchicalFilter: globalFilterFn,
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
      expanded,
      columnOrder,
      columnPinning,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  // Auto-expand rows when filtering to show matching children
  React.useEffect(() => {
    if (globalFilter) {
      const expandedState: Record<string, boolean> = {};

      table.getRowModel().rows.forEach((row) => {
        if (row.subRows && row.subRows.length > 0) {
          expandedState[row.id] = true;
        }
      });

      setExpanded(expandedState);
    } else {
      setExpanded({});
    }
  }, [globalFilter, table]);

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setColumnOrder((columnOrder) => {
        const oldIndex = columnOrder.indexOf(active.id as string);
        const newIndex = columnOrder.indexOf(over.id as string);

        const newColumnOrder = [...columnOrder];
        newColumnOrder.splice(oldIndex, 1);
        newColumnOrder.splice(newIndex, 0, active.id as string);

        return newColumnOrder;
      });
    }
  }

  // Function to reset all filters
  const resetAllFilters = () => {
    setGlobalFilter("");
    table.resetColumnFilters();
    setExpanded({});
    setIsAdvancedOpen(false);
  };

  // Check if any filters are active
  const hasActiveFilters =
    !!globalFilter || table.getState().columnFilters.length > 0;

  // Helper function to get consistent pinning styles with solid background
  const getPinnedStyles = (isPinned: false | "left" | "right") => {
    if (!isPinned) return "";

    const baseStyles = "sticky z-20 bg-background";
    const positionStyles =
      isPinned === "left"
        ? "left-0 border-r border-border shadow-sm"
        : "right-0 border-l border-border shadow-sm";

    return `${baseStyles} ${positionStyles}`;
  };

  const renderTable = () => (
    <Table style={{ minWidth: `${table.getTotalSize()}px` }}>
      <TableHeader>
        <TableRow>
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <DataTableHeader
                key={header.id}
                header={header}
                className={getPinnedStyles(header.column.getIsPinned())}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </DataTableHeader>
            ))
          )}
        </TableRow>
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => {
                const isPinned = cell.column.getIsPinned();
                return (
                  <TableCell
                    key={cell.id}
                    className={getPinnedStyles(isPinned)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );

  return (
    <div className="w-full space-y-4">
      <DataTableToolbar
        table={table}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        resetAllFilters={resetAllFilters}
        hasActiveFilters={hasActiveFilters}
      />

      <DataTableFilters
        table={table}
        isAdvancedOpen={isAdvancedOpen}
        setIsAdvancedOpen={setIsAdvancedOpen}
      />

      <div className="rounded-md border">
        <div className="overflow-x-auto">
          {isMounted ? (
            <DndContext
              id="table-dnd-context"
              collisionDetection={closestCenter}
              modifiers={[restrictToHorizontalAxis]}
              onDragEnd={handleDragEnd}
              sensors={sensors}
            >
              <SortableContext
                items={columnOrder.map((id) => id)}
                strategy={horizontalListSortingStrategy}
              >
                {renderTable()}
              </SortableContext>
            </DndContext>
          ) : (
            renderTable()
          )}
        </div>
      </div>

      <DataTablePagination table={table} />
    </div>
  );
}
