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
        "Built data-driven dashboards (Admin, Dealer, Accounts, Ops) using React and Node.js with REST APIs and real-time charts, reducing cross-team reporting effort by 50%",
        "Implemented smart policy creation with vehicle registration auto-fill and advanced retry logic, cutting manual form entry by 70% and improving policy success rate by 30%",
        "Developed a dynamic PriceList Generator with variant-specific logic and DynamoDB storage, reducing manual pricing overhead by 15+ hours/week",
        "Automated complete Dealership Onboarding module with ticket-based workflow, reducing onboarding time from 3 days to under 1 day",
        "Created Revenue PriceList Generator with Excel export capabilities, enabling finance team to generate insights in minutes instead of hours",
        "Added form data persistence via local storage, reducing user drop-offs by 40% and improving user experience",
        "Integrated ClickUp issue reporting across dashboards, accelerating bug tracking and resolution by 2x",
        "Developed data export tools for quotes, revenue, and pricelists, reducing manual reporting effort by 60%",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "REST APIs",
        "DynamoDB",
        "Real-time Charts",
        "Excel Integration",
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
      position: "HVAC Thermal Design Engineer",
      location: "Gurugram, India",
      duration: "Nov 2019 - Mar 2023",
      type: "Full-time",
      achievements: [
        "Designed and simulated HVAC systems for commercial projects using thermal design tools",
        "Focused on energy optimization and airflow dynamics",
        "Delivered projects for commercial clients with improved energy efficiency",
      ],
      technologies: [
        "HVAC Design",
        "Thermal Simulation",
        "Energy Optimization",
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
            software development
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
