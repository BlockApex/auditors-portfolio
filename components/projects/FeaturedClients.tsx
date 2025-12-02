import Image from "next/image";
import React from "react";

const FeaturedClients = () => {
  const clients = Array(4).fill(0); // placeholder array

  return (
    <div className="w-full border-b border-foreground/50">
      <div className="flex overflow-x-auto hide-scrollbar">
        {/* Label */}
        <div className="shrink-0 px-6 py-4 border-r border-foreground/50 flex items-center">
          <span className="text-primary text-sm">Featured Clients //</span>
        </div>

        {/* Client Logos */}
        <div className="flex-1 flex">
          {clients.map((c, i) => (
            <div
              key={i}
              className={`flex-1 flex items-center justify-center cursor-pointer px-6 py-4 ${
                i !== clients.length - 1 ? "border-r border-foreground/50" : ""
              }`}
            >
              <Image
                src="/assets/client.png"
                alt="Client"
                width={100}
                height={40}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedClients;
