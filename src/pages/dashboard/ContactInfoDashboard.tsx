import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type ContactInfo = {
  id: string;
  email: string;
  phone: string;
  instagram_handle: string;
  linkedin_name: string;
  organization_name: string;
};

export default function ContactInfoDashboard() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("contact_info")
        .select()
        .single();
      if (error) {
        console.error("Error fetching contact info:", error);
      } else {
        setContactInfo(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
    if (!contactInfo) return;
    const { error } = await supabase
      .from("contact_info")
      .update({
        email: contactInfo.email,
        phone: contactInfo.phone,
        instagram_handle: contactInfo.instagram_handle,
        linkedin_name: contactInfo.linkedin_name,
        organization_name: contactInfo.organization_name,
      })
      .eq("id", contactInfo.id);

    if (error) {
      console.error("Error updating contact info:", error);
    } else {
      toast({
        title: "Success",
        description: "Contact information updated successfully!",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!contactInfo) return;
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        {contactInfo && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={contactInfo.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={contactInfo.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="instagram_handle">Instagram Handle</Label>
              <Input
                id="instagram_handle"
                name="instagram_handle"
                value={contactInfo.instagram_handle}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="linkedin_name">LinkedIn Name</Label>
              <Input
                id="linkedin_name"
                name="linkedin_name"
                value={contactInfo.linkedin_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="organization_name">Organization Name</Label>
              <Input
                id="organization_name"
                name="organization_name"
                value={contactInfo.organization_name}
                onChange={handleChange}
              />
            </div>
            <Button onClick={handleUpdate}>Update Contact Info</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
