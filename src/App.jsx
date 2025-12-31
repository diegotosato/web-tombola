
function App() {

  const numbers = []
  for (let i = 1; i <= 90; i++) {
    const element = i;
    numbers.push(element)
  }
  console.log(numbers);

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
                <div className="token d-flex montserrat" key={num}>
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
              <strong className="extract-number">{numbers[80]}</strong>
            </div>
            <div className="separator"></div>
            <div className="btn btn-extract"><strong>Estrai</strong></div>
            <div className="btn btn-stopgame"><strong>Termina Gioco</strong></div>
          </div>
        </div>
      </main >
    </>
  )
}

export default App
