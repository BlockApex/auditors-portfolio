import React, { useState } from "react";
import Widgets from "./Widgets";
import { useAuditorStore } from "@/store/useAuditorStore";

const CodeEditor = () => {
    const [activeTab, setActiveTab] = useState<'about' | 'certificates'>('about');

    const { data: auditor, isLoading, error } = useAuditorStore();

    if (error) {
        return (
            <div className="flex flex-col h-[500px] xl:h-full w-full xl:border-r border-foreground/50 items-center justify-center text-red-400 p-4 text-center">
                <p>Failed to load profile data.</p>
            </div>
        );
    }

    if (isLoading || !auditor) {
        return (
            <div className="flex flex-col h-[500px] xl:h-full w-full xl:border-r border-foreground/50">
                <div className="flex border-b border-foreground/50">
                    <div className="px-4 py-2 border-r border-foreground/50 text-sm flex items-center text-white bg-white/5">
                        <span>Loading...</span>
                    </div>
                </div>
                <div className="flex-1 p-4 space-y-2">
                    {Array(15).fill(0).map((_, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-8 h-4 bg-white/5 rounded animate-pulse"></div>
                            <div className="flex-1 h-4 bg-white/5 rounded animate-pulse" style={{ width: `${(i % 3 + 2) * 20}%` }}></div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const codeContent = auditor.about;
    const codeLines = codeContent.split('\n');

    return (
        <div className="flex flex-col h-[500px] xl:h-full w-full xl:border-r border-foreground/50">
            {/* Tab Header */}
            <div className="flex border-b border-foreground/50">
                <div
                    onClick={() => setActiveTab('about')}
                    className={`px-4 py-2 border-r border-foreground/50 text-sm flex items-center cursor-pointer transition-colors ${activeTab === 'about' ? 'text-white bg-white/5' : 'text-foreground hover:text-white'}`}
                >
                    <span>About</span>
                    <span className="ml-4 text-xs">x</span>
                </div>
                <div
                    onClick={() => setActiveTab('certificates')}
                    className={`px-4 py-2 border-r border-foreground/50 text-sm flex items-center cursor-pointer transition-colors xl:hidden ${activeTab === 'certificates' ? 'text-white bg-white/5' : 'text-foreground hover:text-white'}`}
                >
                    <span>Certificates</span>
                    <span className="ml-4 text-xs">x</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden relative">
                {activeTab === 'about' ? (
                    <div className="h-full overflow-auto p-4 font-mono text-sm md:text-base">
                        <div className="flex">
                            {/* Line Numbers */}
                            <div className="flex flex-col text-right pr-4 text-foreground/40 select-none border-r border-foreground/10 mr-4">
                                {Array.from({ length: 29 }, (_, i) => (
                                    <span key={i + 1} className="leading-relaxed">
                                        {i + 1}
                                    </span>
                                ))}
                            </div>

                            {/* Code Text */}
                            <div className="flex flex-col text-foreground/80">
                                {codeLines.map((line, index) => (
                                    <div key={index} className="leading-relaxed whitespace-pre-wrap">
                                        {index < 8 ? (
                                            <span className="text-foreground/60">{line}</span>
                                        ) : line.startsWith("*") ? (
                                            <span className="text-secondary">{line}</span>
                                        ) : (
                                            <span>{line}</span>
                                        )}
                                    </div>
                                ))}
                                {/* Empty lines to fill up to 29 if needed */}
                                {Array.from({ length: Math.max(0, 29 - codeLines.length) }, (_, i) => (
                                    <div key={`empty-${i}`} className="leading-relaxed">&nbsp;</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-full w-full">
                        <Widgets />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CodeEditor;
