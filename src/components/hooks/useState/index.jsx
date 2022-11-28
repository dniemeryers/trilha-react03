import { useState } from 'react';


const Teste1 = () => {
    const[name, setName] = useState ('Pablo');


    const handleChangeName = () => {
        setName (prev => prev === 'Pablo' ? ' José' : 'Pablo')
    }

    return(
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>
    )
}

export {Teste1};