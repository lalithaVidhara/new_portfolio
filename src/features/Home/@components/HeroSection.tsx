"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { FileText, Send, ChevronRight } from "lucide-react";
import ImageSection from "./ImageSection";

export default function HeroSection() {
  return (
    <section className="relrelative w-full overflow-hidden py-20">
      <div className="container relative z-10 mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center lg:gap-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            >
              Hi, I am
              <span className="mt-2 block bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                Lalitha Sri Vidhara
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center justify-center text-center md:justify-start md:text-left"
            >
              <div className="flex items-center justify-center text-center md:text-center">
                <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-xl text-transparent md:text-2xl lg:text-3xl">
                  <Typewriter
                    words={[
                      "Undergraduate Student",
                      "Full Stack Developer",
                      "Data Science Enthusiast",
                      "Guitarist/Musician",
                      "Hiking Lover",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </div>
              <span className="inline-flex animate-bounce">
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground/90 max-w-[600px] text-base sm:text-lg lg:text-xl"
          >
            Aspiring Full Stack Developer and a tech enthusiast with a strong foundation in Python, Java, JavaScript and React. Currently pursuing the knowledge out in the field. Passionate about building innovative and scalable solutions while staying at the forefront of emerging technologies and industry trends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col flex-wrap gap-4 md:items-start justify-center "
          >
            <Link href="/resume">
              <Button
                className="group relative overflow-hidden bg-blue-600 text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  Download Resume
                  <FileText className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </Link>
            <Link
              href="https://wa.me/94778082387"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="group relative overflow-hidden border-blue-500/50 text-blue-500 transition-all hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  Contact Me
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-100 to-blue-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <ImageSection />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
    </section>
  );
}
