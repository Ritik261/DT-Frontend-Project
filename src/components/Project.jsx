import React from 'react'

const Project = () => {
  return (
   
    <div className='flex p-10 gap-10'>
      <div className='w-2xl rounded-2xl p-4 bg-gray-300 w-80'>
        <p>Technical Project Management</p>
        <iframe
            src="https://www.youtube.com/embed/TiMRwri1xJ8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-48"
          ></iframe>

      </div>

      <div className='w-2xl rounded-2xl p-4 bg-gray-300 w-80'>
        <p>Threadbuild</p>
        <div className='bg-gray-800 text-white p-2 flex items-center rounded-sm'>
          <p>Thread A</p>
        </div>

      </div>

      <div className='w-2xl rounded-2xl p-4 bg-gray-300 w-80 h-100'>
        <p>Structure Your Pointer</p>
        <p>Title</p>
        <div className='bg-gray-800 text-white p-2 flex items-center rounded-sm'>
          <input type="text" className='bg-gray-200 text-black p-2' placeholder='Enter Title'/>
        </div>
        <p>Content</p>
        <div className='bg-gray-800 text-white p-2 flex items-center rounded-sm'>
          <input type="text" className='bg-gray-200 text-black p-2 ' placeholder='Enter Title'/>
        </div>

      </div>

      <div className='w-2xl rounded-2xl p-4 bg-gray-300 w-80 h-100'>
        <p>4SA Method</p>
        <div>
          <iframe
            src="https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-48"
          ></iframe>
        </div>

      </div>
    </div>
  )
}

export default Project