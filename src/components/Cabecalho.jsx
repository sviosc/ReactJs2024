import { Phone, Mail } from "lucide-react";
import Divisor from "./Divisor";

const Cabecalho = () => {
  let cabecalho = {
    foto: "https://avatars.githubusercontent.com/u/145848344?s=400&u=96953754b5377657f751b135be42ab8f1e6f4a48&v=4",
    nome: "Vinícios Ricardo Ribeiro Dias",
    funcao: "Backend developer",
    telefone: "(15) 99177-3372",
    email: "vinicios@gmail.com",
  };
  return (
    <div className="flex flex-col items-center w-full mt-8">
      <div className="flex flex-row">
        <img
          src={cabecalho.foto}
          alt="Foto do dono do currículo"
          className="max-h-44 max-w-44 border-2 rounded-xl"
        />
        <div className="ml-4 flex flex-col justify-center">
          <h1 className="font-extrabold text-4xl">{cabecalho.nome}</h1>
          <h2 className="font-bold text-2xl">{cabecalho.funcao}</h2>
        </div>
      </div>
      <Divisor />
      <div className="flex flex-row items-center">
        <Phone color="#FFF" size={32} className="me-2" />
        <p className="mr-4 text-xl font-semibold">
          Telefone: {cabecalho.telefone}
        </p>
        <Mail color="#FFF" size={32} className="ms-10 me-2" />
        <p className="mr-4 text-xl font-semibold">Email: {cabecalho.email}</p>
      </div>
      <Divisor />
    </div>
  );
};

export default Cabecalho;
