import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  { name: "Registrations", icon: Users, path: "/dashboard/registrations" },
  { name: "Contact Section", icon: Settings, path: "/dashboard/contact" },
  { name: "FAQs", icon: Settings, path: "/dashboard/faqs" },
];

export function DashboardNav() {
  return (
    <SidebarMenu>
      {sections.map((section) => (
        <SidebarMenuItem key={section.name}>
          <Link to={section.path}>
            <SidebarMenuButton>
              <section.icon className="w-4 h-4 mr-2" />
              {section.name}
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
