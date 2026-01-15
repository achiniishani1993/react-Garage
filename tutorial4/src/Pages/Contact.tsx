import {jsonPlaceholderAPI} from "../axios";
import { useEffect, useState } from "react"



const Contact = () => {
const[users, setUsers]= useState<any []>([]);
const[error, setError]= useState("")

useEffect (()=>{
  getUser();
},[]);

async function getUser(){
try {
const response = await jsonPlaceholderAPI.get("/posts")
setUsers(response.data)
} catch (error:any) {
  setError(error.message)
}
}



  return (
    <>
    
      {users.filter((user)=> (
         user.id <60 && user.id >55
      )).map((user, id) =>(
        <div key={id}>
         <ul>
        <li>{user.id}</li>
         <li>{user.title}</li>
       </ul>
    </div>

       ))};
      

    
    </>
  )
}

export default Contact 