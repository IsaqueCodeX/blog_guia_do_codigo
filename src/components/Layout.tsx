import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <div className="relative z-10 flex flex-col flex-grow bg-background/80 backdrop-blur-sm">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;