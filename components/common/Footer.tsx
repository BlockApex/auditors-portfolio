import { Github, Linkedin, X } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex items-center justify-between border-t border-foreground/50 absolute bottom-0'>
            <section className='flex items-center'>
                <div className='border-r border-foreground/50'>
                    <p className='text-foreground text-base px-4 py-2'>find me in:</p>
                </div>
                <div className='border-r border-foreground/50 px-4 py-2'>
                    <X className='text-foreground text-base cursor-pointer' />
                </div>
                <div className='border-r border-foreground/50 px-4 py-2 '>
                    <Linkedin className='text-foreground text-base cursor-pointer' />
                </div>
            </section>
            <section className='flex items-center'>
                <div className='border-s border-foreground/50 px-4 py-2 flex items-center gap-2'>
                    <p className='text-foreground text-base'>@username</p>
                    <Github className='text-foreground text-base cursor-pointer' />
                </div>
            </section>
        </div>
    )
}

export default Footer