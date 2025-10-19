import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Registration } from "../Dashboard";

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10 mb-2">
      <h1 className="text-2xl font-bold mb-12">LLD Registrations</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
