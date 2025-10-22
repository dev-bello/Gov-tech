import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import Cookies from "js-cookie";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS = [
  "Personal Information",
  "Professional Information",
  "Educational Background",
  "Technology Experience & Interest",
  "Motivation",
  "Diversity & Inclusion ",
  "Declaration & Consent",
];

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = Cookies.get("registrationFormStep");
    return savedStep ? parseInt(savedStep, 10) : 0;
  });
  const { toast } = useToast();
  const [formData, setFormData] = useState(() => {
    const savedData = Cookies.get("registrationFormData");
    return savedData ? JSON.parse(savedData) : {};
  });

  const isDeclarationComplete =
    formData.accuracy &&
    formData.authorization &&
    formData.commitment &&
    formData.dataConsent &&
    formData.communication;

  useEffect(() => {
    Cookies.set("registrationFormData", JSON.stringify(formData), {
      expires: 7,
    });
  }, [formData]);

  useEffect(() => {
    Cookies.set("registrationFormStep", currentStep.toString(), { expires: 7 });
  }, [currentStep]);

  const handleSubmit = async () => {
    // Map frontend state to Supabase schema
    const submissionData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
      address: formData.address,
      state: formData.state,
      lga: formData.lga,
      current_position: formData.currentPosition,
      organization: formData.organization,
      government_level: formData.governmentLevel,
      years_experience: formData.yearsExperience,
      grade_level: formData.gradeLevel,
      work_description: formData.workDescription,
      supervisor: formData.supervisor,
      supervisor_contact: formData.supervisorContact,
      highest_degree: formData.highestDegree,
      field_of_study: formData.fieldOfStudy,
      institution: formData.institution,
      graduation_year: formData.graduationYear,
      additional_certifications: formData.additionalCertifications,
      tech_experience: formData.techExperience,
      tech_skills: formData.techSkills,
      tech_proficiency: formData.techProficiency,
      motivation: formData.motivation,
      challenges: formData.challenges,
      project_idea: formData.projectIdea,
      time_commitment: formData.timeCommitment,
      disability: formData.disability,
      accommodations: formData.accommodations,
    };

    const { error } = await supabase
      .from("lld_registrations")
      .insert([submissionData]);

    if (error) {
      if (error.code === "23505") {
        toast({
          title: "Submission Failed",
          description: "This email has already been registered.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: error.message,
          variant: "destructive",
        });
      }
      console.error("Error submitting application:", error);
    } else {
      toast({
        title: "Success!",
        description: "Your application has been submitted successfully.",
      });

      // Invoke the send-email Edge Function
      const { error: functionError } = await supabase.functions.invoke(
        "send-email",
        {
          body: { email: formData.email },
        }
      );

      if (functionError) {
        console.error("Error sending email:", functionError);
        // Optionally, show a toast notification for email failure
        toast({
          title: "Email Failed",
          description: "Could not send confirmation email.",
          variant: "destructive",
        });
      }

      Cookies.remove("registrationFormData");
      Cookies.remove("registrationFormStep");
      setFormData({});
      setCurrentStep(0);
      onClose();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const { checked } = e.target as HTMLInputElement;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (name: string, value: string | boolean) => {
    if (name.includes(".")) {
      const [outer, inner] = name.split(".");
      setFormData((prev: any) => ({
        ...prev,
        [outer]: {
          ...prev[outer],
          [inner]: value,
        },
      }));
    } else {
      setFormData((prev: any) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNestedChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const { checked } = e.target as HTMLInputElement;
    const [outer, inner] = name.split(".");
    setFormData((prev: any) => ({
      ...prev,
      [outer]: {
        ...prev[outer],
        [inner]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">{STEPS[currentStep]}</h3>
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName || ""}
                onChange={handleChange}
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName || ""}
                onChange={handleChange}
              />
              <Input
                name="email"
                placeholder="Email Address"
                type="email"
                value={formData.email || ""}
                onChange={handleChange}
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                type="tel"
                value={formData.phone || ""}
                onChange={handleChange}
              />

              <div className="col-span-2">
                <Select
                  name="gender"
                  onValueChange={(value) => handleSelectChange("gender", value)}
                  value={formData.gender}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Textarea
                name="address"
                placeholder="Residential Address"
                className="col-span-2"
                value={formData.address || ""}
                onChange={handleChange}
              />
              <Input
                name="state"
                placeholder="State of Residence"
                value={formData.state || ""}
                onChange={handleChange}
              />
              <Input
                name="lga"
                placeholder="Local Government Area"
                value={formData.lga || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case 1: // Professional Information
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">{STEPS[currentStep]}</h3>
            <div className="grid grid-cols-2 gap-4">
              <Input
                className="col-span-2"
                name="currentPosition"
                placeholder="Current Job Title/Position"
                value={formData.currentPosition || ""}
                onChange={handleChange}
              />
              <Input
                className="col-span-2"
                name="organization"
                placeholder="Current Organization/Agency"
                value={formData.organization || ""}
                onChange={handleChange}
              />
              <div className="col-span-2">
                <RadioGroup
                  name="governmentLevel"
                  onValueChange={(value) =>
                    handleSelectChange("governmentLevel", value)
                  }
                  value={formData.governmentLevel}
                >
                  <Label>Level of Government</Label>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="federal" id="federal" />
                    <Label htmlFor="federal">Federal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="state" id="state" />
                    <Label htmlFor="state">State</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="local" id="local" />
                    <Label htmlFor="local">Local Government</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="col-span-2">
                <Select
                  name="yearsExperience"
                  onValueChange={(value) =>
                    handleSelectChange("yearsExperience", value)
                  }
                  value={formData.yearsExperience}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Years of Government Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="11-15">11-15 years</SelectItem>
                    <SelectItem value="16-20">16-20 years</SelectItem>
                    <SelectItem value="20+">20+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input
                className="col-span-2"
                name="gradeLevel"
                placeholder="Current Grade Level (if applicable)"
                value={formData.gradeLevel || ""}
                onChange={handleChange}
              />
              <Textarea
                className="col-span-2"
                name="workDescription"
                placeholder="Brief Description of Current Role and Responsibilities"
                value={formData.workDescription || ""}
                onChange={handleChange}
              />
              <Input
                className="col-span-2"
                name="supervisor"
                placeholder="Direct Supervisor's Name and Position"
                value={formData.supervisor || ""}
                onChange={handleChange}
              />
              <Input
                className="col-span-2"
                name="supervisorContact"
                placeholder="Supervisor's Contact Information"
                value={formData.supervisorContact || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case 2: // Educational Background
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">{STEPS[currentStep]}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Select
                  name="highestDegree"
                  onValueChange={(value) =>
                    handleSelectChange("highestDegree", value)
                  }
                  value={formData.highestDegree}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Highest Educational Qualification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="secondary">
                      Secondary School Certificate
                    </SelectItem>
                    <SelectItem value="diploma">Diploma/Certificate</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">Ph.D./Doctorate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input
                name="fieldOfStudy"
                placeholder="Field of Study"
                value={formData.fieldOfStudy || ""}
                onChange={handleChange}
                required
              />
              <Input
                name="institution"
                placeholder="Institution"
                value={formData.institution || ""}
                onChange={handleChange}
                required
              />
              <Input
                className="col-span-2"
                name="graduationYear"
                placeholder="Year of Graduation"
                type="number"
                value={formData.graduationYear || ""}
                onChange={handleChange}
                required
              />
              <Textarea
                className="col-span-2"
                name="additionalCertifications"
                placeholder="Additional Professional Certifications or Training"
                value={formData.additionalCertifications || ""}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      case 3: // Technology Experience & Interest
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">{STEPS[currentStep]}</h3>
            <div className="grid grid-cols-2 gap-4">
              <Textarea
                className="col-span-2"
                name="techExperience"
                placeholder="Describe your experience with technology in government work"
                value={formData.techExperience || ""}
                onChange={handleChange}
              />
              <div className="col-span-2">
                <Label>Technical Skills</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="msOffice"
                      name="techSkills.msOffice"
                      checked={formData.techSkills?.msOffice || false}
                      onCheckedChange={(checked) =>
                        handleSelectChange("techSkills.msOffice", !!checked)
                      }
                    />
                    <Label htmlFor="msOffice">Microsoft Office</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="dataAnalysis"
                      name="techSkills.dataAnalysis"
                      checked={formData.techSkills?.dataAnalysis || false}
                      onCheckedChange={(checked) =>
                        handleSelectChange("techSkills.dataAnalysis", !!checked)
                      }
                    />
                    <Label htmlFor="dataAnalysis">Data Analysis</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="projectMgmt"
                      name="techSkills.projectMgmt"
                      checked={formData.techSkills?.projectMgmt || false}
                      onCheckedChange={(checked) =>
                        handleSelectChange("techSkills.projectMgmt", !!checked)
                      }
                    />
                    <Label htmlFor="projectMgmt">Project Management</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="webDev"
                      name="techSkills.webDev"
                      checked={formData.techSkills?.webDev || false}
                      onCheckedChange={(checked) =>
                        handleSelectChange("techSkills.webDev", !!checked)
                      }
                    />
                    <Label htmlFor="webDev">Web Development</Label>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <RadioGroup
                  name="techProficiency"
                  onValueChange={(value) =>
                    handleSelectChange("techProficiency", value)
                  }
                  value={formData.techProficiency}
                >
                  <Label>Rate your overall technology proficiency</Label>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner">Beginner</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">Intermediate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="advanced" id="advanced" />
                    <Label htmlFor="advanced">Advanced</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="expert" id="expert" />
                    <Label htmlFor="expert">Expert</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );
      case 4: // Motivation
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">{STEPS[currentStep]}</h3>
            <div className="grid grid-cols-2 gap-4">
              <Textarea
                className="col-span-2"
                name="motivation"
                placeholder="Why do you want to participate in this fellowship?"
                value={formData.motivation || ""}
                onChange={handleChange}
              />
              <Textarea
                className="col-span-2"
                name="challenges"
                placeholder="What specific technology challenges does your organization face?"
                value={formData.challenges || ""}
                onChange={handleChange}
              />
              <Textarea
                className="col-span-2"
                name="projectIdea"
                placeholder="Do you have a potential capstone project idea?"
                value={formData.projectIdea || ""}
                onChange={handleChange}
              />
              <div className="col-span-2">
                <RadioGroup
                  name="timeCommitment"
                  onValueChange={(value) =>
                    handleSelectChange("timeCommitment", value)
                  }
                  value={formData.timeCommitment}
                >
                  <Label>Can you commit to 4 hours per week?</Label>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yesCommit" />
                    <Label htmlFor="yesCommit">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="noCommit" />
                    <Label htmlFor="noCommit">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );
      case 5: // Diversity & Inclusion
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">{STEPS[currentStep]}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <RadioGroup
                  name="disability"
                  onValueChange={(value) =>
                    handleSelectChange("disability", value)
                  }
                  value={formData.disability}
                >
                  <Label>Do you identify as a person with disability?</Label>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="disabilityYes" />
                    <Label htmlFor="disabilityYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="disabilityNo" />
                    <Label htmlFor="disabilityNo">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="prefer-not-to-say"
                      id="disabilityPreferNot"
                    />
                    <Label htmlFor="disabilityPreferNot">
                      Prefer not to say
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <Textarea
                className="col-span-2"
                name="accommodations"
                placeholder="Do you require any special accommodations?"
                value={formData.accommodations || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        );

      case 6: // Declaration & Consent
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">{STEPS[currentStep]}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Please select all options to proceed
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="accuracy"
                  name="accuracy"
                  checked={formData.accuracy || false}
                  onCheckedChange={(checked) =>
                    handleSelectChange("accuracy", !!checked)
                  }
                  required
                />
                <Label htmlFor="accuracy">
                  I certify that all information is true and accurate.
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="authorization"
                  name="authorization"
                  checked={formData.authorization || false}
                  onCheckedChange={(checked) =>
                    handleSelectChange("authorization", !!checked)
                  }
                  required
                />
                <Label htmlFor="authorization">
                  I authorize verification of the information provided.
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="commitment"
                  name="commitment"
                  checked={formData.commitment || false}
                  onCheckedChange={(checked) =>
                    handleSelectChange("commitment", !!checked)
                  }
                  required
                />
                <Label htmlFor="commitment">
                  I commit to full participation if selected.
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="dataConsent"
                  name="dataConsent"
                  checked={formData.dataConsent || false}
                  onCheckedChange={(checked) =>
                    handleSelectChange("dataConsent", !!checked)
                  }
                  required
                />
                <Label htmlFor="dataConsent">
                  I consent to the use of my personal data for this program.
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="communication"
                  name="communication"
                  checked={formData.communication || false}
                  onCheckedChange={(checked) =>
                    handleSelectChange("communication", !!checked)
                  }
                  required
                />
                <Label htmlFor="communication">
                  I agree to receive program updates.
                </Label>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>LLD Gov-Tech Fellowship Program 2026</DialogTitle>
          <DialogDescription>
            Advancing Government Services Through Technology in Nigeria
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">{renderStep()}</div>
        <div className="flex justify-between">
          {currentStep > 0 && (
            <Button onClick={prevStep} variant="outline">
              Previous
            </Button>
          )}
          {currentStep < STEPS.length - 1 ? (
            <Button onClick={nextStep}>Next</Button>
          ) : (
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!isDeclarationComplete}
            >
              Submit
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
