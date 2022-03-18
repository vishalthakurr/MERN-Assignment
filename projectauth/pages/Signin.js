import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Signin = () => {



    const [data, setdata] = useState({ email: "", password: "", });

    const router = useRouter()
    const Createlogin = async (e) => {
        e.preventDefault()


        const response = await fetch(`http://localhost:5000/api/userSignin`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({

                email: data.email, password: data.password
            })


        });
        const json = await response.json();
        // console.log(json);

        if (json.sucess || json.mess === "login sucess full") {

            //save the authtoken and redirect
            localStorage.setItem('token', json.jwttoken)

            setdata({ email: "", password: "", })
            router.push("/")
            alert("Sucessfully login", "success")


        }
        else if (json.sucess === false || json.error === "please try to login with  correct  credentials") {
            alert("please try to login with  correct  credentials", "danger")

        }

        else {
            alert("Invalid credential", "danger")
        }


    }



    const handleclick = (e) => {

        setdata({ ...data, [e.target.name]: e.target.value })


    }
    return (

        <div className="bg-gray-100 h-[90vh]  ">
            <div className="container  pt-[5rem] flex flex-col-reverse  md:flex-row  md:px-4 lg:px-6   mx-auto items-center justify-center">

                <div className="right flex flex-col bg-white px-8 py-2 rounded-md  md:w-2/6 shadow-2xl text-md relative" >




                    <input className="px-5 h-12 my-2 rounded-md border-2 border-x-gray-300 outline-blue-600" type="text" placeholder="Email address or Phone Number" name='email' id='email' value={data.name} onChange={handleclick} required />

                    <input className="px-5 h-12 my-2 rounded-md border-2 border-x-gray-300 outline-blue-600" type="password" placeholder="Password" name='password' id='password' value={data.password} onChange={handleclick} required />

                    <button type='submit' onClick={Createlogin} className=" my-3 bg-blue-600 text-white  font-bold rounded-md p-3 hover:bg-blue-700">Sign In</button>

                    {/* <Link href="/forgetPassword">
                        <span className=" my-2 text-blue-600 text-center text-sm cursor-pointer hover:underline">

                            Forgotten password?
                        </span>
                    </Link> */}
                    <hr className="my-3 border-gray-400" />

                    <Link href="/Signup">
                        <button className=" my-3  bg-green-600 text-white w-fit  m-auto font-bold rounded-md p-3 hover:bg-green-700">Create New Account</button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Signin