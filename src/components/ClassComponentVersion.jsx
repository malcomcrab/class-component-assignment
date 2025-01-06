import { Component } from "react";
import Count from "./Count";


class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(e) {
    e.preventDefault();
    const filtered = this.state.todos.filter((todo) => todo !== e.target.value)
    this.setState((state) => ({
    todos: filtered
    }))
}

  handleEdit(e){
    e.preventDefault();
    const t = e.target.value
    let currentInput = document.querySelector(`#${t}input`)
    currentInput.style.display = 'flex'
  }


  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <Count word={this.state.todos.length}/>
        <ul>
          {this.state.todos.map((todo) => (
            <>
            <li key={todo}>{todo} 
              <button onClick={this.handleDelete} value={todo}>Delete</button>
              <button onClick={this.handleEdit} value={todo}>Edit</button>
              <input id={todo + 'input'} className='edit-input' value={todo}></input>
            </li>
           </>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;

