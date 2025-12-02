"use client";

import React from "react";

interface ContactCodeSnippetProps {
    formData: {
        name: string;
        email: string;
        message: string;
    };
}

const ContactCodeSnippet: React.FC<ContactCodeSnippetProps> = ({ formData }) => {
    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
    });

    return (
        <div className="hidden xl:flex flex-col h-full w-full border-l border-foreground/50 p-8 overflow-auto font-mono text-sm leading-relaxed">
            <div className="text-foreground/60">
                <span className="text-secondary">const</span> <span className="text-info">button</span> <span className="text-secondary">=</span> <span className="text-info">document.querySelector</span>(<span className="text-[#CE9178]">'#sendBtn'</span>);
            </div>
            <br />
            <div className="text-foreground/60">
                <span className="text-secondary">const</span> <span className="text-info">message</span> <span className="text-secondary">=</span> {"{"}
            </div>
            <div className="pl-4 text-foreground/60">
                <span className="text-info">name</span>: <span className="text-[#CE9178]">"{formData.name}"</span>,
            </div>
            <div className="pl-4 text-foreground/60">
                <span className="text-info">email</span>: <span className="text-[#CE9178]">"{formData.email}"</span>,
            </div>
            <div className="pl-4 text-foreground/60">
                <span className="text-info">message</span>: <span className="text-[#CE9178]">"{formData.message}"</span>,
            </div>
            <div className="pl-4 text-foreground/60">
                <span className="text-info">date</span>: <span className="text-[#CE9178]">"{currentDate}"</span>
            </div>
            <div className="text-foreground/60">{"}"}</div>
            <br />
            <div className="text-foreground/60">
                <span className="text-info">button.addEventListener</span>(<span className="text-[#CE9178]">'click'</span>, () <span className="text-secondary">=&gt;</span> {"{"}
            </div>
            <div className="pl-4 text-foreground/60">
                <span className="text-info">form.send</span>(<span className="text-info">message</span>);
            </div>
            <div className="text-foreground/60">{"})"}</div>
        </div>
    );
};

export default ContactCodeSnippet;
