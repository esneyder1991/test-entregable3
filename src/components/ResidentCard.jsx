import axios from 'axios'
import React, { useEffect, useState } from 'react'

const residentsStatus = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-gray-500"

}

const ResidentCard = ({resident}) => {

   const [residentInfo, setResidentInfo] = useState()
  

   


    useEffect(() =>{

     axios
     .get(resident)
     .then((res) => setResidentInfo(res.data))
     .catch((err) => console.log(err))
    },[])

  return (
    <article>
      <div className='relative'>
        <img className='w-full' src={residentInfo?.image} alt="" />
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/80 text-white py-1 px-8 flex gap-2 items-center rounded-sm border border-green-500 '>
          <div className={`w-3 h-3  ${residentsStatus[residentInfo?.status]} rounded-full`}></div>
          <span>{residentInfo?.status}</span>
        </div>
      </div>
      <section className='text-white flex flex-col p-8'>
        <h3 className='font-bold border-b border-green-500 border-opacity-50 px-3 pt-4 pb-2 text-3xl  '>{residentInfo?.name}</h3>
        <ul >
            <li className='grid grid-cols-2'>
                <span className='text-purple-300 text-left'>Species</span>
                <span >{residentInfo?.species}</span>
            </li>
            <li className='grid grid-cols-2'>
                <span className='text-purple-300'>Origin</span>
                <span>{residentInfo?.origin.name}</span>
            </li>
            <li className='grid grid-cols-2'>
                <span className='text-purple-300'>Times appear</span>
                <span>{residentInfo?.episode.length}</span>
            </li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard
