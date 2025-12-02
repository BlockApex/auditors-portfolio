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
      <div className='grid grid-cols-12 gap-6 h-full' >
        <section className='col-span-6 w-full h-full flex items-center justify-center pb-20'>
          <div className='flex items-center gap-2'>
            <Image src='/assets/arrow-big.svg' width={300} height={300} alt='arrow' />
            <Image src='/assets/user.png' width={300} height={300} alt='user' />
          </div>
        </section>
        <section className='col-span-6 w-full flex items-center justify-center pb-20'>
          <div className='w-full flex flex-col items-start'>
            <p className='text-base text-foreground'>Hi all. I am</p>
            <h1 className='text-5xl text-gradient'>Moazzam Arif</h1>
            <h6 className='text-2xl text-foreground'>
              {">"} Senior Smart Contract Auditor
            </h6>
            <div className='mt-8'>
              <p className='text-base text-foreground'>Worked with</p>
              <div className='flex items-center gap-4 mt-2'>
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

            <div className='mt-8'>
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