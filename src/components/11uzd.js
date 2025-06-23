const Knygynas = () => {
  // susikurkite tris atskirus knygų objektus
  // su informacija
  const knyga1={
    pavadinimas:'Cezario moterys', 
    autorius:'Colleen Mccullough',
    kaina: 32.3,
  };
  const knyga2={
    pavadinimas:'Zuvedra', 
    autorius:'Dzonatanas Livingstonas',
    kaina: 9.1,
  };
  const knyga3={
    pavadinimas:'Valdovas', 
    autorius:'Niccolo Machiavelli',
    kaina: 17.2,
  };


  // kvieskite komponentą Knyga kelis kartus,
  // kiekvieną kartą perduodant skirtingus
  // knygų objektus
  return (
    <>
    <Knyga
    knyga={knyga1}/>
    <Knyga
    knyga={knyga2}/>
    <Knyga
    knyga={knyga3}/>
    </>
  )
}

export default Knygynas

// priima props (knygos objektą)
const Knyga = (props) => {
  // išspausdina visą turimą apie knygą informaciją,
  // taip pat išveda "knyga brangi" jei jos kaina
  // yra didesnė nei 30 eurų, "knyga kainuoja vidutiniškai",
  // jei jos kaina yra tarp 10 ir 30 eurų, bei
  // "knyga pigi", jei jos kaina iki 10 eurų
  let statusas = '';
  if (props.knyga.kaina<10){statusas='knyga pigi'};
  if (props.knyga.kaina>=10 && props.knyga.kaina<30){statusas='knyga kainuoja vidutiniškai'};
  if (props.knyga.kaina>=30){statusas='knyga brangi'};

  return (
    <div>
        <h3>Knyga: {props.knyga.pavadinimas}</h3>
        <p>Autorius: {props.knyga.autorius}, kaina: {props.knyga.kaina}, {statusas}</p>
    </div>
  )
}