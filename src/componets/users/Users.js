import React, { useEffect, useState } from "react";
import {
  HeartTwoTone,
  EditOutlined,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
// import { Space } from "antd";
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
      <div className="contacts">
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
                <div className="details">
                  <h3>{values.Name}</h3>
                  <p>
                    <MailOutlined />
                    <span className="info">{values.Email}</span>
                  </p>
                  <p>
                    <PhoneOutlined />
                    <span className="info">{values.Phone}</span>
                  </p>
                  <p>
                    <GlobalOutlined />
                    <span className="info">{values.Website}</span>
                  </p>
                </div>
                <hr
                  style={{
                    background: "lightgray",
                    color: "lightgray",
                    borderColor: "lightgray",
                  }}
                />

                <div className="icon">
                  <HeartTwoTone twoToneColor="#eb2f96" />
                  <EditOutlined />
                  <DeleteFilled />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Users;
