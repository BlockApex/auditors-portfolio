"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const ProjectSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [filters, setFilters] = useState({
        Ton: true,
        Ethereum: true,
        Near: true,
        BinanceSmartChain: true,
        Cosmos: true,
        Solana: true,
    });

    const toggleFilter = (key: keyof typeof filters) => {
        setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const filterItems = [
        { name: "Ton", icon: "/assets/icons/play.svg" }, // Using placeholder/existing icons if specific ones aren't available, or just text/custom icons
        { name: "Ethereum", icon: "/assets/icons/play.svg" },
        { name: "Near", icon: "/assets/icons/play.svg" },
        { name: "BinanceSmartChain", icon: "/assets/icons/play.svg" },
        { name: "Cosmos", icon: "/assets/icons/play.svg" },
        { name: "Solana", icon: "/assets/icons/play.svg" },
    ];

    return (
        <aside className="w-full md:w-64 border-r border-foreground/50 flex flex-col h-full shrink-0">
            <div className="border-b border-foreground/50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center px-4 py-2 text-foreground hover:text-white transition-colors"
                >
                    {isOpen ? (
                        <ChevronDown size={16} className="mr-2" />
                    ) : (
                        <ChevronRight size={16} className="mr-2" />
                    )}
                    <span className="text-sm text-white">projects</span>
                </button>

                {isOpen && (
                    <div className="px-4 py-4 space-y-3">
                        {Object.keys(filters).map((key) => (
                            <div
                                key={key}
                                className="flex items-center space-x-3 cursor-pointer group"
                                onClick={() => toggleFilter(key as keyof typeof filters)}
                            >
                                <div
                                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters[key as keyof typeof filters]
                                            ? "bg-foreground/20 border-foreground"
                                            : "border-foreground/50"
                                        }`}
                                >
                                    {filters[key as keyof typeof filters] && (
                                        <span className="text-xs text-white">✓</span>
                                    )}
                                </div>

                                {/* Icon placeholder - in a real app we'd map specific icons */}
                                <div className="text-foreground/70 group-hover:text-white transition-colors flex items-center gap-2">
                                    {/* Using a generic icon for now as specific blockchain icons might not be in assets */}
                                    <span className="text-sm">{key}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
};

export default ProjectSidebar;
