import Fahad from "@/components/Fahad";
import  Zain  from "@/components/Zain";
import Muhammad from "@/components/Muhammad";
export default function Home() {
  return (
    <>
    <div>
      <h1 className="text-3xl font-bold">Zain's Game</h1>
      <Zain />
    </div>
    <div>
      <h1 className="text-3xl font-bold">Fahad's Game</h1>
      <Fahad/>
    </div>
    <div>
      <h1 className="text-3xl font-bold">Muhammad's Game</h1>
      <Muhammad/>
    </div>
    </>
  );
}