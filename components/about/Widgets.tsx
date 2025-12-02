import { Terminal, Shield, Cpu, Zap, Box, Layers, Wallet, Globe } from "lucide-react";
import Image from "next/image";

const Widgets = () => {
    return (
        <div className="h-full overflow-y-auto p-6 space-y-8 hide-scrollbar">

            {/* Certifications */}
            <section>
                <h3 className="text-foreground text-sm mb-4">\\ Certifications</h3>
                <div className="flex flex-wrap gap-4">
                    {Array(5).fill(0).map(() => {
                        return (
                            <Image src='/assets/cert.png' alt="cert" width={50} height={50} />
                        )
                    })}
                </div>
            </section>

            {/* Tools */}
            <section>
                <h3 className="text-foreground text-sm mb-4">\\ Tools</h3>
                <div className="flex flex-wrap gap-2">
                    {["Slither", "Echidna", "Foundry", "Halmos", "Manticore", "Mythril", "Certora", "Aderyn"].map((tool) => (
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
                    <div className="interest-border flex items-center justify-between px-2 py-2">
                        <span className="text-sm text-white">
                            L1/L2 Audits</span>
                            <Image src='/assets/interests/1.svg' alt="l1/l2" width={20} height={20}/>
                    </div>
                    <div className="interest-border flex items-center justify-between px-2 py-2">
                        <span className="text-sm text-white">DeFi Protocols</span>
                            <Image src='/assets/interests/2.svg' alt="l1/l2" width={20} height={20}/>
                    </div>
                    <div className="interest-border flex items-center justify-between px-2 py-2">
                        <span className="text-sm text-white">Bridges</span>
                            <Image src='/assets/interests/3.svg' alt="l1/l2" width={20} height={20}/>
                    </div>
                    <div className="interest-border flex items-center justify-between px-2 py-2">
                        <span className="text-sm text-white">Wallets</span>
                            <Image src='/assets/interests/4.svg' alt="l1/l2" width={20} height={20}/>
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
