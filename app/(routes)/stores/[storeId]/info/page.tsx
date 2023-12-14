"use client";

import { useParams } from "next/navigation";

import StoreBasicInfo from "../../_components/StoreBasicInfo";
import StoreCountryOriginInfo from "../../_components/StoreCountryOriginInfo";

export interface StoreInfoProps {
  title: string;
  businessName: string;
  address: string;
  operatingTime: string;
  holiday: string;
  countryOrigin: string;
  storeMessage: string;
}

export interface StoreCountryOriginInfoProps {}

export default function StoreInfo() {
  const storeId = useParams().storeId;

  const storeInfoFromServer: StoreInfoProps = {
    title: "개존맛파스타지",
    businessName: "사실은 덜 맛있는 집",
    address: "서울특별시 중랑구 어쩌고동 321-1동 2층",
    operatingTime:
      "평일 - 오전 9:30 ~ 오후 10:00 \n 토요일 - 오전 9:30 ~ 오후 10:00",
    holiday: "매주 일요일",
    countryOrigin:
      "돼지(국내산), 쌀(국내산), 야채(국내산), 생선(베트남) 고추가루 (국내산 중국산 혼용)",
    storeMessage: "",
  };

  const { countryOrigin, storeMessage, ...basicInfo } = storeInfoFromServer;
  console.log(countryOrigin);
  return (
    <section
      className="flex flex-col gap-6
    "
    >
      <p className="text-lg font-bold text-center mt-3">가게정보</p>
      <StoreBasicInfo {...basicInfo} />
      <StoreCountryOriginInfo countryOrigin={countryOrigin} />
    </section>
  );
}
