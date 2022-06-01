import React from 'react';
import Botao from '../Button';
import './style.scss'

class Formulario extends React.Component{

    render() {
        return (
            <form className='novaTarefa'>
                <div className='inputContainer'>
                    <label htmlFor="Tarefa">
                   Material for study
                    </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="Oque deseja estudar" required/>
                </div>
                <div className='inputContainer'>
                <label htmlFor="Tempo">
                tempo
                </label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00"/>
                </div>
                <Botao/>
            </form>
        )
    }
}

export default Formulario;