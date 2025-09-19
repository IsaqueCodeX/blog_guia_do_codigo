import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t bg-background relative z-10">
      <div className="container mx-auto flex flex-col items-center gap-4 py-6 px-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Guia Do Código. Desenvolvido por Isaque Santos.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/isaque-santos-720b8b15a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/IsaqueCodeX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;