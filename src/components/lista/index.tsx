import React, { useState } from 'react';
import style from './lista.module.scss'
import Item from './item'

function Lista() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'Spring Boot',
        tempo: '02:00:00'
    }, {
        tarefa: 'Scripts',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typecript',
        tempo: '01:00:00'
    }]);

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() =>  setTarefas([...tarefas, { tarefa: "Estudar Estudo", tempo: "05:00:00" }])}> Study of the day </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;