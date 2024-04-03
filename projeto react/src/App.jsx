

function App() {
  const nome = "Sanderson";

  function retornaNome() {
    return nome;
  } 

  const pessoa = {
    nome: "Maria"
  }

  let estaDeDia = true;
    
  return(
    <>
    <h1>Olá, {retornaNome()}</h1>
    <h2>Subtítulo</h2>
    {estaDeDia ? 'Bom dia!' : 'Boa tarde!'}
    <p>Olá {pessoa.nome}</p>
    </>
  )
}

export default App
