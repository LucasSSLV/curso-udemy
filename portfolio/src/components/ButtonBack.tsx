"use client";
import { useRouter } from "next/navigation";

const BotaoVoltar = () => {
  const router = useRouter();

  const handleVoltarClick = () => {
    router.back();
  };

  return <button onClick={handleVoltarClick}>Voltar</button>;
};

export default BotaoVoltar;
