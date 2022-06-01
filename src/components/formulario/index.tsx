import React from 'react';
import Botao from '../Button';

class Formulario extends React.Component{

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="Tarefa">
                    Add material for study
                    </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="Oque deseja estudar" required/>
                </div>
                <div>
                <label htmlFor="Tempo">
                tempo
                </label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" placeholder="The time now is "/>
                </div>
                <Botao/>
            </form>
        )
    }
}

export default Formulario;