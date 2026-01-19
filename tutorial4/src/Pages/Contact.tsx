import { jsonPlaceholderAPI } from "../axios";
import { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";

const Contact = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await jsonPlaceholderAPI.get("/posts")
      setUsers(response.data)
    } catch (error: any) {
      setError(error.message);
      setShow(true);
    }
  }

  return (
    <>
      {users
        .filter((user) => user.id < 60 && user.id > 55)
        .map((user, id) => (
          <div key={id}>
            <ul>
              <li>{user.id}</li>
              <li>{user.title}</li>
            </ul>
          </div>
        ))}
    
      <Toast onClose={() => setShow(false)} show={show} bg="danger">
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        </Toast.Header>
        <Toast.Body>{error}</Toast.Body>
      </Toast>
    </>
  );
};

export default Contact;
