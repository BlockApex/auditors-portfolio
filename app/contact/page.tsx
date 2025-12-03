"use client";

import React, { useState } from "react";
import ContactSidebar from "@/components/contact/ContactSidebar";
import ContactForm from "@/components/contact/ContactForm";
import ContactCodeSnippet from "@/components/contact/ContactCodeSnippet";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    return (
        <div className="flex flex-col xl:flex-row h-full w-full">
            {/* Sidebar */}
            <ContactSidebar />

            {/* Main Content Area */}
            <main className="flex-1 flex h-full min-w-0 overflow-hidden">
                {/* Form Section */}
                <section className="flex-1 border-r-0 xl:border-r border-foreground/50 h-full flex flex-col">
                    {/* Tab Header */}
                    <div className="flex border-b border-foreground/50 shrink-0">
                        <div className="px-4 py-2 border-r border-foreground/50 text-foreground text-sm flex items-center">
                            <span>contacts</span>
                            <span className="ml-4 text-xs cursor-pointer hover:text-white">x</span>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="flex-1 overflow-y-auto hide-scrollbar">
                        <ContactForm formData={formData} setFormData={setFormData} />
                    </div>
                </section>

                {/* Code Snippet Section */}
                <section className="hidden xl:block w-1/2 h-full">
                    <ContactCodeSnippet formData={formData} />
                </section>
            </main>
        </div>
    );
};

export default ContactPage;
