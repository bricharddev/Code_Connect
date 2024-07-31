import Image from "next/image";
import styles from "./Page404.module.css";
import Link from "next/link";
import img from "./404.png";
import { ArrowBack } from "../ArrowBack";

const Page404 = () => (
  <div className={styles.container}>
    <Image
      src={img}
      width={656}
      height={367}
      alt="Imagem de um triste"
    />
    <h2 className={styles.title}>Ops! Página não encontra.</h2>
    <p className={styles.description}>
      Você pode voltar ao feed e continuar buscando projetos incríveis.{" "}
    </p>
    <Link href={"/"} className={styles.link}>
      Voltar ao feed <ArrowBack />
    </Link>
  </div>
);

export default Page404;
