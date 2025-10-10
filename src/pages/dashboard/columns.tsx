"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useToast } from "@/hooks/use-toast";
import { Registration } from "../Dashboard";

export const columns: ColumnDef<Registration>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "lga",
    header: "LGA",
  },
  {
    accessorKey: "current_position",
    header: "Current Position",
  },
  {
    accessorKey: "organization",
    header: "Organization",
  },
  {
    accessorKey: "government_level",
    header: "Government Level",
  },
  {
    accessorKey: "years_experience",
    header: "Years of Experience",
  },
  {
    accessorKey: "grade_level",
    header: "Grade Level",
  },
  {
    accessorKey: "work_description",
    header: "Work Description",
  },
  {
    accessorKey: "supervisor",
    header: "Supervisor",
  },
  {
    accessorKey: "supervisor_contact",
    header: "Supervisor Contact",
  },
  {
    accessorKey: "highest_degree",
    header: "Highest Degree",
  },
  {
    accessorKey: "field_of_study",
    header: "Field of Study",
  },
  {
    accessorKey: "institution",
    header: "Institution",
  },
  {
    accessorKey: "graduation_year",
    header: "Graduation Year",
  },
  {
    accessorKey: "additional_certifications",
    header: "Additional Certifications",
  },
  {
    accessorKey: "tech_experience",
    header: "Tech Experience",
  },
  {
    accessorKey: "tech_skills",
    header: "Tech Skills",
    cell: ({ row }) => {
      const skills = row.getValue("tech_skills") as any;
      return <div>{skills ? JSON.stringify(skills) : ""}</div>;
    },
  },
  {
    accessorKey: "tech_proficiency",
    header: "Tech Proficiency",
  },
  {
    accessorKey: "motivation",
    header: "Motivation",
  },
  {
    accessorKey: "challenges",
    header: "Challenges",
  },
  {
    accessorKey: "project_idea",
    header: "Project Idea",
  },
  {
    accessorKey: "time_commitment",
    header: "Time Commitment",
  },
  {
    accessorKey: "disability",
    header: "Disability",
  },
  {
    accessorKey: "accommodations",
    header: "Accommodations",
  },
  {
    accessorKey: "identification_document_url",
    header: "Identification Document",
    cell: ({ row }) => {
      const { toast } = useToast();
      const identificationDocument = row.getValue(
        "identification_document_url"
      ) as string;

      const handleCopy = () => {
        navigator.clipboard.writeText(identificationDocument).then(
          () => {
            toast({
              title: "Copied!",
              description: "Identification document copied to clipboard.",
            });
          },
          (err) => {
            toast({
              title: "Failed to copy!",
              description: "Could not copy text.",
            });
            console.error("Could not copy text: ", err);
          }
        );
      };

      return (
        <div onClick={handleCopy} style={{ cursor: "pointer" }}>
          {identificationDocument}
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
  },
];
