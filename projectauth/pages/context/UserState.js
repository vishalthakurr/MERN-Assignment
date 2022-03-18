import UserContext from "../context/UserContext";
import { useState } from "react";



const UserState = (props) => {

  


  const [user, setuser] = useState('')

   // //////// get all note
   const getuser = async  () => {

       //api call
       const response = await fetch(`http://localhost:5000/api/getuser`, {

        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
  
        },
  
      });
      const json = await response.json();
      // console.log(json);

      setuser(json)


  }



  return (


    <UserContext.Provider value={{user ,getuser}} >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;

