import Cabecalho from "./Cabecalho";
import Section from "./Section";
import { objetivo, formacao, projetos, experiencia } from "./assets/info.json";

const Content = () => {
  return (
    <div className="flex flex-col bg-zinc-800 w-7/12 h-fit-content text-white p-5">
      <Cabecalho />
      <div className="flex flex-col">
        <Section
          titulo={objetivo.titulo}
          subTitulo={objetivo.subTitulo}
          conteudo={objetivo.conteudo}
        />

        <Section titulo={formacao.titulo} conteudo={formacao.conteudo} />

        <Section titulo={projetos.titulo} conteudo={projetos.conteudo[0]} />
        <Section conteudo={projetos.conteudo[1]} />

        <Section
          titulo={experiencia.titulo}
          conteudo={experiencia.conteudo[0]}
        />
        <Section conteudo={experiencia.conteudo[1]} />
      </div>
    </div>
  );
};

export default Content;
