import Image from "next/image"
import Link from "next/link"

export default function Footer() {

  new Date().getFullYear()


  return (
    <footer className='band'>
      <div className='wrapper'>
        <Image src='/images/logo-80-mask.png' alt='Clarkybox logo' width='80' height='80'></Image>
        <div className='text'>
          <span>This portfolio uses React & Next.JS—check out the code on <Link href='https://github.com/Revenciel/portfolio-2025/' target='_blank'>GitHub</Link>.</span>
          <span>
            ©{`${new Date().getFullYear()} Laura "Clarky" Clarkson`}
          </span>
        </div>
      </div>
    </footer>
  )
}