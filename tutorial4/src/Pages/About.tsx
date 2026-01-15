import { useEffect, useState } from "react"
import Toast from 'react-bootstrap/Toast';
import {dummyJsonAPI} from "../axios";
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";

const About = () => {
const [posts, setPost] = useState <any[]>([]);
const [error, setError] = useState ("");
const [show, setShow]= useState(false);

useEffect (()=>{
   getPost();

},[]);
async function getPost (){
   try {
   const response = await dummyJsonAPI.get("/posts")
   setPost(response.data.posts)
   } catch (error:any) {
     setError(error.message);
     setShow(true);
   }
};

  return (
<>
<h1>About Page</h1>
<Link to= '/'>Home Page</Link>
     <Stack gap={3}>
      {posts.map((post, id) => (
      <div key={id}>
       <div className="p-2">{post.title}</div>
      <div className="p-2">{post.body}</div>
      </div>
      ))};
    
    </Stack>


 <Toast onClose={()=> setShow(false)} show={show} bg="danger">
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt=""  />
      </Toast.Header>
      <Toast.Body>{error}</Toast.Body>
    </Toast>

 </>  
  )
}

export default About