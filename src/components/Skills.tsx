import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Server, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 80 },
        { name: "TypeScript", level: 85 },
      ],
    },
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Redux", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Bootstrap", level: 80 },
        { name: "Styled Components", level: 75 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "WebSockets", level: 75 },
      ],
    },
    {
      title: "Database Systems",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "BigQuery (GCP)", level: 70 },
        { name: "DynamoDB (AWS)", level: 80 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "AWS Lambda", level: 75 },
        { name: "Puppeteer", level: 70 },
      ],
    },
    {
      title: "Problem Solving",
      icon: Brain,
      skills: [
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "System Design", level: 75 },
        { name: "Code Optimization", level: 80 },
      ],
    },
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <section id="skills" className="py-16 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gradient-card border border-muted hover:shadow-card transition-all duration-500 hover:border-primary/20"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(
                          skill.level
                        )}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block bg-gradient-card border border-muted p-6">
            <div className="flex items-center justify-center gap-4">
              <Brain className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-foreground">200+</h3>
                <p className="text-muted-foreground">DSA Problems Solved</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
