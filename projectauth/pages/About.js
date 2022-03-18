import React from 'react'
import { useContext } from 'react';
import UserContext from './context/UserContext';


const About = (props) => {
    const context = useContext(UserContext);
    const u = context;


  return (
    <div className='h-screen text-center text-xl my-14'>About page {}</div>
  )
}

export default About