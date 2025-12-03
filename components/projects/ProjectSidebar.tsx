"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const ProjectSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Initialize filters dynamically from blockchains
  const blockchains = [
    { name: "Ton", icon: "/assets/chains/ton.svg" },
    { name: "Ethereum", icon: "/assets/chains/ethereum.svg" },
    { name: "Near", icon: "/assets/chains/near.svg" },
    { name: "BinanceSmartChain", icon: "/assets/chains/bnb.svg" },
    { name: "Cosmos", icon: "/assets/chains/cosmos.svg" },
    { name: "Solana", icon: "/assets/chains/solana.svg" },
  ];

  const [filters, setFilters] = useState(
    Object.fromEntries(blockchains.map((b) => [b.name, true]))
  );

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="w-full xl:w-64 border-b xl:border-b-0 xl:border-r border-foreground/50 flex flex-col h-auto xl:h-full shrink-0">
      {/* Header */}
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

        {/* Filter List */}
        {isOpen && (
          <div className="px-4 py-4 space-y-3">
            {blockchains.map((chain) => (
              <div
                key={chain.name}
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={() => toggleFilter(chain.name as keyof typeof filters)}
              >
                {/* Checkbox */}
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters[chain.name as keyof typeof filters]
                      ? "bg-foreground/20 border-foreground"
                      : "border-foreground/50"
                    }`}
                >
                  {filters[chain.name as keyof typeof filters] && (
                    <span className="text-xs text-white">✓</span>
                  )}
                </div>

                {/* Icon + Name */}
                <div className="flex items-center gap-2 text-foreground/70 group-hover:text-white transition-colors">
                  <Image
                    src={chain.icon}
                    alt={chain.name}
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span className="text-sm">{chain.name}</span>
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
