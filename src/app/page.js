import Header from "@/components/ui/header";
import ProtfolioValue from "@/components/ui/protfolioValue";
import Sidebar from "@/components/ui/sidebar";
import TokensNftTrans from "@/components/ui/tokensNftTrans";
import Image from "next/image";

export default function Home() {
  return (
    <div className='flex '>
      {/* <Sidebar /> */}
      <div className=' '>
        <Header />
        <ProtfolioValue />
        <TokensNftTrans />
      </div>
    </div>
  );
}
