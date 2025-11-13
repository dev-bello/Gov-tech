import { useEffect, useState } from "react";
import { unparse } from "papaparse";
import { supabase } from "@/lib/supabase";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Registration } from "../Dashboard";
import { Button } from "@/components/ui/button";

export default function RegistrationsDashboard() {
  const [data, setData] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("lld_registrations").select();
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(data as Registration[]);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleExport = () => {
    const csv = unparse(data, {
      header: true,
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "registrations.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10 mb-2">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold">
          LLD Registrations ({data.length})
        </h1>
        <Button onClick={handleExport}>Export as CSV</Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
