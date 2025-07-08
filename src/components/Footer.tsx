import { Mail, Phone, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-muted py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-sm font-bold text-primary-foreground">
                AK
              </div>
              <span className="font-bold text-lg text-foreground">
                Amit Kumar
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Software Development Engineer passionate about building scalable
              web applications and solving complex problems with clean,
              efficient code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Education", href: "#education" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:amit.rimit591@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                amit.rimit591@gmail.com
              </a>
              <a
                href="tel:+919760178069"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                +91-9760178069
              </a>
              <a
                href="https://www.linkedin.com/in/amitjait/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-muted pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Amit Kumar. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
