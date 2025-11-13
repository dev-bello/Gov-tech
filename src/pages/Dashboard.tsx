import { Outlet } from "react-router-dom";
import { DashboardLayout } from "./dashboard/DashboardLayout";

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

import withAuth from "@/components/withAuth";
function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default withAuth(Dashboard);
