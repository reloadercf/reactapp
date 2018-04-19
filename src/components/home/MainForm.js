import React from 'react';

const MainForm = ({addHobbie, handleHobbieText, newHoobie, handleText}) => {
    return (
        <div>
            <h2>Agrega Hobbies a tu lista</h2>
            <form action="." onSubmit={addHobbie}>
                <input type="text"
                       onChange={handleHobbieText}
                       value={newHoobie}/>
                <button type='submit'>Add</button>
            </form>
            <hr/>
            <h2>Edita tu info</h2>
            <form action=".">
                <input type="text"
                       name={"name"}
                       onChange={handleText}/>
                <input type={'number'}
                       name={'age'}
                       onChange={handleText}/>

                <button type={'submit'}>Save</button>
            </form>
        </div>
    )
};

export default MainForm;