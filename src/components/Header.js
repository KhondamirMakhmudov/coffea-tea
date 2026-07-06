import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#211C15]/10 bg-[#F5F0E6]/90 backdrop-blur-md">
      <div className="mx-auto flex h-17.5 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-serif text-xl italic tracking-tight text-[#211C15]"
        >
          Кофе и Чай
        </Link>
      </div>
    </header>
  );
}
