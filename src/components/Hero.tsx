import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Linkedin, Github, Download } from "lucide-react";

import myself from "../assets/myself.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                Available for new opportunities
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground">
                Amit Kumar
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Software Development Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Skilled software developer with 1.5+ years of experience
                building full-stack web applications using React, Node.js, and
                MySQL. Passionate about clean code, scalable systems, and
                continuous learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <a
                href="mailto:amit.rimit591@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                amit.rimit591@gmail.com
              </a>
              <a
                href="tel:+919760178069"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91-9760178069
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Agra, Uttar Pradesh, India
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="flex justify-center animate-slide-in-left">
            <Card className="p-8 max-w-md w-full bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 border border-muted">
              <div className="text-center space-y-6">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground shadow-glow overflow-hidden">
                  {/* AK */}
                  <img src={myself} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Amit Kumar</h3>
                  <p className="text-muted-foreground">
                    Software Development Engineer
                  </p>
                  <p className="text-sm text-muted-foreground">
                    1.5+ years experience • 200+ DSA problems solved
                  </p>
                </div>

                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/amitjait/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:amit.rimit591@gmail.com"
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
