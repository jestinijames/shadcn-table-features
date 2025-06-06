"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Header, flexRender } from "@tanstack/react-table";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { TableHead } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataTableHeaderProps<TData, TValue> {
  header: Header<TData, TValue>;
  children?: React.ReactNode;
  className?: string;
}

export function DataTableHeader<TData, TValue>({
  header,
  children,
  className,
}: DataTableHeaderProps<TData, TValue>) {
  const isDraggable =
    header.id !== "select" &&
    header.id !== "actions" &&
    header.column.getCanSort();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: header.id,
    disabled: !isDraggable,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 30 : 0, // Higher z-index when dragging
  };

  return (
    <TableHead
      ref={isDraggable ? setNodeRef : undefined}
      colSpan={header.colSpan}
      style={style}
      className={cn("relative", className)}
      {...(isDraggable ? attributes : {})}
    >
      <div className="flex items-center space-x-2">
        {/* Drag handle - separate from sort button */}
        {isDraggable && (
          <div
            {...listeners}
            className="cursor-move opacity-50 hover:opacity-100 p-1 -ml-1"
            style={{ touchAction: "none" }}
          >
            <div className="w-1 h-4 bg-border rounded-full"></div>
          </div>
        )}

        <div className="flex-1">
          {header.isPlaceholder ? null : header.id === "select" ||
            header.id === "actions" ? (
            <div className="font-semibold">{children}</div>
          ) : (
            <Button
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation(); // Prevent drag interference
                header.column.toggleSorting(
                  header.column.getIsSorted() === "asc"
                );
              }}
              className="h-auto p-2 font-semibold hover:bg-transparent relative z-10"
              style={{
                position: "relative",
                zIndex: 10,
                pointerEvents: "auto",
              }}
            >
              <span className="mr-2">{children}</span>
              {header.column.getIsSorted() === "asc" ? (
                <ArrowUp className="h-4 w-4" />
              ) : header.column.getIsSorted() === "desc" ? (
                <ArrowDown className="h-4 w-4" />
              ) : (
                <ArrowUpDown className="h-4 w-4 opacity-50" />
              )}
            </Button>
          )}
        </div>
      </div>
    </TableHead>
  );
}

// Helper function to get unique values from nested data
export const getUniqueValues = <T extends Record<string, any>>(
  data: T[],
  key: keyof T
): string[] => {
  const values = new Set<string>();

  const extractValues = (items: T[]) => {
    items.forEach((item) => {
      if (item[key]) {
        values.add(item[key] as string);
      }
      if (item.subRows) {
        extractValues(item.subRows);
      }
    });
  };

  extractValues(data);
  return Array.from(values).sort();
};
