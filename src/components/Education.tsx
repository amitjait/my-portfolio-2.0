import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, CalendarDays, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      degree: "Bachelor of Technology",
      location: "Lucknow, India",
      duration: "July 2015 - Aug 2019",
      gpa: "3.36/4.00",
      type: "Bachelor's Degree",
    },
    {
      institution: "AccioJob",
      degree: "Full Stack Development Course",
      location: "Gurugram, India",
      duration: "Mar 2022 - Apr 2023",
      gpa: null,
      type: "Professional Course",
    },
  ];

  return (
    <section id="education" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-gradient-card border border-muted hover:shadow-card transition-all duration-500 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-foreground mb-2">
                      {edu.institution}
                    </CardTitle>
                    <h3 className="text-primary font-semibold mb-3">
                      {edu.degree}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="h-4 w-4" />
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                    <Badge variant="secondary" className="mt-3">
                      {edu.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border border-muted hover:shadow-card transition-all duration-500 text-center p-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">
                  Technical Education
                </h4>
                <p className="text-sm text-muted-foreground">
                  Bachelor's in Technology with strong foundation in engineering
                  principles
                </p>
              </div>
            </Card>

            <Card className="bg-gradient-card border border-muted hover:shadow-card transition-all duration-500 text-center p-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">
                  Professional Training
                </h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive full-stack development course from industry
                  professionals
                </p>
              </div>
            </Card>

            <Card className="bg-gradient-card border border-muted hover:shadow-card transition-all duration-500 text-center p-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">
                  Continuous Learning
                </h4>
                <p className="text-sm text-muted-foreground">
                  Committed to staying updated with latest technologies and best
                  practices
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
