import Image from 'next/image'
import React from 'react'

const companies = [
  {
    name: "Blockapex",
    icon: "/assets/companies/1.png"
  },
  {
    name: "Oak Security",
    icon: "/assets/companies/2.png"
  },
  {
    name: "Zellic",
    icon: "/assets/companies/3.png"
  }
]

const HomePage = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 h-full overflow-y-auto xl:overflow-hidden' >
        <section className='order-2 xl:order-1 lg:col-span-6 w-full h-full flex items-center justify-center pb-10 xl:pb-20'>
          <div className='flex items-center gap-2 relative'>
            <Image src='/assets/arrow-big.svg' width={300} height={300} alt='arrow' className="w-[200px] xl:w-[300px] hidden xl:block" />
            <Image src='/assets/user.png' width={300} height={300} alt='user' className="w-[200px] xl:w-[300px]  xl:static top-10 left-10 xl:top-auto xl:left-auto opacity-80 xl:opacity-100" />
          </div>
        </section>
        <section className='order-1 xl:order-2 lg:col-span-6 w-full flex items-center justify-center pt-10 xl:pt-0 pb-2 xl:pb-20 px-1 lg:px-4'>
          <div className='w-full flex flex-col items-start px-4 xl:px-0'>
            <p className='text-sm xl:text-base text-foreground'>Hi all. I am</p>
            <h1 className='text-4xl xl:text-5xl text-gradient'>Moazzam Arif</h1>
            <h6 className='text-xl xl:text-2xl text-foreground'>
              {">"} Senior Smart Contract Auditor
            </h6>
            <div className='mt-8'>
              <p className='text-base text-foreground'>Worked with</p>
              <div className='flex items-center gap-4 mt-2 flex-wrap'>
                {companies.map((c, i) => {
                  return (
                    <div className='bg-dark rounded-xl px-3 py-1 flex items-center gap-2' key={i}>
                      <Image src={c.icon} alt={c.name} width={20} height={20} />
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
                <span className='text-[#615FFF]'>const</span> <span className='text-[#00D5BE]'>githubLink</span> <span className='text-foreground'>=</span> <span className='text-[#FFA1AD]'>“https://github.com/example/url”</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage