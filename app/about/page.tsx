"use client";

import React from "react";
import { Ghost, User, Settings, Gamepad2 } from "lucide-react";
import Sidebar from "@/components/about/Sidebar";
import CodeEditor from "@/components/about/CodeEditor";
import Widgets from "@/components/about/Widgets";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="flex flex-col xl:flex-row h-full w-full overflow-y-auto xl:overflow-hidden">
            {/* Icon Strip */}
            <aside className="w-14 border-r border-foreground/50 hidden xl:flex flex-col items-center py-4 gap-6 shrink-0">
                <div className="text-foreground cursor-pointer transition-colors">
                    <Image src='/assets/icons/play.svg' alt="play" width={25} height={25} />
                </div>
                <div className="text-foreground cursor-pointer transition-colors">
                    <Image src='/assets/icons/dash.svg' alt="dash" width={25} height={25} />
                </div>
            </aside>

            {/* Navigation Sidebar */}
            <Sidebar />

            {/* Main Content - Code Editor */}
            <main className="flex-1 min-w-0 h-auto xl:h-full shrink-0">
                <CodeEditor />
            </main>

            {/* Right Widgets Sidebar */}
            <aside className="w-full xl:w-[500px] border-t xl:border-t-0 xl:border-l border-foreground/50 hidden xl:block h-auto xl:h-full shrink-0">
                <Widgets />
            </aside>
        </div>
    );
};

export default AboutPage;