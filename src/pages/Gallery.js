import React, { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import "../assets/sty_gallery.css";
import app from "../firebase";

const db = app.firestore();
const Gallery = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [users, setUsers] = useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    if (!username) {
      return;
    }
    db.collection("users").doc(username).set({
      name: username,
      avatar: fileUrl,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const userCollection = await db.collection("users").get();
      setUsers(
        userCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  });

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="sectionTitle">
        <h1>MY GALLERY</h1>
        <form className="uploadform" onSubmit={onSubmit}>
          <input type="file" onChange={onFileChange} />

          <input type="text" name="username" placeholder="CITY" />
          <button>Submit</button>
        </form>
        <ul className="output">
          {users.map((user) => {
            return (
              <li key={user.name}>
                <img src={user.avatar} alt={user.name} />
                <p>{user.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
