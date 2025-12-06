"use client";

import { Github, Linkedin, X } from 'lucide-react'
import React from 'react'

import { useAuditorStore } from "@/store/useAuditorStore";
import Image from 'next/image';

const Footer = () => {
    const { data: auditor } = useAuditorStore();

    return (
        <div className='w-full flex flex-col xl:flex-row items-center justify-between border-t border-foreground/50 shrink-0'>
            <section className='flex items-center w-full xl:w-auto justify-between xl:justify-start'>
                <div className='border-r border-foreground/50 w-full xl:w-auto text-center xl:text-left'>
                    <p className='text-foreground text-base px-4 py-2'>find me in:</p>
                </div>
                <div className='flex'>
                    <div className='border-l xl:border-l-0 border-r border-foreground/50 px-4 py-2'>
                        {auditor?.twitter_link ? (
                            <a href={auditor.twitter_link} target="_blank" rel="noopener noreferrer">
                                <Image src='/assets/x.svg' alt='x.com' width={25} height={25} />
                            </a>
                        ) : (
                            <div className="w-4 h-4 bg-white/10 rounded animate-pulse"></div>
                        )}
                    </div>
                    <div className='border-r border-foreground/50 px-4 py-2 '>
                        {auditor?.linkedin_link ? (
                            <a href={auditor.linkedin_link} target="_blank" rel="noopener noreferrer">
                                <Image src='/assets/linkedin.svg' alt='linkedin.com' width={25} height={25} />
                            </a>
                        ) : (
                            <div className="w-4 h-4 bg-white/10 rounded animate-pulse"></div>
                        )}
                    </div>
                </div>
            </section>
            <section className='flex items-center w-full xl:w-auto border-t xl:border-t-0 border-foreground/50 xl:border-none'>
                <div className='border-s xl:border-s border-foreground/50 px-4 py-2 flex items-center gap-2 w-full xl:w-auto justify-center xl:justify-start'>
                    {auditor?.github_username ? (
                        <>
                            <p className='text-foreground text-base'>@{auditor.github_username}</p>
                            <a href={auditor.github_link || "#"} target="_blank" rel="noopener noreferrer">
                                <Image src='/assets/github.svg' alt='github.com' width={25} height={25} />
                            </a>
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <div className="w-20 h-4 bg-white/10 rounded animate-pulse"></div>
                            <div className="w-4 h-4 bg-white/10 rounded animate-pulse"></div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Footer