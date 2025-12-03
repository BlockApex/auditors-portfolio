"use client";

import React from "react";
import VulnerabilitySidebar from "@/components/vulnerabilities/VulnerabilitySidebar";
import StatsCards from "@/components/vulnerabilities/StatsCards";
import VulnerabilityChart from "@/components/vulnerabilities/VulnerabilityChart";
import VulnerabilityList from "@/components/vulnerabilities/VulnerabilityList";

const VulnerabilitiesPage = () => {
  return (
    <div className="flex h-full w-full">
      {/* Sidebar */}
      <VulnerabilitySidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex h-full min-w-0">
        {/* Dashboard Section (Stats + Chart) */}
        <section className="flex-1 flex flex-col border-r border-foreground/50 h-full min-w-[400px]">
          {/* Header */}
          <div className="flex border-b border-foreground/50 shrink-0">
            <div className="px-4 py-2 border-r border-foreground/50 text-foreground text-sm flex items-center">
              <span>// Vulnerability Directory:</span>
              <span className="ml-4 text-xs cursor-pointer hover:text-white">x</span>
            </div>
          </div>

          <div className="p-6 overflow-y-auto hide-scrollbar flex-1">
            {/* Stats Cards */}
            <StatsCards />
            {/* Chart Section */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-foreground text-base">// Vulnerability Directory:</h3>
                <div className="flex items-center gap-2 text-base text-success">
                  <span>↗</span>
                  <span>320 Total</span>
                </div>
              </div>
              <div className="bg-dark-50/10 border border-foreground/10 rounded-lg p-4">
                <VulnerabilityChart />
              </div>
            </div>
          </div>
        </section>

        {/* List Section */}
        <section className="w-[700px] hidden xl:flex flex-col h-full bg-dark/30">
          <VulnerabilityList />
        </section>
      </main>
    </div>
  );
};

export default VulnerabilitiesPage;