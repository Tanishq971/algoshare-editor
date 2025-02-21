import EditorialPanel from "@/components/providers/EditorialPanel";
import OutputPanel from "@/components/providers/OutputPanel";
import Header from "@/components/providers/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorialPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
