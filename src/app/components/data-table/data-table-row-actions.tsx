"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  Edit,
  Trash2,
  Download,
  Eye,
  Settings,
} from "lucide-react";

interface DataTableRowActionsProps<TData> {
  row: TData;
  onDelete?: (row: TData) => void;
  onEdit?: (row: TData) => void;
  onView?: (row: TData) => void;
  onDownload?: (row: TData) => void;
  onMetadata?: (row: TData) => void;
}

export function DataTableRowActions<TData extends { id: string; name?: string }>({
  row,
  onDelete,
  onEdit,
  onView,
  onDownload,
  onMetadata,
}: DataTableRowActionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(row.id)}
        >
          Copy ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onView?.(row)}>
          <Eye className="mr-2 h-4 w-4" />
          View details
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onEdit?.(row)}>
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onMetadata?.(row)}>
          <Settings className="mr-2 h-4 w-4" />
          Add/Edit metadata
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onDownload?.(row)}>
          <Download className="mr-2 h-4 w-4" />
          Download
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              className="text-red-600 cursor-pointer"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete{" "}
                <strong>{row.name || "this item"}</strong> and remove the data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => onDelete?.(row)}
                className="bg-red-600 hover:bg-red-700"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}