import React, { useState } from "react";
import Widgets from "./Widgets";

const CodeEditor = () => {
    const [activeTab, setActiveTab] = useState<'about' | 'certificates'>('about');

    const codeLines = [
        "/**",
        " * About me",
        " * Senior Smart Contract Auditor with 6+ years of",
        " * experience specializing in blockchain security",
        " * across multiple ecosystems. Deep expertise in",
        " * identifying critical vulnerabilities and",
        " * securing decentralized protocols.",
        " */",
        "",
        "* My approach combines advanced static analysis, manual code",
        "  review, and formal verification to ensure comprehensive",
        "  security coverage. I've contributed to securing over $2.5B+ in",
        "  TVL across 150+ audits.",
        "",
        "Specializing in DeFi protocols, cross-chain bridges, L1/L2",
        "solutions, and zero-knowledge systems. Proficient in Solidity,",
        "Rust, Cairo, and Move with extensive experience using industry-",
        "leading tools like Slither, Foundry, Echidna, and Certora.",
        "",
        "* 320+ Vulnerabilities",
        "* 150+ Audits",
        "* 12 Blockchains",
    ];

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
