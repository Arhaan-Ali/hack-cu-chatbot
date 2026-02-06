import { Button } from "@/components/ui/button";
import { Leaf, Sun } from "lucide-react";
import Link from "next/link";

const HeaderLayout = () => {
  return (
    <header className="sticky top-0 z-100 w-full border-b border-border bg-white/60 backdrop-blur-sm shadow-inset transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between py-4 px-4 sm:px-0">
        <Link
          href="/"
          className="font-bold text-2xl text-foreground hover:text-primary transition-colors"
        >
          <Leaf size={28} className="inline-block mr-4 text-primary" />
          LOGO
        </Link>
        <div className="flex items-center gap-4">
          <Button className="" variant="ghost">
            <Sun size={28} />
          </Button>
          <Button className="hidden sm:inline-flex" variant="default">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
