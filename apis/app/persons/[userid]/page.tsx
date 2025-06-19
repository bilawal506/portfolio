import Link from "next/link";

async function getUser(id) {
  let data = await fetch(`http://localhost:3000/api/${id}`);
  data = await data.json()
  return data;
}

export default async function Page({params}) {
  const user = await getUser(params.userid);
  return (
    <>  
      <h1>User Details</h1>
      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
      <h3>Email: {user.email}</h3>
      <Link href={`/persons`}>Go back to Users List</Link>
    </>
  );
}