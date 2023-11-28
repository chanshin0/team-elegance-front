interface ButtonProps {
  value?: string;
  classes?: string;
  filled?: Boolean;
  text?: string;
}

export default function Button({ value, classes, filled, text }: ButtonProps) {
  return (
    <div
      className={`w-48 h-9 flex items-center justify-center border border-orange-400 rounded-xl font-bold text-${
        text || "sm"
      }  ${filled ? "bg-orange-400 text-white" : "text-orange-400"} ${classes}`}
    >
      {value}
    </div>
  );
}
