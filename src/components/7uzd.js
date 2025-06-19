

function Sarasas(){
  const visi = [25, -8, 13, -42, 0, 7, -1];

  return (
    <div>
      <h3>Sarasas</h3>
      <ul style={{ listStyleType: 'none',paddingLeft: 0, marginLeft: 0}}>
        {visi.map((visi, index) => (
        <li key={index}>{ visi > 0 ? 'Teigiamas' : visi < 0 ? 'Neigiamas' : 'Nulis'}: {visi} 
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Sarasas;
