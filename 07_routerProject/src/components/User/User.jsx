import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId} = useParams();
  return (
    <div classname='bg-gray-300 text-white p-8 text-3xl'>User:{userId}</div>
  )
}

export default User