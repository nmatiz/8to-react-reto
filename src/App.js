import React, { Component } from 'react';

class App extends Component {
 constructor(props) {
   super(props)
   this.state = {
     task: "",
     alltasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"]
   };
   //se definen variables para cada una de las funciones
   this.cambioEstado = this.cambioEstado.bind(this);
   this.controlTeclado = this.controlTeclado.bind(this);
 }
//funcion para detectar el cambio de estado de 'task', el evento (e), controla el momento que cambia
 cambioEstado(e) {
   this.setState({
     task: e.target.value
   });
 }
//funcion para almacenar la nueva propiedad, una ves se detecta el enter en el evento:   "e.key === 'Enter'", se almacena con el concatpara ir almacenando los estados de alltasks
 controlTeclado(e) {
   if (e.key === 'Enter') {
     this.setState({
       alltasks: this.state.alltasks.concat(this.state.task),
       task: ''
     });
   }
 }

 render() {
   return (
     <div className="wrapper">
       <div className="list">
         <h3>Por hacer:</h3>
         <ul className="todo">
{/*Se puede manejar con indice o sin indice todos los elementos del constructor.   Con el map se recorre el arreglo */}
{/*la etiqueta <li> renderiza el map del elemento*/}
        {/*{this.state.alltasks.map(alltask => <li key={alltask}>{alltask}</li>*/}
           {this.state.alltasks.map((alltask, index) => <li key={index}>{alltask}</li>
           )}
         </ul>
         <div>
{/*Con el onChange detectamos si cambia de estado el elemento. */}
{/*Con el onKeyPress detectamos si hubo un evento como 'enter' en este caso, y onClick si hubo un 'click' en el campo de entrada*/}
{/*Con el value controlamos el estado actual del elemento*/}
           <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" onChange={this.cambioEstado} onKeyPress={this.controlTeclado} value={this.state.task} />
         </div>
       </div>
     </div>
   )
 }
}

export default App;