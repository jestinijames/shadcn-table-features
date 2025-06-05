"use client";

import { DataTable } from "../data-table/data-table";
import { createColumns } from "../data-table/column-definitions";
import {
  fileSystemData,
  FileSystemItem,
  getUniqueValues,
} from "../data-table/data-table-header";

export function ContentTable() {
  const uniqueStudyIds = getUniqueValues(fileSystemData, "uniqueStudyId");
  const uniqueStudyTitles = getUniqueValues(fileSystemData, "studyTitle");
  const uniqueStudyTypes = getUniqueValues(fileSystemData, "studyType");
  const uniqueSpecies = getUniqueValues(fileSystemData, "studySpecies");

  const handleDelete = (item: FileSystemItem) => {
    console.log("Delete item:", item);
    // Add your delete logic here
  };

  const handleEdit = (item: FileSystemItem) => {
    console.log("Edit item:", item);
    // Add your edit logic here
  };

  const handleView = (item: FileSystemItem) => {
    console.log("View item:", item);
    // Add your view logic here
  };

  const handleDownload = (item: FileSystemItem) => {
    console.log("Download item:", item);
    // Add your download logic here
  };

  const handleMetadata = (item: FileSystemItem) => {
    console.log("Add metadata for item:", item);
    // Add your metadata logic here
  };

  const columns = createColumns({
    uniqueStudyIds,
    uniqueStudyTitles,
    uniqueStudyTypes,
    uniqueSpecies,
    onDelete: handleDelete,
    onEdit: handleEdit,
    onView: handleView,
    onDownload: handleDownload,
    onMetadata: handleMetadata,
  });

  return <DataTable columns={columns} data={fileSystemData} />;
}
