import React from 'react';

/*
*
*
*
*
* */

const MainComponent = ({hobbies, name, age, available, image}) => {
    return (
        <div>
            <p>Nombre:{name}</p>
            <p>Edad:{age}</p>
            <p>Estado Civil:{available?'Solterón':'Con látigo'}</p>
            <h3>My hobbies</h3>
            <ul>
                {hobbies.map((hoobie, key)=>(
                    <li key={key}>{hoobie}</li>
                ))}
            </ul>


        </div>
    )
};

export default MainComponent;