import Image from "next/image";
import styles from "./errorPage.module.css";
import Link from "next/link";
import img from "./erro.png";
import { ArrowBack } from "../ArrowBack";

const ErrorPage = () => (
  <div className={styles.container}>
    <Image
      src={img}
      width={656}
      height={367}
      alt="Imagem de um robo sentado com o rosto apoiado na mão"
    />
    <h2 className={styles.title}>Opa! Um erro ocorreu.</h2>
    <p className={styles.description}>
      Não conseguimos carregar a página, volte para seguir navegando.{" "}
    </p>
    <Link href={"/"} className={styles.link}>Voltar ao feed <ArrowBack /></Link>
  </div>
);

export default ErrorPage;
