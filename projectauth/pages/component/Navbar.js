import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {



    const router = useRouter();

    const [state, setstate] = useState(true);


    const [han, sethan] = useState('ham');


    const handelcick = () => {

        const nav = document.querySelector('#togNav')

        if (state) {

            sethan('cancel')
            nav.classList.remove('close')
            nav.classList.add("add");


            setstate(false)
        }

        else {

            sethan('ham')
            nav.classList.remove('add')
            nav.classList.add("close");
            setstate(true)

        }
    }

    const userlogout = () => {

        localStorage.removeItem('token')
        router.push('/Signin')
    }





    return (
        <>
            <style jsx>
                {`   .add{

            transform: translate(0px, 0px);

            transition: transform 1s;

           }
           .close{

             transform: translate(-165px, 0px);
          
            transition: transform 1s;
            }
           
              `}

            </style>


            <div className='  px-2  md:px-3 lg:px-5  sticky top-0 z-50 bg-white shadow-md'>


                {/* <!-- navbar mivcosoft --> */}
                <div className="  sticky top-0 z-50   px-3 md:px-0       ">


                    <div className="navbar flex items-center justify-between py-6    bg-white">

                        <div className=" flex justify-center items-center md:hidden ">


                            <div className="hamburgar  cursor-pointer mr-3  " onClick={handelcick} >
                                <img id='barger' src={`../assets/${han}.png`} alt="" className='w-[45px] ' />
                            </div>

                        </div>

                        <div className="logo text-center md:flex ">


                            <div className=' flex flex-row  '>

                                <div className="md:text-md w-[90px] md:w-[110px]  h-auto md:mr-6">
                                    <Link href="/"><h1 className='text-lg font-serif text-purple-600 cursor-pointer'>MERN Assignment</h1></Link>
                                </div>

                            </div>

                            <div className=" hidden    mt-[6rem] 
                 md:w-auto md:bg-white md:static   md:space-x-10 md:mt-0 md:p-0   md:h-auto    md:flex  md:mx-4   md:text-xs   md:items-center lg:text-sm">

                                <div
                                    className=" md:p-0 md:hover:underline md:hover:underline-offset-8 md:hover:border-none ">
                                    <Link href='/'>  Home</Link></div>
                                <div
                                    className=" md:p-0 md:hover:underline md:hover:underline-offset-8 md:hover:border-none   ">
                                    <Link href='/About'> About</Link></div>
                                <div
                                    className=" md:p-0 md:hover:underline md:hover:underline-offset-8 md:hover:border-none   ">
                                    <Link href='/Blog'> Blog</Link></div>
                                <div
                                    className=" md:p-0 md:hover:underline md:hover:underline-offset-8 md:hover:border-none ">
                                    <Link href='/Contact'>  Contact Us</Link></div>


                            </div>
                        </div>


                        <div className="flex cart justify-center items-center text-xs  lg:text-sm">

                            <div className="flex space-x-5 sm:space-x-5 md:space-x-6 lg:space-x- 7 lg:text-sm  xl:space-x-8">

                                <div className="flex space-x-2 cursor-pointer  hover:underline hover:underline-offset-8 ">

                                    {typeof window !== 'undefined' ? (localStorage.getItem('token') ?


                                        <div className=' flex flex-row space-x-1 hover:text-blue-500 hover:text-base'>

                                            <img className=" w-6 md:w-4" src="/assets/iconmonstr-user-circle-thin.svg" alt="" />
                                            <button className="btn" onClick={userlogout}>logout
                                            </button>
                                        </div>

                                        : <Link href="/Signin">

                                            <div className=' flex flex-row space-x-1 hover:text-blue-500 hover:text-base'>

                                                <img className=" w-6 md:w-4" src="/assets/iconmonstr-user-circle-thin.svg" alt="" />
                                                <span className="hidden lg:inline-block">Sign in</span>
                                            </div>
                                        </Link>) : "vishal"}


                                </div>

                            </div>

                        </div>

                        {/* toggle nav */}
                        <div id='togNav' className="close absolute  block   w-fit h-fit text-left inset-0 bg-gray-200  px-6 py-2 mt-[6rem] 
               md:hidden  ">

                            <div
                                className="item cursor-pointer my-5 md:my-0 hover:border-dashed hover:border-2 hover:border-black  p-1 ">
                                <Link href='/'>  Home</Link></div>
                            <div
                                className="item cursor-pointer my-5 md:my-0 hover:border-dashed hover:border-2 hover:border-black  p-1   ">
                                <Link href='/about'> About</Link></div>
                            <div
                                className="item cursor-pointer my-5 md:my-0 hover:border-dashed hover:border-2 hover:border-black  p-1   ">
                                <Link href='/Blog'> Blog</Link></div>
                            <div
                                className="item cursor-pointer my-5 md:my-0 hover:border-dashed hover:border-2 hover:border-black  p-1 ">
                                <Link href='/Contact'>  Contact US</Link></div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar