function Studentai(){
    const studentas1={
        vardas:'Petras', 
        amzius: 21,
        pazymiai:[10,9,8,5],
    };
    const studentas2={
        vardas:'Joana', 
        amzius: 19,
        pazymiai:[4,6,10,5],
    };

    function Vyresnis(){
        if(studentas1.amzius>studentas2.amzius){
            return studentas1.vardas
        }
            else{
                return studentas2.vardas;
            }
    };
    function Vidurkis(){
        const vidurkis1 = studentas1.pazymiai.reduce((a, b) => a + b, 0) / studentas1.pazymiai.length;
        const vidurkis2 = studentas2.pazymiai.reduce((a, b) => a + b, 0) / studentas2.pazymiai.length;
        if(vidurkis1>vidurkis2){
            return studentas2.vardas;
        }
            else{
                return studentas1.vardas;
            } 
    };

    return (
        <div>

        <h3>Studentai</h3>

        <div>
        <p>Vardas: {studentas1.vardas}</p>
        <p>Amzius: {studentas1.amzius}</p>
        <p>Pazymiai: {studentas1.pazymiai.join(', ')}</p>
        </div>

        <div>
        <p>Vardas: {studentas2.vardas}</p>
        <p>Amzius: {studentas2.amzius}</p>
        <p>Pazymiai: {studentas2.pazymiai.join(', ')}</p>
        </div>


        <div>
            <p>Vyresnis: {Vyresnis()}</p>
            <p>Mazesnis vidurkis: {Vidurkis()}</p>
        </div>
        </div>

    );
    
}

export default Studentai;