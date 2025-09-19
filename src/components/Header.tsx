import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 font-bold text-lg">
          <img src="https://i.postimg.cc/SR9ymXdT/Untitled-design-4.png" alt="Guia Do Código Logo" className="h-20 w-20 translate-y-1" />
          <span>Guia Do Código</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium hover:underline">Home</Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:underline">Sobre</Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:underline">Contato</Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;