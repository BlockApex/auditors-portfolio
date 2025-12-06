"use client";

import { Terminal, Shield, Cpu, Zap, Box, Layers, Wallet, Globe } from "lucide-react";
import Image from "next/image";
import { useAuditorStore } from "@/store/useAuditorStore";

const Widgets = () => {
    const { data: auditor, isLoading, error } = useAuditorStore();

    if (error) {
        return <div className="p-6 text-red-400 text-sm">Failed to load widgets.</div>;
    }

    if (isLoading || !auditor) {
        return (
            <div className="h-auto xl:h-full overflow-y-auto p-6 space-y-8 hide-scrollbar">
                {/* Certifications Skeleton */}
                <section>
                    <div className="h-4 w-32 bg-white/10 rounded animate-pulse mb-4"></div>
                    <div className="flex flex-wrap gap-4">
                        {Array(3).fill(0).map((_, i) => (
                            <div key={i} className="w-[50px] h-[50px] bg-white/10 rounded animate-pulse" />
                        ))}
                    </div>
                </section>
                {/* Tools Skeleton */}
                <section>
                    <div className="h-4 w-24 bg-white/10 rounded animate-pulse mb-4"></div>
                    <div className="flex flex-wrap gap-2">
                        {Array(6).fill(0).map((_, i) => (
                            <div key={i} className="h-8 w-16 bg-white/10 rounded animate-pulse"></div>
                        ))}
                    </div>
                </section>
                {/* Interests Skeleton */}
                <section>
                    <div className="h-4 w-24 bg-white/10 rounded animate-pulse mb-4"></div>
                    <div className="grid grid-cols-2 gap-4">
                        {Array(4).fill(0).map((_, i) => (
                            <div key={i} className="h-10 bg-white/10 rounded animate-pulse"></div>
                        ))}
                    </div>
                </section>
                {/* Ecosystem Skeleton */}
                <section>
                    <div className="h-4 w-24 bg-white/10 rounded animate-pulse mb-4"></div>
                    <div className="space-y-4">
                        {Array(3).fill(0).map((_, i) => (
                            <div key={i} className="space-y-1">
                                <div className="h-3 w-1/3 bg-white/10 rounded animate-pulse"></div>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="h-auto xl:h-full overflow-y-auto p-6 space-y-8 hide-scrollbar">
            {/* Certifications */}
            <section>
                <h3 className="text-foreground text-sm mb-4">\\ Certifications</h3>
                <div className="flex flex-wrap gap-4">
                    {auditor.certifications?.map((cert, i) => {
                        return (
                            <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" title={cert.name} className="w-20 height-[150px] rounded-lg bg-[##1F1F1F] border border-foreground/50 flex items-center justify-center p-2">
                                <Image src={cert.logo} alt={cert.name} width={50} height={50} className="object-contain" />
                            </a>
                        )
                    })}
                </div>
            </section>

            {/* Tools */}
            <section>
                <h3 className="text-foreground text-sm mb-4">\\ Tools</h3>
                <div className="flex flex-wrap gap-2">
                    {auditor.tools?.map((tool) => (
                        <span key={tool} className="tool-bg px-2 py-1 text-white rounded-lg">
                            {tool}
                        </span>
                    ))}
                </div>
            </section>

            {/* Interests */}
            <section>
                <h3 className="text-foreground text-sm mb-4">\\ Interests</h3>
                <div className="grid grid-cols-2 gap-4">
                    {auditor.interests?.map((interest, i) => (
                        <div key={i} className="interest-border flex items-center justify-between px-2 py-2">
                            <span className="text-sm text-white">{interest.value}</span>
                            {interest.logo ? <Image src={interest.logo} alt={interest.value} width={20} height={20} className="object-contain" /> : ""}
                        </div>
                    ))}
                </div>
            </section>

            {/* Ecosystem */}
            <section>
                <h3 className="text-foreground text-sm mb-4">\\ Ecosystem</h3>
                <div className="space-y-4">
                    {auditor.ecosystem?.map((item, i) => {
                        // Custom gradient backgrounds
                        const gradients = [
                            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #786D4E 100%)",
                            "linear-gradient(90deg, rgba(6, 50, 133, 0.24) 0%, #0A58EB 100%)",
                            "linear-gradient(90deg, rgba(102, 123, 64, 0.04) 0%, #BBE176 100%)",
                            "linear-gradient(90deg, rgba(40, 23, 18, 0.04) 0%, #8E5240 100%)"
                        ];

                        const gradient = gradients[i % gradients.length];

                        return (
                            <div key={i} className="space-y-1">
                                <div className="flex justify-between text-xs text-foreground/70">
                                    <span>{item.name}</span>
                                    <span>{item.proficiency}%</span>
                                </div>

                                <div className="w-full h-1 bg-dark-50 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full"
                                        style={{
                                            width: `${item.proficiency}%`,
                                            background: gradient
                                        }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>


        </div>
    );
};

export default Widgets;
