
function App() {

  const numbers = []
  for (let i = 1; i <= 90; i++) {
    const element = i;
    numbers.push(element)
  }
  console.log(numbers);

  return (
    <>
      <h1 className="gochi-hand">Web-Tombola</h1>
      <h2 className="montserrat">Montserrat</h2>
      {
        numbers.map(num => (
          <div key={num}>{num}</div>
        ))
      }
    </>
  )
}

export default App
