import ProtfolioValue from "@/components/ui/protfolioValue";
import TokensNftTrans from "@/components/ui/tokensNftTrans";
import React from "react";

const Dashbord = () => {
  return (
    <div className='px-2 lg:px-6 '>
      <ProtfolioValue />
      <TokensNftTrans />
    </div>
  );
};

export default Dashbord;
