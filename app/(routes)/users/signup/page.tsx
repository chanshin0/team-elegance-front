"use client";

import Button from "@/app/_components/ui/Button";
import Input from "@/app/_components/ui/Input";

interface FormValues {
  [key: string]: string;
}

export default function SignUp() {
  const labels = [
    "닉네임",
    "이름",
    "이메일",
    "핸드폰 번호",
    "비밀번호",
    "비밀번호 확인",
  ];

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 계산
    const formData = new FormData(e.currentTarget);
    const reqBody: { [key: string]: FormDataEntryValue } = {};
    labels.forEach((label) => {
      const value = formData.get(label);
      if (value !== null) {
        reqBody[label] = value;
      }
    });

    // api call here
  };

  return (
    <div
      className="py-6
    "
    >
      <form
        action="/users/register"
        method="POST"
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-6 px-8"
      >
        <div className="flex flex-col gap-1">
          {labels.map((label) => {
            return (
              <Input
                placeholder={label}
                label={label}
                key={label}
                isRequired={true}
              />
            );
          })}
        </div>
        <div className="flex gap-2">
          <input type="checkbox" className="rounded-md border-orange-300" />
          <p className="text-[#CECECE] text-xs ">
            약관동의어쩌고저쩌고 살이 너무 찔수있음에 동의하시겠습니까? 어쩌고
            저쩌고 통장에 남는 돈이 없을수있음에 동의하고 어쩌고 저쩌고
          </p>
        </div>
        <Button value="🍟 가입하기" classes="w-full" filled={true} />
      </form>
    </div>
  );
}
