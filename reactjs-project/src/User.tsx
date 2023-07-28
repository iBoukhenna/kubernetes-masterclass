import React from 'react';

interface UserProps {
    name: string;
    email: string;
}

const User = ({email, name}: UserProps) => {
  return (
    <div>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
    </div>
  );
}

export default User;
