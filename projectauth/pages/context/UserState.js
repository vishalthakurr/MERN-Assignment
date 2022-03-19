import UserContext from "../context/UserContext";
import { useState } from "react";



const UserState = (props) => {




  const [user, setuser] = useState([])

  // //////// get user
  const getuser = async () => {

    //api call
    const response = await fetch(`http://localhost:5000/api/getuser`, {

      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')

      },

    });
    const json = await response.json();
    // console.log([json]);

    setuser(json)


  }

  // alert
  const [Aler, setAler] = useState({})
  const showalert = (meassage, type) => {

    setAler({
      msg: meassage,
      type: type
    })

    setTimeout(() => {
      setAler(null);
    }, 2000);

  }


  


  // //////// info

  // const [userinfo, setuserinfo] = useState([]);
  // const info = async () => {

  //   //api call
  //   const response = await fetch(`http://localhost:5000/api/userinfo`, {

  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'auth-token': localStorage.getItem('token')

  //     },

  //   });
  //   const json = await response.json();
  //   // console.log([json]);

  //   setuserinfo(json)


  // }



  return (


    <UserContext.Provider value={{ user, getuser, Aler ,showalert }} >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;

