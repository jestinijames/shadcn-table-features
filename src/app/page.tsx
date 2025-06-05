import { ContentTable } from "./components/content/content-table";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">File System Table</h1>
      <ContentTable />
    </div>
  );
}
