import React, { Component } from 'react';
import { connect } from 'react-redux';

/*function App() {
  return (
    <div className="App">
      Olá!
    </div>
  );
}*/

class App extends Component{

  constructor(props){
    super(props);
    this.state = {input: ''};
  }

  handleChange = event => {
    this.setState({input: event.target.value});
  }

  handleClick = () => {
    console.log('adicionando', this.state.input);
    this.props.addTodo(this.state.input)
    this.setState({input: ''});
  }
  
  render(){
    const { todos } = this.props;
    return(
      <div className="App">
        <ul>
          {
            todos.map(todo => (
              <li key={todo.id}>{todo.desc}</li>
            ))
          }
        </ul>
        <input onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (desc) => {dispatch({type: 'ADD_TODO', desc})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
