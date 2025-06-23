// susikurkite ir prijunkite stiliaus failą, bent minimaliai pastiliuokite šių komponentų kodą

import './13uzd.css'

const Projektai = () => {
  let projektai = [
    { id: 1, pavadinimas: 'Batsiuvio web', tipas: 'tinklalapis', atlikimo_data: '2022-01-10' },
    { id: 2, pavadinimas: 'Maisto šefo receptų web', tipas: 'tinklalapis', atlikimo_data: '2022-05-28' },
    { id: 3, pavadinimas: 'Logotipas tapkių gamintojams', tipas: 'logotipas', atlikimo_data: '2022-04-25' },
  ]

  return (
    <div className='projektai'>
        <h2>Projektai</h2>
        <div className='projektu-list'>
            {projektai.map((projektas) => (
          <Projektas key={projektas.id} duomenys={projektas} />
        ))}
        </div>
    </div>
  )
}
export default Projektai

const Projektas = (props) => {
  return (
    <div>
    <h3>{props.duomenys.pavadinimas}</h3>
    <p>{props.duomenys.tipas}, {props.duomenys.atlikimo_data}</p>
    </div>
  )
}

