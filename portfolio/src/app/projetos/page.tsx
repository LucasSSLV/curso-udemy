import React from "react";
import Image from "next/image";
import calcImc from "../../../public/assets/images/calcImc.png";
import climaAgora from "../../../public/assets/images/climaAgora.png";
import timeToMe from "../../../public/assets/images/timeToMe.png";
import jogoDaVelha from "../../../public/assets/images/jogoDaVelha.png";
import BotaoVoltar from "@/components/ButtonBack";

export default function Projetos() {
  return (
    <main>
      <div className="div-main">
        <p>aqui alguns os projetos que que desenvolvi</p>
      </div>
      <ul className="lista-projetos">
        <li className="calcImc">
          <a href="https://app-calc-imc.netlify.app/"></a>
          <Image
            src={calcImc}
            alt="foto de projeto calula imc"
            width={200}
            height={100}
          />
        </li>
        <li className="climaAgora">
          <a href="https://clima-agora-lss.netlify.app/"></a>
          <Image src={climaAgora} alt="" width={200} height={100} />
        </li>
        <li className="timeToMe">
          <a href="https://time-to-me.netlify.app/"></a>
          <Image src={timeToMe} alt="" width={200} height={100} />
        </li>{" "}
        <li className="jogoDaVelha">
          <a href="https://me-jogodavelha.netlify.app/"></a>
          <Image src={jogoDaVelha} alt="" width={200} height={100} />
        </li>
      </ul>
      <BotaoVoltar />
    </main>
  );
}
