import { useState, useEffect } from 'react';


const Teste2 = () => {
    const[name, setName] = useState ('Pablo');


    const handleChangeName = () => {
        setName (prev => prev === 'Pablo' ? ' José' : 'Pablo')
    }

    useEffect(() => {
       alert ('rebderizei');
    },[]);



    return(
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>
    )
}

export {Teste2};