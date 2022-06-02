import Botao from '../Button'
import Relogio from '../cronometro/Relogio'
import style from './Cronometro.module.scss'

export function Cronometro(){
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Choice one of these materials will start the timer</p>
            <div className={style.relogioWrapper}>
            <Relogio/>
            </div>
            <Botao>
                Start!
            </Botao>
        </div>
    )
}