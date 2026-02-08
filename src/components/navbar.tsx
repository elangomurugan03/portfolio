"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Experience", link: "/experience" },
  { name: "Projects", link: "/projects" },
  { name: "Case Studies", link: "/case-studies" },
];

// Theme Toggle Component
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 rounded-lg bg-secondary/50 border border-border/50 hover:bg-secondary transition-all duration-300 flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-4 h-4 text-muted-foreground flex items-center justify-center"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </motion.div>
    </motion.button>
  );
};

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b-4 border-border shadow-lg">
      <div className="w-full pl-14 pr-6 sm:pr-8 lg:pr-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" scroll={true} className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
              EM
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              Elango M
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                scroll={true}
                className={cn(
                  "relative px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300",
                  pathname === item.link
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                <div className="flex items-center gap-2">
                  {pathname === item.link && (
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  )}
                  {item.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop: Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              scroll={true}
              className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-base"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg text-foreground hover:bg-secondary/50 transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/99 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  scroll={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-6 py-4 rounded-lg text-base font-semibold transition-all duration-300",
                    pathname === item.link
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                scroll={true}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-4 mt-6 text-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 text-base"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
