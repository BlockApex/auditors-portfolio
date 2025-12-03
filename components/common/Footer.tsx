import { Github, Linkedin, X } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row items-center justify-between border-t border-foreground/50 shrink-0'>
            <section className='flex items-center w-full lg:w-auto justify-between lg:justify-start'>
                <div className='border-r border-foreground/50 w-full lg:w-auto text-center lg:text-left'>
                    <p className='text-foreground text-base px-4 py-2'>find me in:</p>
                </div>
                <div className='flex'>
                    <div className='border-l lg:border-l-0 border-r border-foreground/50 px-4 py-2'>
                        <X className='text-foreground text-base cursor-pointer' />
                    </div>
                    <div className='border-r border-foreground/50 px-4 py-2 '>
                        <Linkedin className='text-foreground text-base cursor-pointer' />
                    </div>
                </div>
            </section>
            <section className='flex items-center w-full lg:w-auto border-t lg:border-t-0 border-foreground/50 lg:border-none'>
                <div className='border-s lg:border-s border-foreground/50 px-4 py-2 flex items-center gap-2 w-full lg:w-auto justify-center lg:justify-start'>
                    <p className='text-foreground text-base'>@username</p>
                    <Github className='text-foreground text-base cursor-pointer' />
                </div>
            </section>
        </div>
    )
}

export default Footer