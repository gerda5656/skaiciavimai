const Zodziai = () => {
  let pirmas = 'Kriause'
  let antras = 'Obelis'
  let trecias = 'Medis'
  let ketvirtas = 'Kalnas'

  // turi iškviesti komponentą Zodis kelis kartus,
  // kiekvieną kartą jam perduodant vis skirtingą
  // kintamąjį (pirmas, antras, ...)
  return (
    <>
    <Zodis
    zodis={pirmas}/>
    <Zodis
    zodis={antras}/>
    <Zodis
    zodis={trecias}/>
    <Zodis
    zodis={ketvirtas}/>
    </>
  )
}

export default Zodziai

// šis komponentas turi priimti props
const Zodis = (props) => {
  // turi išvesti gautą žodį,
  // taip pat, turi apskaičiuoti ir parodyti jo
  // ilgį (simbolių kiekį)
  return (
    <div>Zodis: {props.zodis}, ilgis: {props.zodis.length}</div>
  )
}
