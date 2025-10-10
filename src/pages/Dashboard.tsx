import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { columns } from "./dashboard/columns";
import { DataTable } from "./dashboard/data-table";

export type Registration = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  state: string;
  lga: string;
  current_position: string;
  organization: string;
  government_level: string;
  years_experience: string;
  grade_level: string;
  work_description: string;
  supervisor: string;
  supervisor_contact: string;
  highest_degree: string;
  field_of_study: string;
  institution: string;
  graduation_year: number;
  additional_certifications: string;
  tech_experience: string;
  tech_skills: any;
  tech_proficiency: string;
  motivation: string;
  challenges: string;
  project_idea: string;
  time_commitment: string;
  disability: string;
  accommodations: string;
  identification_document_url: string;
  created_at: string;
  updated_at: string;
};

export default function Dashboard() {
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
