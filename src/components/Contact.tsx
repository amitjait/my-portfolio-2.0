import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Download,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amit.rimit591@gmail.com",
      href: "mailto:amit.rimit591@gmail.com",
      primary: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9760178069",
      href: "tel:+919760178069",
      primary: false,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Agra, Uttar Pradesh, India",
      href: null,
      primary: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/amitjait",
      href: "https://www.linkedin.com/in/amitjait/",
      primary: true,
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Feel free to reach out if you'd like to discuss potential
            collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-gradient-card border border-muted hover:shadow-card transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="group">
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group-hover:scale-105"
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          contact.primary
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">
                          {contact.label}
                        </p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                      {contact.href.startsWith("http") && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-3">
                      <div className="p-2 rounded-lg bg-muted">
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {contact.label}
                        </p>
                        <p className="font-medium text-foreground">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gradient-card border border-muted hover:shadow-card transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  onClick={() =>
                    window.open("mailto:amit.rimit591@gmail.com", "_blank")
                  }
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Send Email
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full group"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/amitjait/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Connect on LinkedIn
                </Button>

                <Button variant="ghost" size="lg" className="w-full group">
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </Button>
              </div>

              <div className="pt-6 border-t border-muted">
                <h4 className="font-semibold mb-3 text-foreground">
                  Availability
                </h4>
                <div className="space-y-2">
                  <Badge
                    variant="default"
                    className="bg-green-500/10 text-green-600 border-green-500/20"
                  >
                    Available for new opportunities
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Open to full-time positions, freelance projects, and
                    consulting opportunities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="inline-block bg-gradient-card border border-muted p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm excited to help bring your ideas to life with clean,
              efficient, and scalable solutions.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() =>
                window.open("mailto:amit.rimit591@gmail.com", "_blank")
              }
            >
              Let's Get Started
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
