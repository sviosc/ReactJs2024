const Section = (props) => {
  return (
    <div className="px-20">
      <h1 className="font-bold text-3xl mb-2 mt-6">{props.titulo}</h1>
      <h2 className="font-bold text-2xl mb-2">{props.subTitulo}</h2>
      <p className="text-lg">{props.conteudo}</p>
    </div>
  );
};

export default Section;
