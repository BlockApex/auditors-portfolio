"use client";

import React from "react";
import ProjectSidebar from "@/components/projects/ProjectSidebar";
import FeaturedClients from "@/components/projects/FeaturedClients";
import ProjectCard from "@/components/projects/ProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "_Phoenix DAO",
      subtitle: "Phoenix DAO",
      description: "Decentralized lending and borrowing platform with advanced collateralization mechanisms.",
      image: "/assets/project.png",
    },
    {
      id: 2,
      title: "_LightLink - Web Application",
      subtitle: "LightLink",
      description: "Decentralized lending and borrowing platform with advanced collateralization mechanisms.",
      image: "/assets/project.png",
    },
    {
      id: 3,
      title: "_Paranlabs MoonPass",
      subtitle: "ParanLabs",
      description: "Decentralized lending and borrowing platform with advanced collateralization mechanisms.",
      image: "/assets/project.png",
    },
    {
      id: 4,
      title: "_ScriptTV - Web Application",
      subtitle: "ScriptTV",
      description: "Decentralized lending and borrowing platform with advanced collateralization mechanisms.",
      image: "/assets/project.png",
    },
    {
      id: 5,
      title: "_Stashed - Mobile Application",
      subtitle: "Stashed",
      description: "Decentralized lending and borrowing platform with advanced collateralization mechanisms.",
      image: "/assets/project.png",
    },
    {
      id: 6,
      title: "_OG SDK - White-Box Review",
      subtitle: "Open Game Protocol",
      description: "Decentralized lending and borrowing platform with advanced collateralization mechanisms.",
      image: "/assets/project.png",
    },
  ];

  return (
    <div className="flex flex-col xl:flex-row h-full w-full">
      {/* Sidebar */}
      <ProjectSidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        {/* Top Tab Bar */}
        <div className="flex border-b border-foreground/50 shrink-0">
          <div className="px-4 py-2 border-r border-foreground/50 text-foreground text-sm flex items-center">
            <span>React; CSS; Vue</span>
            <span className="ml-4 text-xs cursor-pointer hover:text-white">x</span>
          </div>
        </div>

        {/* Featured Clients */}
        <FeaturedClients />

        {/* Projects Grid */}
        <div className="flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;