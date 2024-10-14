import Image from "next/image";
import Link from "next/link";
import logo from "../../public/cyber-jungle-logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src={logo} height={65} alt="logo" />
      <span className="text-purple-200 font-semibold">Cyber Jungle</span>
    </Link>
  );
}
