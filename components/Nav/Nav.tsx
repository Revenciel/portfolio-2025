import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/#Projects">Projects</Link>
      <Link href="/#Contact">Contact</Link>
    </nav>
  );
}