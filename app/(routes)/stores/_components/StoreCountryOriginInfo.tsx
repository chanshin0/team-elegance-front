export default function StoreCountryOriginInfo({
  countryOrigin,
}: {
  countryOrigin: string;
}) {
  return (
    <article className="flex flex-col gap-1">
      <p className="font-semibold">원산지 표기</p>
      <p className="text-sm">{countryOrigin}</p>
    </article>
  );
}
