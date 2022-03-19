import React, { useEffect } from 'react'
import { useContext } from 'react';
import UserContext from './context/UserContext';
import { useRouter } from 'next/router'
import styles from '../styles/About.module.css'


const About = (props) => {
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
    <>

      <style jsx>
        {`
        .he{
         height:100vh;
         width:100%;
         color:red;
         }  
        ` }
      </style>

      <div className={styles.container}>
        <h1 className={styles.center}>About page</h1>
        <h2 className='text-2xl font-bold'>Introduction</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus amet sequi possimus, aut nobis dolore minima vero voluptatum, blanditiis sed eveniet, sint error natus! Doloremque tempore enim iusto nostrum dolores quis rem maiores suscipit ea repellat minima optio, modi ad sed! Eveniet, accusantium fugiat dolores numquam impedit dicta corporis ipsam temporibus quas obcaecati. Id officiis ut illo voluptates reprehenderit atque doloribus, voluptate molestiae! Autem dolores quia volupderit est laborum ab numquam impedit! Dicta magnam id repellat nostrum impedit dolorem neque eaque iure laudantium possimus?</p>

        <h2  className='text-2xl font-bold'>Service Offer</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam architecto ea consectetur molestias unde qui possimus incidunt facere, tempore vero, inventore fugiat. Suscipit id quidem temporibus provident commodi corrupti eos vel, a quis pariatur animi iusto quae recusandae obcaecati inventore harum saepe unde. Adipisci, recusandae, quaerat illum quos ullam i!</p>

        <p>We offer the following Service</p>
        <ul>
          <li>Srvice 1</li>
          <li>Srvice 2</li>
          <li>Srvice 3</li>
          <li>Srvice 4</li>
          <li>Srvice 5</li>
          <li>Srvice 6</li>
        </ul>

        <h2  className='text-2xl font-bold'>Contact US</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempore eius non facere totam molestiae. Dolorum, voluptates. Impedit, debitis? Illo, error quasi sed, dolorem exercitationem dolor at nesciunt itaque vitae corrupti ipsum reprehenderit totam perferendis. Voluptas nostrum, veniam deserunt, vel exercitationem consectetur, repellat impedit illum enim sit ducimus recusandae nulla!</p>
      </div>
    </>
  )
  
}

export default About