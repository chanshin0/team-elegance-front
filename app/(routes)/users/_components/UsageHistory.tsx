import Image from "next/image";
import { UsageInfo } from "../[userId]/wallet/page";

interface UsageHistoryProps {
  usageList: UsageInfo[];
}

const UsageCard = ({ thumbnail, name, price }: UsageInfo) => {
  return (
    <div className="flex gap-3 border-orange-200 border-[2px] items-center rounded-lg">
      <Image src={thumbnail} alt="store thumbnail" className="flex-[0.2]" />
      <div className="flex-[0.7]">{name}</div>
      <div className="flex-[0.3]">{price.toLocaleString()}</div>
    </div>
  );
};

export default function UsageHistory({ usageList }: UsageHistoryProps) {
  return (
    <article className="flex flex-col gap-3 mt-3">
      <div className="font-bold">사용 내역</div>
      <div className="flex flex-col gap-2">
        {usageList.map((usage) => {
          return <UsageCard {...usage} key={usage.id} />;
        })}
      </div>
    </article>
  );
}
