"use client";


import React, { useState } from "react";
import ProjectSidebar from "@/components/projects/ProjectSidebar";
import FeaturedClients from "@/components/projects/FeaturedClients";
import ProjectCard from "@/components/projects/ProjectCard";
import { useAuditorStore } from "@/store/useAuditorStore";
import { AlertCircle } from "lucide-react";

const ProjectsPage = () => {
  const { reportsData, isLoadingReports, reportsError } = useAuditorStore();

  const blockchains = [
    "Ton", "Ethereum", "Near", "BinanceSmartChain", "Cosmos", "Solana"
  ];

  const [filters, setFilters] = useState<Record<string, boolean>>(
    Object.fromEntries(blockchains.map((b) => [b, true]))
  );

  const toggleFilter = (key: string) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (reportsError) {
    return (
      <div className="flex flex-col h-full w-full items-center justify-center text-red-400 space-y-4">
        <AlertCircle size={48} />
        <p className="text-lg font-medium">{reportsError}</p>
      </div>
    );
  }

  const filteredProjects = reportsData?.reports.filter((report) => {
    // If no platforms defined, show it (or hide it? assuming show for now)
    if (!report.platforms) return true;

    // Check if any of the report's platforms are enabled in filters
    // The API might return "Ethereum" or "Ethereum, Polygon"
    const reportPlatforms = report.platforms.split(',').map(p => p.trim());

    // If we want to strictly filter by the sidebar keys:
    // We check if ANY of the report platforms match an ACTIVE filter.
    // However, the sidebar only has specific chains. What if the report is on "Polygon"?
    // If the sidebar acts as an inclusive filter (show only selected), then we need to match.
    // If the sidebar is just for those specific chains, we might miss others.
    // For now, let's assume we check if the report platform is one of the active filters.

    const activeFilters = Object.entries(filters)
      .filter(([_, isActive]) => isActive)
      .map(([key]) => key);

    // If no filters are active, maybe show nothing? Or show all? Usually show nothing or all.
    // Let's assume if all are unchecked, show nothing.
    if (activeFilters.length === 0) return false;

    // Check intersection
    return reportPlatforms.some(p => activeFilters.includes(p));
  }) || [];

  // If loading, we can show skeletons.
  // If data is loaded but filtered list is empty, show message.

  return (
    <div className="flex flex-col xl:flex-row h-full w-full">
      {/* Sidebar */}
      <ProjectSidebar filters={filters} toggleFilter={toggleFilter} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        {/* Top Tab Bar */}
        <div className="flex border-b border-foreground/50 shrink-0">
          <div className="px-4 py-2 border-r border-foreground/50 text-foreground text-sm flex items-center">
            <span>_projects</span>
            <span className="ml-4 text-xs cursor-pointer hover:text-white">x</span>
          </div>
        </div>

        {/* Featured Clients */}
        <FeaturedClients />

        {/* Projects Grid */}
        <div className="flex-1 overflow-y-auto p-6 hide-scrollbar">
          {isLoadingReports || !reportsData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="border border-foreground/20 rounded-lg overflow-hidden bg-[#020618] h-[300px] animate-pulse">
                  <div className="w-full h-40 bg-white/10"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                    <div className="h-3 w-full bg-white/10 rounded"></div>
                    <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {filteredProjects.map((report) => (
                <ProjectCard
                  key={report.report_id}
                  id={report.report_id}
                  title={report.title}
                  subtitle={report.platforms || "Unknown Platform"}
                  description={report.executive_summary || "No description available."}
                  image={report.logo || "/assets/project.png"}
                  tags={report.tags ? report.tags.split(',').map(t => t.trim()) : []}
                />
              ))}
              {filteredProjects.length === 0 && (
                <div className="col-span-full text-center text-foreground/50 py-10">
                  No projects found matching the selected filters.
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;