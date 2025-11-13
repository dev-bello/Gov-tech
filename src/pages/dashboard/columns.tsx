"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useToast } from "@/hooks/use-toast";
import { Registration } from "../Dashboard";

export const columns: ColumnDef<Registration>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("first_name")}</div>
    ),
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("last_name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("gender")}</div>
    ),
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("address")}</div>
    ),
  },
  {
    accessorKey: "state",
    header: "State",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("state")}</div>
    ),
  },
  {
    accessorKey: "lga",
    header: "LGA",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("lga")}</div>
    ),
  },
  {
    accessorKey: "current_position",
    header: "Current Position",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("current_position")}</div>
    ),
  },
  {
    accessorKey: "organization",
    header: "Organization",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("organization")}</div>
    ),
  },
  {
    accessorKey: "government_level",
    header: "Government Level",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("government_level")}</div>
    ),
  },
  {
    accessorKey: "years_experience",
    header: "Years of Experience",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("years_experience")}</div>
    ),
  },
  {
    accessorKey: "grade_level",
    header: "Grade Level",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("grade_level")}</div>
    ),
  },
  {
    accessorKey: "work_description",
    header: "Work Description",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("work_description")}</div>
    ),
  },
  {
    accessorKey: "supervisor",
    header: "Supervisor",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("supervisor")}</div>
    ),
  },
  {
    accessorKey: "supervisor_contact",
    header: "Supervisor Contact",
    cell: ({ row }) => (
      <div className="truncate-3-lines">
        {row.getValue("supervisor_contact")}
      </div>
    ),
  },
  {
    accessorKey: "highest_degree",
    header: "Highest Degree",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("highest_degree")}</div>
    ),
  },
  {
    accessorKey: "field_of_study",
    header: "Field of Study",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("field_of_study")}</div>
    ),
  },
  {
    accessorKey: "institution",
    header: "Institution",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("institution")}</div>
    ),
  },
  {
    accessorKey: "graduation_year",
    header: "Graduation Year",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("graduation_year")}</div>
    ),
  },
  {
    accessorKey: "additional_certifications",
    header: "Additional Certifications",
    cell: ({ row }) => (
      <div className="truncate-3-lines">
        {row.getValue("additional_certifications")}
      </div>
    ),
  },
  {
    accessorKey: "tech_experience",
    header: "Tech Experience",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("tech_experience")}</div>
    ),
  },
  {
    accessorKey: "tech_skills",
    header: "Tech Skills",
    cell: ({ row }) => {
      const skills = row.getValue("tech_skills") as any;
      return (
        <div className="truncate-3-lines">
          {skills ? JSON.stringify(skills) : ""}
        </div>
      );
    },
  },
  {
    accessorKey: "tech_proficiency",
    header: "Tech Proficiency",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("tech_proficiency")}</div>
    ),
  },
  {
    accessorKey: "motivation",
    header: "Motivation",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("motivation")}</div>
    ),
  },
  {
    accessorKey: "challenges",
    header: "Challenges",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("challenges")}</div>
    ),
  },
  {
    accessorKey: "project_idea",
    header: "Project Idea",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("project_idea")}</div>
    ),
  },
  {
    accessorKey: "time_commitment",
    header: "Time Commitment",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("time_commitment")}</div>
    ),
  },
  {
    accessorKey: "disability",
    header: "Disability",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("disability")}</div>
    ),
  },
  {
    accessorKey: "accommodations",
    header: "Accommodations",
    cell: ({ row }) => (
      <div className="truncate-3-lines">{row.getValue("accommodations")}</div>
    ),
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
        <div
          onClick={handleCopy}
          style={{ cursor: "pointer" }}
          className="truncate-3-lines"
        >
          {identificationDocument}
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Date Registred",
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return <div>{formattedDate}</div>;
    },
  },
];
