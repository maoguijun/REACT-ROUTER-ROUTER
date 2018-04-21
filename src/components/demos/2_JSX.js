import React from "react";

export const user = {
  firstName: "Harper",
  lastName: "Perez"
};
export function formatName(user) {
  console.log(user);
  return user.firstName + " " + user.lastName;
}

const element = <h1>Hello, {formatName(user)}!</h1>;
function GetGreeting() {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
export default GetGreeting;
// 问题：
/**1. App.js 留有一个问题可以尝试去解答 */
