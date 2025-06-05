"use client";

import { Header, flexRender } from "@tanstack/react-table";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { TableHead } from "@/components/ui/table";
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  GripVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DataTableHeaderProps<TData, TValue> {
  header: Header<TData, TValue>;
  children: React.ReactNode;
  className?: string;
}

export function DataTableHeader<TData, TValue>({
  header,
  children,
  className,
}: DataTableHeaderProps<TData, TValue>) {
  // Don't make pinned columns or select/actions draggable
  const isPinned = header.column.getIsPinned();
  const isDraggable = header.column.id !== "select" && 
                     header.column.id !== "actions" && 
                     !isPinned;

  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: header.column.id,
    disabled: !isDraggable,
  });

  const style = {
    opacity: isDragging ? 0.8 : 1,
    transform: isDraggable ? CSS.Translate.toString(transform) : undefined,
    transition: isDraggable ? transition : undefined,
    whiteSpace: "nowrap" as const,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <TableHead
      ref={isDraggable ? setNodeRef : undefined}
      colSpan={header.colSpan}
      style={style}
      className={cn("relative", className)}
      {...(isDraggable ? attributes : {})}
      {...(isDraggable ? listeners : {})}
    >
      <div className="flex items-center space-x-2">
        {isDraggable && (
          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 cursor-grab active:cursor-grabbing"
            {...attributes}
            {...listeners}
          >
            <GripVertical className="h-3 w-3" />
          </Button>
        )}
        <div className="flex-1">
          {header.isPlaceholder ? null : header.id === "select" || header.id === "actions" ? (
            <div className="flex items-center">
              {children}
            </div>
          ) : (
            <Button
              variant="ghost"
              onClick={() =>
                header.column.toggleSorting(
                  header.column.getIsSorted() === "asc"
                )
              }
              className="h-auto p-0 font-semibold hover:bg-transparent"
            >
              {children}
              {header.column.getIsSorted() === "asc" ? (
                <ArrowUp className="ml-2 h-4 w-4" />
              ) : header.column.getIsSorted() === "desc" ? (
                <ArrowDown className="ml-2 h-4 w-4" />
              ) : (
                <ArrowUpDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </div>
    </TableHead>
  );
}

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

export const fileSystemData: FileSystemItem[] = [
  {
    id: "1",
    name: "ELA195522",
    uniqueStudyId: "ELA195522",
    studyTitle: "Test 20May25",
    sponsorRepresentative: "John Smith",
    studySpecies: "Rat",
    projectName: "Project Alpha",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-001",
    studyMaterialOrMoleculeIdentification: "Compound A",
    studyType: "Toxicology",
    regulatoryStandard: "OECD",
    investigatorName: "Dr. Johnson",
    primaryOrganizationName: "Research Lab Inc",
    type: "folder",
    subRows: [
      {
        id: "1-1",
        name: "Study Reports",
        uniqueStudyId: "ELA195522",
        studyTitle: "Test 20May25",
        type: "folder",
        subRows: [
          {
            id: "1-1-1",
            name: "Final_Report.pdf",
            uniqueStudyId: "ELA195522",
            studyTitle: "Test 20May25",
            type: "file",
            size: "2.5 MB"
          },
          {
            id: "1-1-2",
            name: "Interim_Report.pdf",
            uniqueStudyId: "ELA195522",
            studyTitle: "Test 20May25",
            type: "file",
            size: "1.8 MB"
          }
        ]
      },
      {
        id: "1-2",
        name: "Raw Data",
        uniqueStudyId: "ELA195522",
        studyTitle: "Test 20May25",
        type: "folder",
        subRows: [
          {
            id: "1-2-1",
            name: "data_week1.xlsx",
            uniqueStudyId: "ELA195522",
            studyTitle: "Test 20May25",
            type: "file",
            size: "156 KB"
          },
          {
            id: "1-2-2",
            name: "data_week2.xlsx",
            uniqueStudyId: "ELA195522",
            studyTitle: "Test 20May25",
            type: "file",
            size: "164 KB"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "ELA230838",
    uniqueStudyId: "ELA230838",
    studyTitle: "Cardiovascular Safety Study",
    sponsorRepresentative: "Jane Doe",
    studySpecies: "Dog",
    projectName: "Project Beta",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-002",
    studyMaterialOrMoleculeIdentification: "Compound B",
    studyType: "Safety Pharmacology",
    regulatoryStandard: "ICH",
    investigatorName: "Dr. Williams",
    primaryOrganizationName: "Pharma Research Center",
    type: "folder",
    subRows: [
      {
        id: "2-1",
        name: "Protocol",
        uniqueStudyId: "ELA230838",
        studyTitle: "Cardiovascular Safety Study",
        type: "folder",
        subRows: [
          {
            id: "2-1-1",
            name: "Protocol_v1.0.pdf",
            uniqueStudyId: "ELA230838",
            studyTitle: "Cardiovascular Safety Study",
            type: "file",
            size: "890 KB"
          }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "ELA230839",
    uniqueStudyId: "ELA230839",
    studyTitle: "10 GB File",
    sponsorRepresentative: "Mike Johnson",
    studySpecies: "Mouse",
    projectName: "Project Gamma",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-003",
    studyMaterialOrMoleculeIdentification: "Compound C",
    studyType: "Genotoxicity",
    regulatoryStandard: "OECD",
    investigatorName: "Dr. Brown",
    primaryOrganizationName: "BioTech Solutions",
    type: "folder",
    subRows: [
      {
        id: "3-1",
        name: "ELA230839_CG14...loaded_Item",
        uniqueStudyId: "ELA230839",
        studyTitle: "10 GB File",
        type: "file",
        size: "10 GB"
      },
      {
        id: "3-2",
        name: "Elanco_ELA2308...3_115447.xls",
        uniqueStudyId: "ELA230839",
        studyTitle: "10 GB File",
        type: "file",
        size: "10 GB"
      },
      {
        id: "3-3",
        name: "TimeZone.txt",
        uniqueStudyId: "ELA230839",
        studyTitle: "10 GB File",
        type: "file",
        size: "10 GB"
      }
    ]
  }
];

// Helper function to get unique values from nested data
export const getUniqueValues = <T extends Record<string, any>>(
  data: T[],
  key: keyof T
): string[] => {
  const values = new Set<string>();
  
  const extractValues = (items: T[]) => {
    items.forEach(item => {
      if (item[key]) {
        values.add(item[key] as string);
      }
      if (item.subRows) {
        extractValues(item.subRows);
      }
    });
  };
  
  extractValues(data);
  return Array.from(values);
};