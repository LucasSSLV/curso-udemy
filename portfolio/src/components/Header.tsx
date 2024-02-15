import React from "react";
import Title from "./Title";
import Image from "next/image";
import Link from "next/link";
import "../styles/header.css";
import image from "../../public/assets/images/me.png";

export default function Header() {
  return (
    <div className="div-header">
      <nav className="div-nav">
        <Link className="nav-link" href="/projetos">
          Projetos
        </Link>
        <Link className="nav-link" href="/about">
          Sobre
        </Link>
        <Link className="nav-link" href={"/contatos"}>
          Fale comigo
        </Link>
      </nav>
      <div className="oi-foto">
        <div className="hello">
          <Title name="Hello World!" />
        </div>
        <Image
          className="div-imagem"
          src={image}
          alt="foto minha cartoonizada"
        />
      </div>
    </div>
  );
}
