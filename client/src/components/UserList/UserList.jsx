import React from "react";
import User from "../User/User";
import "./UserList.css"


const UserList = ({users}) => { 

  return (
  <div>
    {users.map((user,i)=><User dataUser={user} key={i}/>)}
  </div>);
};

export default UserList;
