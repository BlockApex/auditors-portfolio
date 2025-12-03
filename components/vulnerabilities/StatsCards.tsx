import { FileText, AlertTriangle, DollarSign, Award } from "lucide-react";
import Image from "next/image";
import React from "react";

const StatsCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Card 1: Audits Completed */}
            <div className="bg-[#10182866] border border-foreground/20 rounded-lg p-4 flex flex-col gap-2">
                <div className="">
                    <Image src='/assets/stats/1.png' alt="Audits Completed" width={40} height={40} />
                </div>
                <h3 className="text-2xl text-white">150+</h3>
                <p className="text-sm text-foreground">Audits Completed</p>
            </div>

            {/* Card 2: Vulnerabilities Found */}
            <div className="bg-[#10182866] border border-foreground/20 rounded-lg p-4 flex flex-col gap-2">
                <div className="">
                    <Image src='/assets/stats/2.png' alt="Audits Completed" width={40} height={40} />
                </div>
                <h3 className="text-2xl text-white">320+</h3>
                <p className="text-sm text-foreground">Vulnerabilities Found</p>
            </div>

            {/* Card 3: TVL Secured */}
            <div className="bg-[#10182866] border border-foreground/20 rounded-lg p-4 flex flex-col gap-2">
                <div className="">
                    <Image src='/assets/stats/3.png' alt="Audits Completed" width={40} height={40} />
                </div>
                <h3 className="text-2xl text-white">$2.5B+</h3>
                <p className="text-sm text-foreground">TVL Secured</p>
            </div>

            {/* Card 4: Success Rate */}
            <div className="bg-[#10182866] border border-foreground/20 rounded-lg p-4 flex flex-col gap-2">
                <div className="">
                    <Image src='/assets/stats/4.png' alt="Audits Completed" width={40} height={40} />
                </div>
                <h3 className="text-2xl text-white">100%</h3>
                <p className="text-sm text-foreground">Success Rate</p>
            </div>
        </div>
    );
};

export default StatsCards;
