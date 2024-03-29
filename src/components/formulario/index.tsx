import React from "react";
import Botao from "../Button";
import style from "./Formulario.module.scss";

class Formulario extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00",
  };
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="Tarefa">Add new Material for study</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            }
            placeholder="What you want to study"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="Tempo">Time</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao> Add </Botao>
      </form>
    );
  }
}

export default Formulario;
