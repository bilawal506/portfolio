import Fahad from "@/components/Fahad";
import  Zain  from "@/components/Zain";
import Muhammad from "@/components/Muhammad";
import Muhammad1 from "@/components/Muhammad1";
export default function Home() {
  return (
    <>
    <table className="table-auto w-full">
  <thead>
    <tr>
      <th className="px-4 py-2 text-3xl font-bold">Zain</th>
      <th className="px-4 py-2 text-3xl font-bold">Fahad</th>
      <th className="px-4 py-2 text-3xl font-bold">Muhammad</th>
      <th className="px-4 py-2 text-3xl font-bold">Muhammad MD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2 text-center"><Zain /></td>
      <td className="border px-4 py-2 text-center"><Fahad /></td>
      <td className="border px-4 py-2 text-center"><Muhammad /></td>
      <td className="border px-4 py-2 text-center"><Muhammad1 /></td>
    </tr>
  </tbody>
</table>
    </>
  );
}