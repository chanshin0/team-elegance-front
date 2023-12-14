import UsageHistory from "../../_components/UsageHistory";
import WalletCard from "../../_components/WalletCard";

export interface UsageInfo {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
}

export interface WalletInfo {
  balance: number;
  usageList: UsageInfo[];
}

export default function Wallet() {
  const walletInfo: WalletInfo = {
    balance: 40300,
    usageList: [
      {
        id: 1,
        thumbnail: "",
        name: "진짜존맛파스타집",
        price: 32000,
      },
      {
        id: 2,
        thumbnail: "",
        name: "살짝맛있는리조또집",
        price: 21000,
      },
      {
        id: 3,
        thumbnail: "",
        name: "피클만조지는수제피클집",
        price: 13000,
      },
    ],
  };

  return (
    <article className="flex flex-col gap-5 w-full max-w-lg">
      <p className="text-xl font-bold mt-3">Wallet</p>
      <WalletCard balance={walletInfo.balance} />
      <UsageHistory usageList={walletInfo.usageList} />
    </article>
  );
}
