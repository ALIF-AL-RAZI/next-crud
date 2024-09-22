import React from 'react'

const AddTopic = () => {
  return (
    <div>
        <form className='flex justify-between flex-col mt-10 gap-10 '>
            <input className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Title ' />
            <input className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Description' />
            <button className='bg-gray-600 px-5 py-2 rounded-md'>Add Topic</button>
        </form>
    </div>
  )
}

export default AddTopic