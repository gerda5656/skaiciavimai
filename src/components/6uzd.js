function Masyvas(){
    const masyvas = [5,10,15,20];

    function isvedimas(){
       return masyvas.join(', ');
    };
    function vid(){
       return masyvas.reduce((a, b) => a + b, 0) / masyvas.length;
    };
    function did(){
       return Math.max(...masyvas);
    };
    function lyg(){
        const lyginiai =[];
        for (let i = 0; i < masyvas.length; i++){
            if(masyvas[i]%2==0){
                lyginiai.push(masyvas[i]);
            }
        }
        return lyginiai.join(', ')
        }


    return (
        <div>

        <h3>Skaiciai: {isvedimas()}</h3>


        <div>
            <p>Vidurkis: {vid()}</p>
            <p>Didziausias: {did()}</p>
            <p>Lyginiai: {lyg()}</p>
        </div>
        </div>

    );
    
}

export default Masyvas;