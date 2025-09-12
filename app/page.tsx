"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Brain,
  Database,
  Cloud,
  Calendar,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Profile photo with fallback on error
  const initialPhoto = "/images/arkan-new-profile.jpg"
  const [photoSrc, setPhotoSrc] = useState(initialPhoto)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )
    const mailtoLink = `mailto:m.arkan.adli@gmail.com?subject=${subject}&body=${body}`

    window.location.href = mailtoLink
    setFormData({ name: "", email: "", message: "" })
  }

  const experiences = [
    {
      title: "Fixed Connectivity, ICT & Cloud",
      company: "PT XLSmart Telecom Sejahtera Tbk",
      period: "August 2024 – January 2025",
      type: "Internship",
      description:
        "Integrated ICT systems with Salesforce data and built interactive dashboards using Power BI. Innovated AI-based Visual Inspection Platform projected to reduce processing time by 70% and development costs by 40%.",
      technologies: ["Power BI", "Power Query", "ArcGIS", "Salesforce", "AI/ML"],
      icon: <Brain className="h-5 w-5" />,
    },
    {
      title: "Front-End Flutter Developer",
      company: "PT Inti Utama Solusindo (Pharos Group)",
      period: "July 2024 – August 2024",
      type: "Internship",
      description:
        "Delivered HealthyOne application deployed across 100+ pharmacies. Developed payment gateway and digital wallet features with integrated QRIS payment methods.",
      technologies: ["Flutter", "Django", "PostgreSQL", "Payment APIs", "QRIS"],
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "Assistant Laboratory Programming",
      company: "Bandung National Institute of Technology",
      period: "September 2023 – February 2024",
      type: "Part-time",
      description:
        "Mentored 45+ students in Python programming and supervised development of CRUD applications using Python and MySQL.",
      technologies: ["Python", "MySQL", "Teaching", "Mentoring"],
      icon: <Database className="h-5 w-5" />,
    },
  ]

  const projects = [
    {
      title: "Campsite Explorer",
      description:
        "Community-driven campsite explorer website with rating system, reviews, and interactive maps using Mapbox API",
      tech: ["Node.js", "Express.js", "MongoDB Atlas", "Mapbox API", "Vercel"],
      status: "Deployed",
      image: "/images/projects/campsite-explorer.png",
      url: "https://github.com/arkanadli/Campsite-Explorer",
    },
    {
      title: "HealthyOne App",
      description:
        "Payment gateway and digital wallet system deployed across 100+ pharmacies under Pharos Group",
      tech: ["Flutter", "Django", "PostgreSQL", "Payment APIs"],
      status: "Production",
      image: "/images/projects/healthyone.png",
      url: "", // private project → empty means show disabled button
    },
    {
      title: "Adaptive Learning Platform",
      description:
        "Web-based platform for elementary students with personalized study materials and progress tracking",
      tech: ["React.js", "Laravel", "MySQL", "AWS", "Docker"],
      status: "Deployed",
      image: "/images/projects/adaptive-learning.png",
      url: "https://github.com/arkanadli/adaptive-learning-frontend",
    },
    {
      title: "Atmostrack IoT System",
      description:
        "IoT-based air quality monitoring with real-time data visualization and historical analytics",
      tech: ["Flutter", "PHP", "MySQL", "MQTT", "IoT"],
      status: "Deployed",
      image: "/images/projects/atmostrack.png",
      url: "https://github.com/arkanadli/Atmostrack",
    },
  ]

  const skills = [
    {
      category: "AI & Machine Learning",
      items: ["Computer Vision", "EfficientNet", "Diabetic Retinopathy Detection", "AI Platform Development"],
    },
    { category: "Frontend Development", items: ["React.js", "Flutter", "Tailwind CSS", "Responsive Design"] },
    { category: "Backend Development", items: ["Django ORM", "Laravel", "Node.js", "Express.js", "RESTful APIs"] },
    { category: "Database & Cloud", items: ["PostgreSQL", "MySQL", "MongoDB Atlas", "AWS (EC2, S3, RDS)", "Docker"] },
    { category: "Tools & Methods", items: ["GitHub Actions", "CI/CD", "Agile/Scrum", "Power BI", "ArcGIS"] },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold font-space-grotesk hover:text-primary transition-colors cursor-pointer" />
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#experience"
                className="hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#projects"
                className="hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#skills" className="hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 max-w-6xl mx-auto">
            {/* Profile Photo */}
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1 shadow-2xl overflow-hidden hover:shadow-primary/20 transition-all duration-500">
                    <div className="relative w-[400px] h-[400px]">
                        <Image
                        src={photoSrc || "/placeholder.svg"}
                        alt="Muhammad Arkan Adli"
                        width={400}
                        height={400}
                        className="rounded-xl object-cover object-center w-full h-full"
                        priority
                        onError={() => setPhotoSrc("/professional-developer-portrait.png")}
                        />
                    </div>
                    </div>
                {/* Floating tech icons */}
                <div className="absolute -top-4 -right-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-3 hover:bg-primary/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-3 hover:bg-primary/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <Code className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-space-grotesk mb-6 text-balance" >
                Muhammad
                <span className="text-primary block font-jetbrains hover:scale-105 transition-transform duration-300 cursor-default">
                  Arkan Adli
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground mb-6 font-jetbrains">
                <span className="text-primary hover:text-blue-400 transition-colors duration-300">AI Engineer</span> &{" "}
                <span className="text-primary hover:text-blue-400 transition-colors duration-300">
                  Full Stack Developer
                </span>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                Seeking to build an impactful career as an Informatics graduate, bringing over a year of hands-on
                professional experience in{" "}
                <span className="text-primary font-medium hover:text-blue-400 transition-colors duration-300">
                  Artificial Intelligence
                </span>{" "}
                and
                <span className="text-primary font-medium hover:text-blue-400 transition-colors duration-300">
                  {" "}
                  Full-Stack Development
                </span>
                . My goal is to contribute to innovative projects where I can apply my skills to improve efficiency and
                support large-scale deployments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 font-jetbrains hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-jetbrains bg-transparent hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1O8AfwKlU5UO9re6B-7wrJVt8WUL2Vqz5/view?usp=drive_link",
                      "_blank",
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View My Resume
                </Button>
              </div>
              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="https://linkedin.com/in/muhammad-arkan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/arkanadli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="mailto:m.arkan.adli@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold font-space-grotesk text-center mb-12 hover:text-primary transition-colors duration-300">
            About Me
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty text-justify">
              As a recent Informatics graduate, I specialize in building and deploying full-stack web, mobile, and cloud
              applications. I have a track record of delivering impactful solutions, including contributing to the
              development of the HealthyOne application, now successfully used in over 100 pharmacies, where I
              integrated payment APIs and digital wallet features. At PT XLSmart, I prototyped an AI-based Visual
              Inspection Platform projected to reduce processing time by up to 70% and cut development costs by 40%. My
              experience also includes building applications from concept to deployment, utilizing modern technologies
              like React.js, Laravel, AWS, and Docker with CI/CD pipelines. I am passionate about solving complex
              problems and creating software solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Brain className="h-8 w-8 text-primary mx-auto mb-2 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-1">AI Engineer</h3>
                <p className="text-sm text-muted-foreground">Computer Vision & Deep Learning</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Code className="h-8 w-8 text-primary mx-auto mb-2 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-1">Full Stack</h3>
                <p className="text-sm text-muted-foreground">Web & Mobile Development</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Database className="h-8 w-8 text-primary mx-auto mb-2 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-1">Database</h3>
                <p className="text-sm text-muted-foreground">MySQL, PostgreSQL, MongoDB, Amazon RDS, Amazon S3</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Cloud className="h-8 w-8 text-primary mx-auto mb-2 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-1">Cloud & DevOps</h3>
                <p className="text-sm text-muted-foreground">AWS & CI/CD Pipelines</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 px-6 bg-muted/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-space-grotesk text-center mb-12 hover:text-primary transition-colors duration-300">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

                  <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-2 hover:border-primary/30 overflow-hidden md:ml-16">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                            {exp.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl font-space-grotesk group-hover:text-primary transition-colors duration-300 mb-1">
                              {exp.title}
                            </CardTitle>
                            <div className="text-primary font-medium font-jetbrains mb-1">{exp.company}</div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                              <Badge
                                variant="outline"
                                className="text-xs font-jetbrains group-hover:border-primary/50 transition-colors duration-300"
                              >
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed mb-4">{exp.description}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs font-jetbrains hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-space-grotesk text-center mb-12 hover:text-primary transition-colors duration-300">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-2 hover:border-primary/20 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-gray-900/10 flex items-center justify-center">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-contain w-full h-full max-h-full group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-space-grotesk group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant={project.status === "Production" ? "default" : "secondary"}
                      className="group-hover:scale-105 transition-transform duration-300"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs font-jetbrains group-hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* View Details button: opens link if available, else disabled as Private Project */}
                  {project.url ? (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="group-hover:text-primary group-hover:bg-primary/10 font-jetbrains transition-all duration-300 hover:scale-105"
                    >
                      <Link href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                        View Details
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled
                      title="Private project"
                      className="font-jetbrains"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Private Project
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-muted/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-space-grotesk text-center mb-12 hover:text-primary transition-colors duration-300">
            Technical Skills
          </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-space-grotesk text-primary transition-colors duration-300">
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs font-jetbrains hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold font-space-grotesk text-center mb-8 hover:text-primary transition-colors duration-300">
            Get In Touch
          </h2>
          <div className="text-center">
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              I am currently seeking full-time opportunities to contribute my skills to challenging software engineering roles. I am also open to freelance projects and collaborations.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a
                href="mailto:m.arkan.adli@gmail.com"
                className="flex items-center space-x-3 hover:text-primary transition-colors duration-300 cursor-pointer hover:translate-x-2"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>m.arkan.adli@gmail.com</span>
              </a>
              <a
                href="https://wa.me/6282123301851"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-primary transition-colors duration-300 cursor-pointer hover:translate-x-2"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>(+62)821-2330-1851</span>
              </a>
              <div className="flex items-center space-x-3 hover:text-primary transition-colors duration-300 cursor-pointer hover:translate-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Bandung, West Java, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default">
            © 2025 Muhammad Arkan Adli
          </p>
        </div>
      </footer>
    </div>
  )
}
