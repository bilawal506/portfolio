import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Main Page</h1>
    <Link href="/persons">Go to Users List</Link>
    <h1>API Url: http://localhost:3000/api/-id-</h1>
    </>
  );
}
