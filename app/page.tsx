"use client";

import Image from 'next/image'
import { useAuditorStore } from "@/store/useAuditorStore";
import { AlertCircle, Loader2 } from "lucide-react";

const HomePage = () => {
  const { data: auditor, isLoading, error } = useAuditorStore();

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-red-400 space-y-4">
        <AlertCircle size={48} />
        <p className="text-lg font-medium">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition-colors text-white text-sm"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (isLoading || !auditor) {
    return (
      <div className='w-full h-full relative'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 h-full overflow-y-auto xl:overflow-hidden' >
          <section className='order-2 xl:order-1 lg:col-span-6 w-full h-full flex items-center justify-center pb-10 xl:pb-20'>
            <div className='flex items-center gap-2 relative'>
              <div className="w-[200px] xl:w-[300px] aspect-square bg-white/5 rounded-full animate-pulse"></div>
            </div>
          </section>
          <section className='order-1 xl:order-2 lg:col-span-6 w-full flex items-center justify-center pt-10 xl:pt-0 pb-2 xl:pb-20 px-1 lg:px-4'>
            <div className='w-full flex flex-col items-start px-4 xl:px-0 space-y-6'>
              <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>
              <div className="h-12 w-3/4 bg-white/10 rounded animate-pulse"></div>
              <div className="h-8 w-1/2 bg-white/10 rounded animate-pulse"></div>

              <div className='mt-8 w-full'>
                <div className="h-6 w-24 bg-white/10 rounded animate-pulse mb-4"></div>
                <div className='flex items-center gap-4 flex-wrap'>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className='h-10 w-32 bg-white/10 rounded-xl animate-pulse'></div>
                  ))}
                </div>
              </div>

              <div className='mt-8 hidden xl:block w-full'>
                <div className="h-4 w-48 bg-white/10 rounded animate-pulse mb-2"></div>
                <div className="h-6 w-full bg-white/10 rounded animate-pulse"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full h-full relative'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 h-full overflow-y-auto xl:overflow-hidden' >
        <section className='order-2 xl:order-1 lg:col-span-6 w-full h-full flex items-center justify-center pb-10 xl:pb-20'>
          <div className='flex items-center gap-2 relative'>
            <Image src='/assets/arrow-big.svg' width={300} height={300} alt='arrow' className="w-[200px] xl:w-[300px] hidden xl:block" />
            <Image
              src={auditor.profile_image_url || '/assets/user.png'}
              width={300}
              height={300}
              alt='user'
              className="w-[200px] xl:w-[300px] xl:static top-10 left-10 xl:top-auto xl:left-auto opacity-80 xl:opacity-100 object-contain"
            />
          </div>
        </section>
        <section className='order-1 xl:order-2 lg:col-span-6 w-full flex items-center justify-center pt-10 xl:pt-0 pb-2 xl:pb-20 px-1 lg:px-4'>
          <div className='w-full flex flex-col items-start px-4 xl:px-0'>
            <p className='text-sm xl:text-base text-foreground'>Hi all. I am</p>
            <h1 className='text-4xl xl:text-5xl text-gradient'>{auditor.name}</h1>
            <h6 className='text-xl xl:text-2xl text-foreground'>
              {">"} {auditor.position}
            </h6>
            <div className='mt-8'>
              <p className='text-base text-foreground'>Worked with</p>
              <div className='flex items-center gap-4 mt-2 flex-wrap'>
                {auditor.worked_with?.map((c, i) => {
                  return (
                    <div className='bg-dark rounded-xl px-3 py-1 flex items-center gap-2' key={i}>
                      <Image src={c.logo} alt={c.name} width={20} height={20} className="object-contain" />
                      <p className='text-sm text-white'>{c.name}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='mt-8 hidden xl:block'>
              <p className='text-base text-foreground'>
                // find my profile on Github:
              </p>
              <p className='text-base'>
                <span className='text-[#615FFF]'>const</span> <span className='text-[#00D5BE]'>githubLink</span> <span className='text-foreground'>=</span> <span className='text-[#FFA1AD]'>“{auditor.github_link}”</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage