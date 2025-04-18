import Image from "next/image";
import Fahad from "@/components/Fahad";
import  Zain  from "@/components/Zain";
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Home</h1>
      <Zain/>
      <Fahad/>
    </>
  );
}
