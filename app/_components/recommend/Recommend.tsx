import DropDown from "../ui/DropDown";

export default function Recommend() {
  const recommendCategories = ["양식", "중식", "한식", "분식"];

  return (
    <main
      className="
      flex font-bold items-center w-full justify-center gap-1
    "
    >
      <p>오늘은</p>
      <DropDown placeholder="" options={recommendCategories} />
      <p>이 땡겨요😋</p>
    </main>
  );
}
