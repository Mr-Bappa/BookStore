import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function SingleBook() {
    const {_id,bookTitle,imageURL}=useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imageURL} alt=" " className='h-96'/>
        {bookTitle}
    </div>
  )
}
