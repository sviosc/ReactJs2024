import Cabecalho from "./components/Cabecalho";

const App = () => {
  return (
    <div className="flex justify-center items-center bg-slate-900 w-full h-screen">
      <div className="flex flex-col bg-slate-800 w-7/12 h-full text-slate-200">
        <Cabecalho />
      </div>
    </div>
  );
};

export default App;
