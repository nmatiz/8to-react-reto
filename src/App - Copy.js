import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props)
    //se crea el arreglo
    this.state = {
      tasks: ['Sacar la ropa', 'Hacer la cama', 'Leer mucho'],
      task: ""
    }
  }
    //manejo del estado, cuando se adiciona una tarea
    showTasks(e){
      this.setState({
        task: e.target.value
      })
    }
//controla que se adicionen nuevos elementos
  addTask = (event) => {
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: ""
    })
   event.preventDefault();
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
          {this.state.tasks.map((act) => <li key={act}>{act}</li>)}
          </ul>
           {/*se adiciona el llamado al newTask, para que adicion los elementos al arreglo*/}
           <form onSubmit={this.addTask}>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" onChange={this.showTasks.bind(this)} value={this.state.task}/>
           </form>
        </div>
      </div>
    )
  }
}


export default App;