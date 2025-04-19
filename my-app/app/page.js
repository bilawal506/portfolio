import Image from "next/image";
import Fahad from "@/components/Fahad";
import  Zain  from "@/components/Zain";
export default function Home() {
  return (
    <>
    <div>git
      <h1 className="text-3xl font-bold underline text-center">Zain's Game</h1>
      <Zain />
    </div>
    <div>
      <h1 className="text-3xl font-bold underline text-center">Fahad's Game</h1>
      <Fahad/>
      </div>
    </>
  );
}
