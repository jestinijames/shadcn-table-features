import { FilterFn } from "@tanstack/react-table";

// Custom global filter that works with hierarchical data
export const globalFilterFn: FilterFn<any> = (row, columnId, value, addMeta) => {
  const search = value.toLowerCase();
  
  // Function to check if any value in the row matches the search
  const matchesSearch = (item: any): boolean => {
    return Object.values(item).some((field: any) => {
      if (field == null) return false;
      return String(field).toLowerCase().includes(search);
    });
  };

  // Function to check if any descendant matches
  const hasMatchingDescendant = (item: any): boolean => {
    if (!item.subRows || item.subRows.length === 0) return false;
    
    return item.subRows.some((subRow: any) => {
      return matchesSearch(subRow) || hasMatchingDescendant(subRow);
    });
  };

  // Function to check if any ancestor matches
  const hasMatchingAncestor = (currentRow: any): boolean => {
    let parentRow = currentRow.getParentRow?.();
    while (parentRow) {
      if (matchesSearch(parentRow.original)) {
        return true;
      }
      parentRow = parentRow.getParentRow?.();
    }
    return false;
  };

  const currentItem = row.original;
  
  // Show row if:
  // 1. The current row matches the search
  // 2. Any of its descendants match the search (show parent if child matches)
  // 3. Any of its ancestors match the search (show child if parent matches)
  return (
    matchesSearch(currentItem) || 
    hasMatchingDescendant(currentItem) || 
    hasMatchingAncestor(row)
  );
};

// Custom column filter that works with hierarchical data
export const hierarchicalColumnFilter: FilterFn<any> = (row, columnId, value) => {
  if (!value || value.length === 0) return true;
  
  const cellValue = row.getValue(columnId);
  if (!cellValue) return false;
  
  // For array values (multi-select filters)
  if (Array.isArray(value)) {
    return value.includes(cellValue);
  }
  
  // For string values (text filters)
  return String(cellValue).toLowerCase().includes(String(value).toLowerCase());
};