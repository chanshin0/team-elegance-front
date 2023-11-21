export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="
    w-full h-full absolute top-0 z-[55] px-12 bg-white
    "
    >
      {children}
    </main>
  );
}
