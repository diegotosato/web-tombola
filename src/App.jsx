import { useEffect, useState } from "react";

function App() {

  let numbers = []
  for (let i = 1; i <= 90; i++) {
    const element = i;
    numbers.push(element)
  }

  const [extracted, setExtracted] = useState([])
  const [lastNumber, setLastNumber] = useState(null);




  function handleClick() {
    const remainingNumbers = numbers.filter((num) => !extracted.includes(num));

    if (extracted.length === numbers.length) {
      return
    }

    const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
    const number = remainingNumbers[randomIndex];

    setLastNumber(number);
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
