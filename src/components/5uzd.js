function Skaiciai(){
    const a = 5;
    const b = 10;
    const c = 15;

    function Didziausias(a,b,c){
       return Math.max(a,b,c);
    };
    function Maziausias(a,b,c){
       return Math.min(a,b,c);
    };
    function Vidurki(a,b,c){
       return (a+b+c)/3;
    };


    return (
        <div>

        <h3>Skaiciai:</h3>

        <p>{a}, {b}, {c}</p>

        <div>
            <p>Didziausias: {Didziausias(a,b,c)}</p>
            <p>Maziausias: {Maziausias(a,b,c)}</p>
            <p>Vidurkis: {Vidurki(a,b,c)}</p>
        </div>
        </div>

    );
    
}

export default Skaiciai;