"use client";

import React from "react";
import { Ghost, User, Settings, Gamepad2 } from "lucide-react";
import Sidebar from "@/components/about/Sidebar";
import CodeEditor from "@/components/about/CodeEditor";
import Widgets from "@/components/about/Widgets";

const AboutPage = () => {
    return (
        <div className="flex h-full w-full">
            {/* Icon Strip */}
            <aside className="w-14 border-r border-foreground/50 flex flex-col items-center py-4 gap-6 shrink-0">
                <div className="text-foreground/50 hover:text-foreground cursor-pointer transition-colors">
                    <Gamepad2 size={24} />
                </div>
                <div className="text-foreground/50 hover:text-foreground cursor-pointer transition-colors">
                    <User size={24} />
                </div>
                <div className="mt-auto text-foreground/50 hover:text-foreground cursor-pointer transition-colors">
                    <Settings size={24} />
                </div>
            </aside>

            {/* Navigation Sidebar */}
            <Sidebar />

            {/* Main Content - Code Editor */}
            <main className="flex-1 min-w-0 h-full overflow-hidden">
                <CodeEditor />
            </main>

            {/* Right Widgets Sidebar */}
            <aside className="w-80 border-l border-foreground/50 hidden xl:block h-full overflow-hidden">
                <Widgets />
            </aside>
        </div>
    );
};

export default AboutPage;