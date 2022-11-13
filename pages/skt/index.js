import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { demoResume } from '../../lib/data'

export default function Home() {
  const resume = demoResume()
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="bg-gray-300 flex align-middle justify-center">
    <div class="container main-page bg-white w-[210mm] h-[297mm] m-10 overflow-auto drop-shadow-2x  p-0">
        <div>
            <div class="grid grid-cols-4 gap-3 h-auto">
                <div class="border-1"><img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="profilephoto" class="h-40 w-48"></img>
                </div>
                <div class="bg-yellow-400 col-span-3 flex flex-col  h-40">
                    <h1 class="text-5xl font-semibold px-12 border-l py-4 ">{resume.personal.firstName} </h1>
                    <h1 class="text-5xl font-semibold px-12 ">{resume.personal.lastName}</h1>
                    <h2 class="px-14 ">{resume.personal.role}</h2>
                </div>
               
            </div>
       
        </div>
        <div>
            <div class="bg-white h-auto py-4  px-16 ">
                <h2 class="text-white bg-neutral-900 p-1 inline">DETAILS</h2>
                {
                    
                       <div>
                        <h3>{resume.personal.email}</h3>
                        <h3>{resume.personal.phone}</h3>
                        <h3>{resume.personal.dob}</h3>
                       </div>
                }
            </div>
            <div class="bg-white h-auto py-2  px-16">
                <h2 class="text-white bg-neutral-900 inline p-1">PROFILE</h2>
                <h4>{resume.objective}</h4>
                           

            </div>
            <div class="bg-white h-auto py-2 px-16">
                <h1 className='text-white bg-neutral-900 inline p-1'>EDUCATION</h1>
                {
                resume.education.map(item=>(
                <div className='my-4' >
                    <h1 className='text-black font-medium'>{item.institution}</h1>
                    <h6 className='text-sm text-gray-400'>{item.startDate}-{item.endDate}</h6>
                    <li className='text-black px-5  font-sm list-disc'>{item.fieldOfStudy}</li>
                    <li className='text-black px-5  font-sm list-disc'>{item.typeOfDegree}</li>
                    <li className='text-black px-5  font-sm list-disc'>{item.gpa}</li>
                </div>
                 ))
                }
                    
            </div>
           
               
            <div class="bg-white h-auto py-2 px-16 ">
                <h2 class="text-white bg-neutral-900 inline p-1">EMP HISTORY</h2>
                {
                    resume.work.map(item=>(
                        <div>
                        <h1 className='text-black font-medium '>{item.company}</h1>
                        <h4 className='text-gray-400 text-sm'>{item.from}</h4>
                        <li className='px-16 list-disc'>{item.designation}</li>
                        <li className='px-16 list-disc'>{item.website}</li>
                        {/* <p className=''>{item.enabled}</p>
                        <p className=''>{item.summary}</p> */}
                        </div>
                    ))
                }
            </div>
            <div class="bg-white h-auto py-2 px-16 ">
            <h2 class="text-white bg-neutral-900  inline p-1 ">SKILLS</h2>
            
            {
                resume.skills.map(item=>(
                    <div>
                        <h1 className='text-black font-medium mr-6'>{item.name}</h1>
                        <h6 className='text-gray-500 font-sm px-5'>{item.level}</h6>
                    </div>
                ))
            }
            </div>
            </div>
            <h2 class="text-white bg-neutral-900 inline p-1 ml-16">LANGUAGES</h2>
            <div class="bg-white h-auto py-2 px-16 ">
                {
                     resume.languages.map(item=>(
                        <div>
                             <h1 className='text-black font-medium mr-6'>{item.name}</h1>
                             <h1 className='text-gray-600 font-sm mr-6 px-5'>{item.fluency}</h1>
                        </div>
                     ))
                }
                </div>
        </div>
    </div>
</div>
    
  )
}
