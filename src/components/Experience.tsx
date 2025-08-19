import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "AegisCovenant Private Limited",
      position: "Software Development Engineer",
      location: "Gurugram, India",
      duration: "Oct 2023 - Present",
      type: "Full-time",
      achievements: [
        "Handling production deployments and environment, ensuring smooth releases, quick hotfixes, and stable performance",
        "Built data-driven dashboards (Admin, Dealer, Accounts, Ops) with React, Node.js, and REST APIs, enabling faster cross-team reporting and decision-making",
        "Automated policy creation, dealership onboarding, and pricing workflows, cutting manual effort by 60–70% and saving 15+ hours/week",
        "Developed dynamic Pricelist & Revenue Generators with Excel import/export, improving reporting accuracy for finance and operations teams",
        "Built audit-ready exports for quotes, revenue, reconciliation tables, and pricelists, reducing manual reporting effort by ~60% and simplifying audits",
        "Created ticketing systems for client and user issues (claims, onboarding, pricing), streamlining feedback and resolution",
        "Enhanced user experience with form data persistence, reducing drop-offs and repetitive entry by 40%",
        "Integrated real-time issue reporting, accelerating bug resolution by 2x.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "REST APIs",
        "DynamoDB",
        "Real-time Charts",
        "Excel Integration",
        "Production Deployment",
      ],
    },
    {
      company: "AegisCovenant Private Limited",
      position: "Software Development Engineer Intern",
      location: "Gurugram, India",
      duration: "Apr 2021 - Jan 2023",
      type: "Internship",
      achievements: [
        "Developed core frontend components and backend APIs under mentorship",
        "Integrated AWS Lambda for scalable logic implementation",
        "Enhanced performance and resolved UI/logic bugs",
        "Gained hands-on experience with Git workflows and collaborative development",
      ],
      technologies: [
        "Frontend Components",
        "Backend APIs",
        "AWS Lambda",
        "Git",
      ],
    },
    {
      company: "MSD Technologies",
      position: "Software Test Engineer",
      location: "Gurugram, India",
      duration: "Nov 2019 - Mar 2023",
      type: "Full-time",
      achievements: [
        "Designed and executed manual test cases for functional and regression testing of HVAC simulation software",
        "Performed smoke, sanity, and exploratory testing to validate accuracy and stability of thermal design modules",
        "Identified, documented, and tracked defects while collaborating with developers for resolution",
        "Prepared test documentation including test scenarios, cases, and defect reports",
        "Assisted in final user validation testing to ensure software outputs aligned with engineering requirements",
      ],
      technologies: [
        "Manual Testing",
        "Functional & Regression Testing",
        "Smoke & Sanity Testing",
        "Test Documentation",
        "User Validation Testing",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through my professional career, from engineering to
            software development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-gradient-card border border-muted hover:shadow-card transition-all duration-500 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      {exp.company}
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-primary">
                      {exp.position}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
