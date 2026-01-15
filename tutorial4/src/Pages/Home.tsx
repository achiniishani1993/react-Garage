import {jsonPlaceholderAPI} from "../axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import {Link} from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [show, setShow]= useState(false);


  useEffect(() => {
    const headers = { headers: { 'Authorization': "AuthStr" }}
    jsonPlaceholderAPI
      .get("/users", headers)
      .then((response) => {setUsers(response.data);})
      .catch((err)=>{
        setError(err.message);
        setShow(true);
      });
  }, []);

  return (
    <>
      <h1>Home Page</h1> 
      <Link to= '/about'>About Page</Link> <br/>
      <Link to= '/contact'>Contact Us</Link> 
      <h4> Information</h4>
   
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users.map((user, id) => {
            return (
              <tr key={id}>
                <th scope="row" className="table-success">
                  {user.name}
                </th>
                <td className="table-danger">{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
   
 <ToastContainer  position="bottom-end">
  <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg="danger" >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{error}</Toast.Body>
        </Toast>
    </ToastContainer>
    </>
  );
};

export default Home;
