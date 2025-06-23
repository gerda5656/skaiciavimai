const Paslaugos=()=>{
return (
    <>
    <Paslauga
    pavadinimas={'Kailio dazymas'}
    aprasymas={'Dazai is visu vaivorykstes spalvu'}/>
    <Paslauga
    pavadinimas={'Kirpimas'}
    aprasymas={'Sunu kirpimas pigiai'}/>      
    <Paslauga
    pavadinimas={'Nagu kirpimas'}
    aprasymas={'Nedraskys ranku'}/>      
    </>

)
}

export default Paslaugos

const Paslauga =(props)=>{
return (
    <div className="paslauga">
        <h3 className="paslauga-header">{props.pavadinimas}</h3>

        <p className="paslauga-aprasymas">{props.aprasymas}</p>
    </div>
)
}