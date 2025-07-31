import Image from "next/image";
import styles from "./Hero.module.scss";
//use styles.classname if using the css module

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={'wrapper ' + styles.wrapper}>
        <Image src='/images/logo.png' alt='Logo' width={400} height={400} />
        <div className={styles.text}>
          <h1>UX & Product Design</h1>
          <ul>
            <li>Design Systems</li>
            <li>UX Research</li>
            <li>Branding</li>
            <li>NextJS & CSS</li>
            <li>Illustration</li>
            <li>Typograpghy</li>
          </ul>
        </div>
      </div>

    </section>
  );
}