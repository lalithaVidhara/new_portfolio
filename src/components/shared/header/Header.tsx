"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import {
  Home,
  Phone,
  Github,
  Linkedin,
  Moon,
  Sun,
  Facebook,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "https://wa.me/94778082387", label: "Contact", icon: Phone },
  ];

  const socialItems = [
    { href: "https://github.com/lalithaVidhara", label: "GitHub", icon: Github },
    {
      href: "https://www.linkedin.com/in/lalitha-sri-vidhara/",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://www.facebook.com/lalithasrividhara/",
      label: "Facebook",
      icon: Facebook,
    },
  ];

  return (
    <header className="fixed bottom-1 md:bottom-4 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        className="h-16 px-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-bl-[14px] rounded-br-[14px] md:rounded-[10px] border shadow-lg flex items-center gap-1 backdrop-blur-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.href}
            onHoverStart={() => setHoveredItem(item.href)}
            onHoverEnd={() => setHoveredItem(null)}
            whileHover={{ scale: 1.2 }}
          >
            <Button
              variant={isActive(item.href) ? "secondary" : "ghost"}
              size="icon"
              asChild
              className={`w-10 h-10 md:w-12 md:h-12 relative ${
                isActive(item.href)
                  ? "bg-white/20 text-white"
                  : "text-white/80 hover:text-blue-600"
              }`}
            >
              <Link href={item.href} aria-label={item.label}>
                <item.icon className="h-5 w-5" />
                {hoveredItem === item.href && (
                  <motion.span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-medium px-2 py-1 rounded-md shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </Link>
            </Button>
          </motion.div>
        ))}

        <div className="w-px h-8 bg-white/20 mx-1" />

        {socialItems.map((item) => (
          <motion.div
            key={item.href}
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => setHoveredItem(item.href)}
            onHoverEnd={() => setHoveredItem(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="w-10 h-10 md:w-12 md:h-12 text-white/80 hover:text-blue-600"
            >
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <item.icon className="h-5 w-5" />
                {hoveredItem === item.href && (
                  <motion.span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-medium px-2 py-1 rounded-md shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </Link>
            </Button>
          </motion.div>
        ))}

        <motion.div whileHover={{ scale: 1.2 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-10 h-10 md:w-12 md:h-12 text-white/80 hover:text-blue-600"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </motion.div>
      </motion.nav>
    </header>
  );
}
