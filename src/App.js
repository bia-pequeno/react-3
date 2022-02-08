 import React, {Component} from 'react'

class menssage extends Component{
  state = {
    nome: "Beatriz",
    idade: 17,
    comidafavorita: "pizza",
    musicas: [
      {
        musica1: "moment - Vierre Clound"
      },
      {
        musica2: "Lover Of Mine - 5 Seconds of Summer"
      },
      {
        musica3: "Whisky a Go-Go - Roupa nova"
      }
    ]
  }
  render(){
    return(
      <div>
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>tenho {this.state.idade} anos</h2>
        <h3>e minha comida favorita é {this.state.comidafavorita}</h3>
        <ul>
          <li>{this.state.musicas[0].musica1}</li>
          <li>{this.state.musicas[1].musica2}</li>
          <li>{this.state.musicas[2].musica3}</li>
        </ul>
      </div>
    )
  }
}

export default menssage