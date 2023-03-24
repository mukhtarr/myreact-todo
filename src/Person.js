import React from "react";

export default function Person(props) {
  let { email, gender, fullname } = props.names;

  return (
    <div>
      your email is <b>{email}</b> , gender is <b>{gender}</b>, and full name is{" "}
      <b>{fullname}</b>
    </div>
  );
}
