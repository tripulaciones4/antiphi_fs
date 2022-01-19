import React from "react";
import User from "../User/User";


const UserList = ({users}) => {

  

  return (
  <div>
    {users.map((user,i)=><User dataUser={user} key={i}/>)}
  </div>);
};

export default UserList;
