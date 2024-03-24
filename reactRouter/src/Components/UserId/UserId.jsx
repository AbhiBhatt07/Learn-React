import React from 'react'
import { useParams } from 'react-router-dom' 
function UserId() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-center text-white text-3xl p-4'>User Id:{userid}
      
    </div>
  )
}

export default UserId