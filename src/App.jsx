import { useState } from "react";

function App() {

  // definisco l'array completo dei numeri riempiedolo con un ciclo for
  let numbers = []
  for (let i = 1; i <= 90; i++) {
    const element = i;
    numbers.push(element)
  }

  // definisco un array vuoto per contenere i numeri estratti
  const [extracted, setExtracted] = useState([])
  // definisco una variabile vuota dove tenere il numero estratto per stamparlo in pagina
  const [lastNumber, setLastNumber] = useState(null);




  function handleClick() {
    // creo un variabile che diventerà un array dove filtro i numeri originali e raccolgo tutti i numeri che non sono inclusi nell'array dei numeri estratti
    // quindi al primo click sarà vuoto perchè non ho numeri estratti
    const remainingNumbers = numbers.filter((num) => !extracted.includes(num));

    // se i numeri estratti sono tanti quanti i numeri originali il gioco è finito e interrompo la funzione
    if (extracted.length === numbers.length) {
      return
    }

    // creo una variabile per creare un numero random dipendente dalla lunghezza dell'array dei numeri estratti 
    const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
    // recupero il numero
    const number = remainingNumbers[randomIndex];

    //setto il numero estratto da vedere in pagina con il numero recuperato prima
    setLastNumber(number);

    //aggiorno l'array estratti con sè stesso e successivamente il numero recuperato, faccio un sort per ordinarlo in ordine crescente
    setExtracted([...extracted, number].sort(function (a, b) { return a - b }))
  }



  return (
    <>
      <header>
        <div className="container">
          <h1 className="gochi-hand title">Tombola</h1>
        </div>
      </header>

      <main>
        <div className="container d-flex">
          <div className="table-game d-flex">
            {
              numbers.map(num => (
                <div className={`token d-flex montserrat ${extracted.includes(num) ? 'num-extract' : ''}`} key={num}>
                  <strong>
                    {num}
                  </strong>
                </div>
              ))
            }
          </div>
          <div className="extract-table montserrat d-flex">

            <strong className="text-center">Ultimo numero estratto</strong>

            <div className="extract-number-square d-flex">
              <strong className="extract-number">{lastNumber}</strong>
            </div>

            <div className="separator"></div>

            <div className="btn btn-extract" onClick={handleClick}>
              <strong>Estrai</strong>
            </div>

            <div className="btn btn-stopgame" onClick={() => {
              setExtracted([])
              setLastNumber(null)
            }
            }>
              <strong>Termina Gioco</strong>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}

export default App
