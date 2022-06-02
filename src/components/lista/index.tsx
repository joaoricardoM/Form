import React from 'react';
import style from './lista.module.scss'
import Item from './item'

function Lista() {
    const tarefa = [{
        tarefa:'react',
        tempo: '02:00:00'
    }, {
        tarefa:'Scripts',
        tempo: '01:00:00'
    },{
        tarefa:'Typecripts',
        tempo: '01:00:00'
    }]

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudo do dia </h2>
            <ul>
                {tarefa.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />
                ) )}
            </ul>
        </aside>
    )
}

export default Lista;