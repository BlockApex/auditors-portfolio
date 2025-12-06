import { useAuditorStore } from "@/store/useAuditorStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedClients = () => {
  const { reportsData } = useAuditorStore();

  // Only render if featured_reports exists and is an array
  if (!reportsData?.featured_reports || reportsData.featured_reports.length === 0) {
    return null;
  }

  return (
    <div className="w-full border-b border-foreground/50">
      <div className="flex overflow-x-auto hide-scrollbar">
        {/* Label */}
        <div className="shrink-0 px-6 py-4 border-r border-foreground/50 flex items-center">
          <span className="text-primary text-sm">Featured Clients //</span>
        </div>

        {/* Client Logos */}
        <div className="flex items-center justify-start">
          {reportsData.featured_reports.map((report, i) => (
            <Link
              href={report.report_id}
              target="_blank"
              key={i}
              className={`flex-1 flex items-center justify-center cursor-pointer px-6 py-0 ${
                i !== reportsData.featured_reports.length - 1 ? "border-r border-foreground/50" : ""
              }`}
            >
              <Image
                src={report.logo} // use logo from each object
                alt={report.title || "Client"} // fallback if name exists
                width={100}
                height={40}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity min-w-[70px] md:min-w-auto"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedClients;
