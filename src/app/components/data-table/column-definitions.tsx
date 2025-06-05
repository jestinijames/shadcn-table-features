"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DataTableRowActions } from "./data-table-row-actions";
import { hierarchicalColumnFilter } from "./data-table-utils";
import { ChevronDown, ChevronRight, Folder, File } from "lucide-react";

// Fix: Import from the correct file
export type FileSystemItem = {
  id: string;
  name: string;
  uniqueStudyId: string;
  studyTitle: string;
  sponsorRepresentative?: string;
  studySpecies?: string;
  projectName?: string;
  fileUploadYear?: string;
  externalAssignedStudyNumber?: string;
  studyMaterialOrMoleculeIdentification?: string;
  studyType?: string;
  regulatoryStandard?: string;
  investigatorName?: string;
  primaryOrganizationName?: string;
  type: "folder" | "file";
  size?: string;
  subRows?: FileSystemItem[];
};

interface CreateColumnsProps {
  uniqueStudyIds: string[];
  uniqueStudyTitles: string[];
  uniqueStudyTypes: string[];
  uniqueSpecies: string[];
  onDelete?: (item: FileSystemItem) => void;
  onEdit?: (item: FileSystemItem) => void;
  onView?: (item: FileSystemItem) => void;
  onDownload?: (item: FileSystemItem) => void;
  onMetadata?: (item: FileSystemItem) => void;
}

export function createColumns({
  uniqueStudyIds,
  uniqueStudyTitles,
  uniqueStudyTypes,
  uniqueSpecies,
  onDelete,
  onEdit,
  onView,
  onDownload,
  onMetadata,
}: CreateColumnsProps): ColumnDef<FileSystemItem>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
      enablePinning: false,
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        const item = row.original;
        const hasSubRows = row.subRows && row.subRows.length > 0;

        return (
          <div className="flex items-center space-x-2">
            <div style={{ paddingLeft: `${row.depth * 20}px` }}>
              {hasSubRows ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0"
                  onClick={row.getToggleExpandedHandler()}
                >
                  {row.getIsExpanded() ? (
                    <ChevronDown className="h-3 w-3" />
                  ) : (
                    <ChevronRight className="h-3 w-3" />
                  )}
                </Button>
              ) : (
                <div className="w-4" />
              )}
            </div>
            <div className="flex items-center space-x-2">
              {item.type === "folder" ? (
                <Folder className="h-4 w-4 text-blue-500" />
              ) : (
                <File className="h-4 w-4 text-gray-500" />
              )}
              <span>{item.name}</span>
              {item.size && (
                <span className="text-sm text-gray-500">({item.size})</span>
              )}
            </div>
          </div>
        );
      },
      filterFn: hierarchicalColumnFilter,
    },
    {
      accessorKey: "uniqueStudyId",
      header: "Unique Study ID",
      filterFn: hierarchicalColumnFilter,
      meta: {
        filterVariant: "select",
        selectOptions: uniqueStudyIds,
      },
    },
    {
      accessorKey: "studyTitle",
      header: "Study Title",
      filterFn: hierarchicalColumnFilter,
      meta: {
        filterVariant: "select",
        selectOptions: uniqueStudyTitles,
      },
    },
    {
      accessorKey: "sponsorRepresentative",
      header: "Sponsor Representative",
      filterFn: hierarchicalColumnFilter,
    },
    {
      accessorKey: "studySpecies",
      header: "Study Species",
      filterFn: hierarchicalColumnFilter,
      meta: {
        filterVariant: "select",
        selectOptions: uniqueSpecies,
      },
    },
    {
      accessorKey: "projectName",
      header: "Project Name",
      filterFn: hierarchicalColumnFilter,
    },
    {
      accessorKey: "fileUploadYear",
      header: "File Upload Year",
      filterFn: hierarchicalColumnFilter,
    },
    {
      accessorKey: "externalAssignedStudyNumber",
      header: "External Assigned Study Number",
      filterFn: hierarchicalColumnFilter,
    },
    {
      accessorKey: "studyMaterialOrMoleculeIdentification",
      header: "Study Material or Molecule Identification",
      filterFn: hierarchicalColumnFilter,
    },
    {
      accessorKey: "studyType",
      header: "Study Type",
      filterFn: hierarchicalColumnFilter,
      meta: {
        filterVariant: "select",
        selectOptions: uniqueStudyTypes,
      },
    },
    {
      accessorKey: "regulatoryStandard",
      header: "Regulatory Standard",
      filterFn: hierarchicalColumnFilter,
    },
    {
      accessorKey: "investigatorName",
      header: "Investigator Name",
      filterFn: hierarchicalColumnFilter,
    },
    {
      accessorKey: "primaryOrganizationName",
      header: "Primary Organization Name",
      filterFn: hierarchicalColumnFilter,
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <DataTableRowActions
          row={row.original}
          onDelete={onDelete}
          onEdit={onEdit}
          onView={onView}
          onDownload={onDownload}
          onMetadata={onMetadata}
        />
      ),
      enableSorting: false,
      enableHiding: false,
      enablePinning: false,
    },
  ];
}
