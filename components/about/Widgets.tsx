import { Terminal, Shield, Cpu, Zap, Box, Layers, Wallet, Globe } from "lucide-react";

const Widgets = () => {
    return (
        <div className="h-full overflow-y-auto p-6 space-y-8 hide-scrollbar">

            {/* Certifications */}
            <section>
                <h3 className="text-foreground text-sm mb-4">\\ Certifications</h3>
                <div className="flex flex-wrap gap-4">
                    {/* Placeholders for certification logos using Lucide icons or colored boxes */}
                    <div className="w-10 h-10 rounded border border-success/50 flex items-center justify-center text-success bg-success/10" title="CISSP">
                        <Shield size={20} />
                    </div>
                    <div className="w-10 h-10 rounded border border-warning/50 flex items-center justify-center text-warning bg-warning/10" title="OSCP">
                        <Terminal size={20} />
                    </div>
                    <div className="w-10 h-10 rounded border border-secondary/50 flex items-center justify-center text-secondary bg-secondary/10" title="OSFP">
                        <Cpu size={20} />
                    </div>
                    <div className="w-10 h-10 rounded border border-danger/50 flex items-center justify-center text-danger bg-danger/10" title="CEH">
                        <Zap size={20} />
                    </div>
                </div>
            </section>

            {/* Tools */}
            <section>
                <h3 className="text-foreground text-sm mb-4">\\ Tools</h3>
                <div className="flex flex-wrap gap-2">
                    {["Slither", "Echidna", "Foundry", "Halmos", "Manticore", "Mythril", "Certora", "Aderyn"].map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-info/10 text-info text-xs rounded border border-info/20">
                            {tool}
                        </span>
                    ))}
                </div>
            </section>

            {/* Interests */}
            <section>
                <h3 className="text-foreground text-sm mb-4">\\ Interests</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 border border-foreground/20 rounded bg-dark-50/20 flex items-center justify-between">
                        <span className="text-xs text-foreground">L1/L2 Audits</span>
                        <Layers size={16} className="text-foreground/50" />
                    </div>
                    <div className="p-3 border border-foreground/20 rounded bg-dark-50/20 flex items-center justify-between">
                        <span className="text-xs text-foreground">DeFi Protocols</span>
                        <Box size={16} className="text-foreground/50" />
                    </div>
                    <div className="p-3 border border-foreground/20 rounded bg-dark-50/20 flex items-center justify-between">
                        <span className="text-xs text-foreground">Bridges</span>
                        <Globe size={16} className="text-foreground/50" />
                    </div>
                    <div className="p-3 border border-foreground/20 rounded bg-dark-50/20 flex items-center justify-between">
                        <span className="text-xs text-foreground">Wallets</span>
                        <Wallet size={16} className="text-foreground/50" />
                    </div>
                </div>
            </section>

            {/* Ecosystem */}
            <section>
                <h3 className="text-foreground text-sm mb-4">\\ Ecosystem</h3>
                <div className="space-y-4">
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs text-foreground/70">
                            <span>Rust</span>
                            <span>95%</span>
                        </div>
                        <div className="w-full h-1 bg-dark-50 rounded-full overflow-hidden">
                            <div className="h-full bg-warning w-[95%]"></div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs text-foreground/70">
                            <span>Anchor</span>
                            <span>92%</span>
                        </div>
                        <div className="w-full h-1 bg-dark-50 rounded-full overflow-hidden">
                            <div className="h-full bg-info w-[92%]"></div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs text-foreground/70">
                            <span>Solidity</span>
                            <span>85%</span>
                        </div>
                        <div className="w-full h-1 bg-dark-50 rounded-full overflow-hidden">
                            <div className="h-full bg-success w-[85%]"></div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs text-foreground/70">
                            <span>Move</span>
                            <span>78%</span>
                        </div>
                        <div className="w-full h-1 bg-dark-50 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary w-[78%]"></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Widgets;
