import Image from "next/image";
import React from "react";

interface ProjectCardProps {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    id,
    title,
    subtitle,
    description,
    image,
    tags = ["Liquidity", "Lending"],
}) => {
    return (
        <div className="border border-foreground/20 rounded-lg overflow-hidden bg-dark/30 hover:border-foreground/50 transition-colors flex flex-col group relative">
            {/* Header */}
            <div className="p-3 border-b border-foreground/10 flex items-center gap-2 text-xs text-primary">
                <span className="font-bold">Audit {id}</span>
                <span className="text-foreground/50">//</span>
                <span className="text-foreground/70">{title}</span>
            </div>

            {/* Image Area */}
            <div className="relative w-full h-40 bg-black/50 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500"
                />
                {/* Overlay Icons (Eth/Link) - Mocked */}
                <div className="absolute top-2 right-2 flex gap-1 z-10">
                    <div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm">
                        <span className="text-[10px] text-white">Ξ</span>
                    </div>
                    <div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm">
                        <span className="text-[10px] text-white">S</span>
                    </div>
                </div>

                {/* Tags Overlay */}
                <div className="absolute bottom-2 left-2 flex gap-1 z-10">
                    {tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-[10px] text-white rounded border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1 gap-3 relative">
                {/* Background gradient effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="space-y-1 z-0">
                    <h3 className="text-foreground/60 text-xs">::: {subtitle} :::</h3>
                    <p className="text-foreground/80 text-xs leading-relaxed">
                        [{description}]
                    </p>
                </div>

                <button className="mt-auto self-start px-4 py-1.5 bg-foreground/10 hover:bg-foreground/20 text-foreground text-xs rounded transition-colors border border-foreground/10 z-0">
                    view-report
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
