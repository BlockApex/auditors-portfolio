import Image from "next/image";
import React from "react";

const FeaturedClients = () => {
    return (
        <div className="w-full border-b border-foreground/50">
            <div className="flex items-stretch overflow-x-auto hide-scrollbar">
                {/* Label */}
                <div className="shrink-0 px-6 py-4 border-r border-foreground/50 flex items-center">
                    <span className="text-secondary text-sm">Featured Clients //</span>
                </div>

                {/* Client Logos */}
                {/* Using the same client image multiple times as requested/placeholder */}
                <div className="flex-1 flex items-center justify-around min-w-max px-8 gap-12">
                    <div className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <Image src="/assets/client.png" alt="Client" width={100} height={40} className="object-contain" />
                    </div>
                    <div className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <Image src="/assets/client.png" alt="Client" width={100} height={40} className="object-contain" />
                    </div>
                    <div className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <Image src="/assets/client.png" alt="Client" width={100} height={40} className="object-contain" />
                    </div>
                    <div className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <Image src="/assets/client.png" alt="Client" width={100} height={40} className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedClients;
