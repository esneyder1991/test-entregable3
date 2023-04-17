import React from 'react'

const Location = ({location}) => {
    console.log(location)
  return (
    <section className='max-w-5xl lg:m-auto bg-[url("/images/bg-header.png")] text-white px-2 '>
      <h2 className='flex justify-center items-center font-bold'>{location?.name}</h2>
      <ul className='flex justify-between p-2'>
        <li>Type: {location?.type}</li>
        <li>Dimension: {location?.dimension}</li>
        <li>Population: {location?.residents.length}</li>
      </ul>
    </section>
  )
}

export default Location
