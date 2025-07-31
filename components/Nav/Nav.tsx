import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"><Image src='' alt='Home'/></Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/#illustration">Illustration</Link>
          </li>
        <li><Link href="/#about">About</Link></li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>


    </nav>
  );
}