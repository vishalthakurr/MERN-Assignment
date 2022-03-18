import React ,{useEffect} from 'react'
import { useContext } from 'react';
import UserContext from './context/UserContext';
import { useRouter } from 'next/router'


const Contact = () => {

  const router = useRouter()

  const context = useContext(UserContext);
  const { user, getuser } = context;
  // console.log(user.name);


  useEffect(() => {

    if (localStorage.getItem('token')) {
      getuser();
    }
    else {
      router.push("/Signin")
    }
    // eslint-disable-next-line 
  }, [])
  return (
    <div className='h-screen  text-center text-xl my-14'>Contact page your phone number +91 {user.phone}</div>
  )
}

export default Contact