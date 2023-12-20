import React, { useEffect, useState } from "react";
import WalletCommon from "./WalletCommon";
import WalletData from "../../utils/WalletCard.json";

function WalletCard() {
  const [wallet, setWallet] = useState([]);
  console.log(WalletData);
  useEffect(() => {
    setWallet(WalletData);
  }, []);
  return (
    <>
      {wallet.map((wallet, index) => (
        <div key={index}>
          <div className="mb-2  ">
            <WalletCommon
              balance={wallet.balance}
              status={wallet.status}
              receipt={wallet.receipt}
              clientName={wallet.clientName}
              createdAt={wallet.createdAt}
              approvedAt={wallet.approvedAt}
              approvedBy={wallet.approvedBy}
              orderId={wallet.orderId}
              assignedTo={wallet.assignedTo}
              assignedUPI={wallet.assignedUPI}
              clientUPI={wallet.clientUPI}
              utr={wallet.utr}
              customerUtr={wallet.customerUtr}
              website={wallet.website}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default WalletCard;
