import React from 'react';
import Botao from '../Button';
import style from './Formulario.module.scss'

class Formulario extends React.Component {

    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="Tarefa">
                       Add new Material for study
                    </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que deseja estudar" required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="Tempo">
                        Time
                    </label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" />
                </div>
                <Botao> Adicionar </Botao>
            </form>
        )
    }
}

export default Formulario;