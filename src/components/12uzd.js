const Zodeliai = () => {
  let vienas = ['Agurkai', 'Pomidorai', 'Paprikos', 'Cukinijos'];
  let du = ['Braskes', 'Melynes', 'Avietes', 'Silauoges'];

  return (
    <>
    <Zodelis
    masyvas={vienas}/>
    <Zodelis
    masyvas={du}/>
    </>
  )
}

export default Zodeliai

const Zodelis = (props) => {
  return (
    <table>
      {props.masyvas.map((zodis, index) => (
          <tr key={index}>
            <td>{zodis}:</td>
            <td>{zodis.length}</td>
          </tr>  ))}
    </table>
  )
}
