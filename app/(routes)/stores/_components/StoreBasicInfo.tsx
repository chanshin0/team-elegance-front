interface StoreBasicInfoProps {
  title: string;
  businessName: string;
  address: string;
  operatingTime: string;
  holiday: string;
}

export default function StoreBasicInfo({
  title,
  businessName,
  address,
  operatingTime,
  holiday,
}: StoreBasicInfoProps) {
  return (
    <article className="flex flex-col gap-1">
      <p className="font-semibold">{title}</p>
      <div className="flex text-sm">
        <span className="flex-[1] font-bold">상호명</span>
        <span className="flex-[3]">{businessName}</span>
      </div>
      <div className="flex text-sm">
        <span className="flex-[1] font-bold">주소</span>
        <span className="flex-[3]">{address}</span>
      </div>
      <div className="flex text-sm">
        <span className="flex-[1] font-bold">운영시간</span>
        <span className="flex-[3]">{operatingTime}</span>
      </div>
      <div className="flex text-sm">
        <span className="flex-[1] font-bold">휴무일</span>
        <span className="flex-[3]">{holiday}</span>
      </div>
    </article>
  );
}
