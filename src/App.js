import React, { Component } from 'react';

class App extends Component {
 constructor(props) {
   super(props)
   this.state = {
     task: "",
     alltasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"]
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleKeyPress = this.handleKeyPress.bind(this);
 }

 handleChange(e) {
   this.setState({
     task: e.target.value
   });
 }

 handleKeyPress(e) {
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
           {this.state.alltasks.map(alltask =>
             <li key={alltask}>{alltask}</li>
           )}
         </ul>
         <div>
           <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.state.task} />
         </div>
       </div>
     </div>
   )
 }
}

export default App;