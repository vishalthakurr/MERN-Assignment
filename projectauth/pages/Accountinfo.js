import React from 'react'
import { useContext,useState,useEffect } from 'react';
import UserContext from './context/UserContext';
import { useRouter } from 'next/router'



const Accountinfo = () => {

    
    const router = useRouter()
    
    const context = useContext(UserContext);
    const { user, getuser } = context;
    const [info, setinfo] = useState(user);
    console.log(user);
  
  
    useEffect(() => {
  
      if (localStorage.getItem('token')) {
        getuser();
        setinfo(user)
      }
      else {
        router.push("/Signin")
      }
      // eslint-disable-next-line 
    }, [info])
  
    return (

  
        <div className='h-screen'>

            <h1 className='text-center text-3xl my-5'> Your Account Info</h1>



            <div className='border-2 w-8/12 m-auto h-fit p-4  rounded-lg  shadow-2xl  my-16  '>


                <form action="" className='flex flex-col space-y-3'>

                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="name">Name : </label>
                        <input type="text" id='name' value={info.name} name='name' className='border-[0.8px] rounded-md border-gray-500' />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="email">email : </label>
                        <input type="email" id='email' value={info.email} name='email' className='border-[0.8px] rounded-md border-gray-500' />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="phone">phone : </label>
                        <input type="number" id='phone' value={info.phone} name='phone' className='border-[0.8px] rounded-md border-gray-500' />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="password">Password : </label>
                        <input type="text" id='password' value={info.password} name='password' className='border-[0.8px] rounded-md border-gray-500' />
                    </div>

                    <div className='flex flex-row space-x-2'>
                        <button type='submit' className=' bg-red-600  rounded-lg p-1    px-2 text-white' >Delete Account </button>
                        <button type='submit ' className=' bg-blue-400  rounded-lg p-1 px-2 text-white' > Edit Info</button>
                    </div>


                </form>


            </div>



        </div>
    )
}

export default Accountinfo