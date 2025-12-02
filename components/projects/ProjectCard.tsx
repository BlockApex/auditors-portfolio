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
        <div className="border border-foreground/20 rounded-lg overflow-hidden bg-[#020618] hover:border-foreground/50 transition-colors flex flex-col group relative">
            {/* Header */}
            {/* <div className="p-3 border-b border-foreground/10 flex items-center gap-2 text-xs text-primary">
                <span className="font-bold">Audit {id}</span>
                <span className="text-foreground/50">//</span>
                <span className="text-foreground/70">{title}</span>
            </div> */}

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
                    <div className="w-6 h-8 bg-black/50 rounded-lg flex items-center justify-center border border-white/10 backdrop-blur-sm">
                        <Image src='/assets/eth.svg' alt="eth" width={15} height={15} />
                    </div>
                    <div className="w-6 h-8 bg-black/50 rounded-lg flex items-center justify-center border border-white/10 backdrop-blur-sm">
                        <Image src='/assets/eth.svg' alt="eth" width={15} height={15} />
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
                <div className="absolute inset-0  from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="space-y-1 z-0">
                    <h3 className="text-foreground text-sm">::: {subtitle} :::</h3>
                    <p className="text-foreground text-sm leading-relaxed">
                        [{description}]
                    </p>
                </div>

                <button className="mt-auto self-start px-4 py-1.5 bg-foreground/50 text-white text-xs rounded transition-colors border border-foreground/10 z-0">
                    view-report
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
