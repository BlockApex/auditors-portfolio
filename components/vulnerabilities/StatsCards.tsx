import { FileText, AlertTriangle, DollarSign, Award } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useAuditorStore } from "@/store/useAuditorStore";

const StatsCards = () => {
    const { findingsData, isLoadingFindings } = useAuditorStore();

    if (isLoadingFindings || !findingsData) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-[#10182866] border border-foreground/20 rounded-lg p-4 flex flex-col gap-2 animate-pulse">
                        <div className="w-10 h-10 bg-white/10 rounded"></div>
                        <div className="h-8 w-20 bg-white/10 rounded"></div>
                        <div className="h-4 w-32 bg-white/10 rounded"></div>
                    </div>
                ))}
            </div>
        );
    }

    const { stats } = findingsData;

    // Helper to format large numbers (e.g. 1000000 -> 1M)
    const formatCurrency = (value: number) => {
        if (value >= 1000000000) {
            return `$${(value / 1000000000).toFixed(1)}B+`;
        }
        if (value >= 1000000) {
            return `$${(value / 1000000).toFixed(1)}M+`;
        }
        return `$${value.toLocaleString()}`;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Card 1: Audits Completed */}
            <div className="bg-[#10182866] border border-foreground/20 rounded-lg p-4 flex flex-col gap-2">
                <div className="">
                    <Image src='/assets/stats/1.png' alt="Audits Completed" width={40} height={40} />
                </div>
                <h3 className="text-2xl text-white">{stats.num_reports}+</h3>
                <p className="text-sm text-foreground">Audits Completed</p>
            </div>

            {/* Card 2: Vulnerabilities Found */}
            {/* <div className="bg-[#10182866] border border-foreground/20 rounded-lg p-4 flex flex-col gap-2">
                <div className="">
                    <Image src='/assets/stats/2.png' alt="Audits Completed" width={40} height={40} />
                </div>
                <h3 className="text-2xl text-white">{stats.num_findings}+</h3>
                <p className="text-sm text-foreground">Vulnerabilities Found</p>
            </div> */}

            {/* Card 3: TVL Secured */}
            {/* <div className="bg-[#10182866] border border-foreground/20 rounded-lg p-4 flex flex-col gap-2">
                <div className="">
                    <Image src='/assets/stats/3.png' alt="Audits Completed" width={40} height={40} />
                </div>
                <h3 className="text-2xl text-white">{formatCurrency(stats.total_market_cap)}</h3>
                <p className="text-sm text-foreground">TVL Secured</p>
            </div> */}

            {/* Card 4: Success Rate */}
            <div className="bg-[#10182866] border border-foreground/20 rounded-lg p-4 flex flex-col gap-2">
                <div className="">
                    <Image src='/assets/stats/4.png' alt="Audits Completed" width={40} height={40} />
                </div>
                <h3 className="text-2xl text-white">{stats.success_rate}%</h3>
                <p className="text-sm text-foreground">Success Rate</p>
            </div>
        </div>
    );
};

export default StatsCards;
