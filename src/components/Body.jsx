import React from 'react'
import data from '../../project_json.json';
import '../index.css'
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/project')
    }
    return (
        <>

            <div className='flex m-10 text-white '>

                <div>
                    <h1>Technical Project Management</h1>
                    <p>{data.short_description}</p>
                    <button id = 'btn1' onClick={handleClick} className='bg-blue-800 rounded-2xl m-2 p-2 hover:cursor-pointer'>Go to Projects</button>
                </div>

                <div className='flex'>
                    <img src={data.project_image} alt="" />
                </div>

            </div>

            <div className='flex m-8 gap-2'>
           
            <div className='  bg-gray-200 rounded-2xl '>
                
                <p className='text-center h-10 m-2 rounded-2xl p-2 font-bold bg-gray-50 '>Opportunity Description</p>
                <p className='p-6' dangerouslySetInnerHTML={{ __html: data.description }}></p>
                
            </div>

                <div className="flex flex-col items-center p-8 rounded-2xl">
                    <div className="flex flex-col items-center bg-gray-100 p-2 rounded-2xl">
                        <img className="border-b-2 border-gray-500 w-52 h-42 object-contain" src="https://deepthought.education/assets/images/logo/logo.svg" alt="" />
                        <p className="mt-2 text-center text-lg font-bold mt-4">DT powers the teams of futuristic startups. Young contributors unlearn, relearn with us, to create socio-economic value. DT repositions the education industry, DT is India's answer to Tesla</p>
                        <button onClick={()=>window.location.href ='https://deepthought.education/'} className='bg-blue-600 p-2 rounded-2xl text-white hover:cursor-pointer '>Explore More</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Body