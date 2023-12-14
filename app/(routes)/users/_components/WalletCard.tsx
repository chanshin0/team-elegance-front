import Button from "@/app/_components/ui/Button";
import Input from "@/app/_components/ui/Input";

interface WalletCardProps {
  balance: number;
}

export default function WalletCard({ balance }: WalletCardProps) {
  return (
    <article className="shadow-lg px-6 py-6 rounded-xl flex flex-col gap-6 ">
      <p className="text-sm font-bold">Elegance Cash</p>
      <div className="text-center text-2xl">{balance.toLocaleString()}원</div>
      <div className="flex items-center gap-2 justify-end">
        <Input type="number" classes="w-48" />
        <Button value="충전" filled={true} classes="w-32" />
      </div>
    </article>
  );
}
