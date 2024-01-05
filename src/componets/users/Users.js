import React, { useEffect, useState } from "react";
import "./style.css";

function Users() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    fetch("http://localhost:3003/contactsArray")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setUserData(() => data);
      });
  }, []);
  return (
    <>
      <div>
        {userData &&
          userData.map((values) => {
            return (
              <div className="main">
                <div className="avtar">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=Abby"
                    alt="avatar"
                  />
                </div>
                <div>
                  <h1>{values.Name}</h1>
                  <p>
                    <b>Email: </b>
                    {values.Email}
                  </p>
                  <p>
                    <b>Phone: </b>
                    {values.Phone}
                  </p>
                  <p>
                    <b>Company: </b>
                    {values.Company}
                  </p>
                  <p>
                    <b>Website: </b>
                    {values.Website}
                  </p>
                  <p>
                    <b>Address: </b>
                    {values.Address}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Users;
