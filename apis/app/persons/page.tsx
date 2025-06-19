import Link from "next/link";
async function getUser() {
  let data = await fetch(`http://localhost:3000/api`);
  data = await data.json()
  return data;
}

export default async function Page(){
    let user = await getUser();
    return(
        <>
        <h1>Users List</h1>
        <ul>
            {user.map((item) => (
                <li key={item.id}>
                    <Link href={`/persons/${item.id}`}>{item.name}</Link>
                </li>
            ))}
        </ul>
        <Link href={"/"}>Go back to Home Page</Link>
        </>
    )
}