import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'




const Signup = () => {

    const [data, setdata] = useState({ name: "", email: "", phone: "", password: "", cpassword: "" });

    const router = useRouter()



    const Createuser = async (e) => {
        e.preventDefault()


        const response = await fetch(`http://localhost:5000/api/userSignup`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                name: data.name
                , email: data.email, phone: data.phone, password: data.password, cpassword: data.cpassword
            })


        });
        const json = await response.json();
        // console.log(json);

        if (json.sucess) {

            alert("Sucessfully Account Created", "success")
            //save the authtoken and redirect
            localStorage.setItem('token', json.jwttoken)
            setdata({ name: "", email: "", phone: "", password: "", cpassword: "" })
            router.push("/")


        }
        else if (json.sucess === false || json.err === "you have already contact") {
            alert("you have already contact", "warning")

        }
        else if (json.sucess === false || json.error === "  password is not same") {
            alert(" password is not same", "warning")

        }
        else {
            alert("Invalid credential", "danger")
        }


    }



    const handleclick = (e) => {

        setdata({ ...data, [e.target.name]: e.target.value })


    }
    return (
        <div className="bg-gray-100  h-[90vh]  ">
            <div className="container pt-[5rem] flex flex-col-reverse  md:flex-row  md:px-4 lg:px-6   mx-auto items-center justify-center">

                <div className="  h-fit right flex flex-col bg-white px-8 py-2 rounded-md  md:w-2/6 shadow-2xl text-md relative" >
                    <h1 className='text-center text-sm md:text-xl lg:text-2xl'>
                        Create the Account
                    </h1>

                    <input className="px-5 h-12 my-2 rounded-md border-2 border-x-gray-300 outline-blue-600" type="text" placeholder="Enter your Name" name='name' onChange={handleclick} required id='name' value={data.name} />
                    <input className="px-5 h-12 my-2 rounded-md border-2 border-x-gray-300 outline-blue-600" type="email" placeholder="Enter Email address " name='email' onChange={handleclick} required id='email' value={data.email} />
                    <input className="px-5 h-12 my-2 rounded-md border-2 border-x-gray-300 outline-blue-600" type="number" placeholder="Enter Your phone" name='phone' onChange={handleclick} required id='phone' value={data.phone} />
                    <input className="px-5 h-12 my-2 rounded-md border-2 border-x-gray-300 outline-blue-600" type="password" placeholder="Enter your passowrd" name='password' onChange={handleclick} required id='password' value={data.password} />

                    <input className="px-5 h-12 my-2 rounded-md border-2 border-x-gray-300 outline-blue-600" type="password" placeholder="Confirmation passowrd" name='cpassword' onChange={handleclick} required id='cpassword' value={data.cpassword} />
                    <button type='submit' onClick={Createuser} className=" my-3 bg-green-600 text-white w-fit  m-auto font-bold rounded-md p-3 hover:bg-green-700">Create New Account</button>
                    <hr className="my-3 border-gray-400" />
                    <Link href="/Signin">
                        <button className=" my-3 bg-blue-500 text-white w-fit  m-auto font-bold rounded-md p-3 hover:bg-blue-600">Sign In</button>
                    </Link>


                </div>
            </div>

        </div>
    )
}

export default Signup