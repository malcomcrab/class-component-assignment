import { Component } from "react";
import Count from "./Count";


class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
      editInputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleEditInputChange(e) {
    this.setState((state) => ({
      ...state,
      editInputVal: e.target.value,
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
    this.setState((state) => ({
      ...state,
      editInputVal: t
    }))
    let currentInput = document.querySelector(`#${t}input`)
    if(currentInput.style.display != 'flex'){
      currentInput.style.display = 'flex'
    } else {
      currentInput.style.display = 'none'
    }
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
              <button 
                onClick={this.handleDelete} 
                value={todo}>Delete</button>
              <button
                onClick={this.handleEdit}
                value={todo}>Edit
              </button>
              <label htmlFor='edit-input'></label>
              <input 
                type='text'
                name='edit-input'
                id={todo + 'input'} 
                className='edit-input' 
                value={this.state.editInputVal} 
                onChange={this.handleEditInputChange} >
              </input>
              <button>Submit</button>
            </li>
           </>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;

