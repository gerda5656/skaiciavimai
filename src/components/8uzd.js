const prekes =[
    {id:1,kodas:123,pavadinimas:'Tusinukas',kaina:1.25,savikaina:0.5,kiekis:500},
    {id:2,kodas:456,pavadinimas:'Sasiuvinys',kaina:2,savikaina:0.8,kiekis:100},
    {id:3,kodas:789,pavadinimas:'Skaiciuotuvas',kaina:10,savikaina:2,kiekis:50},
    {id:4,kodas:741,pavadinimas:'Lapukai',kaina:1.5,savikaina:0.25,kiekis:200}
]

function Preke(){
    function brangiausiaPreke(){
    return prekes.reduce((max, preke) => (preke.kaina > max.kaina ? preke : max), prekes[0]);
  };

  function pigiausiaPreke(){
    return prekes.reduce((min, preke) => (preke.kaina < min.kaina ? preke : min), prekes[0]);
  };

  function kainuVidurkis(){
    const suma = prekes.reduce((acc, preke) => acc + preke.kaina, 0);
    return (suma / prekes.length).toFixed(1);
  };

  function galimasPelnas(preke){
    const pajamos = preke.kaina * preke.kiekis;
    const islaidos = preke.savikaina * preke.kiekis;
    return pajamos - islaidos;
  };

  return (
    <div>
      <h3>Prekių sąrašas</h3>
      {prekes.map((preke) => (
        <div key={preke.id} >
          <p>ID: {preke.id}</p>
          <p>Kodas: {preke.kodas}</p>
          <p>Pavadinimas: {preke.pavadinimas}</p>
          <p>Kaina (€): {preke.kaina}</p>
          <p>Savikaina (€): {preke.savikaina}</p>
          <p>Kiekis: {preke.kiekis}</p>
          <p>Galimas pelnas (€): {galimasPelnas(preke)}</p>
        </div>
      ))}
      <p>Brangiausia prekė: {brangiausiaPreke().pavadinimas} - {brangiausiaPreke().kaina} €</p>
      <p>Pigiausia prekė: {pigiausiaPreke().pavadinimas} - {pigiausiaPreke().kaina} €</p>
      <p>Kainų vidurkis: {kainuVidurkis()} €</p>
    </div>
  );
};

export default Preke;
