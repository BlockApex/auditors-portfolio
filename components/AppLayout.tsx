import React from 'react'
import Footer from './common/Footer';
import Navbar from './common/Navbar';

interface AppLayoutProps {
    children: React.ReactNode;
}


const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <main className='w-full h-screen relative overflow-hidden root-bg p-8'>
            <div className='w-full h-full border border-foreground/50 rounded-sm relative flex flex-col  backdrop-blur-sm'>
                <Navbar />
                <div className="flex-1 overflow-hidden relative">
                    {children}
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default AppLayout