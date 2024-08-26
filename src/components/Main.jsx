import Cabecalho from "./Cabecalho";
import Section from "./Section";
import { objetivo, formacao, projetos } from "./assets/info.json";

const Content = () => {
  return (
    <div className="w-7/12 h-screen bg-zinc-800 text-zinc-200">
      <Cabecalho />
      <div className="flex flex-col">
        <Section
          titulo={objetivo.titulo}
          subTitulo={objetivo.subTitulo}
          conteudo={objetivo.conteudo}
        />
        <Section titulo={formacao.titulo} conteudo={formacao.conteudo} />
        <Section titulo={projetos.titulo} conteudo={projetos.conteudo} />
      </div>
    </div>
  );
};

export default Content;
