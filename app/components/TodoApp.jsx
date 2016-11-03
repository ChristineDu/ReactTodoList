var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: uuid(),
          text: 'Walk dog',
          completed: true
        },{
          id: uuid(),
          text: 'watch movie',
          completed: false
        },{
          id: uuid(),
          text: 'clean room',
          completed: true
        },{
          id: uuid(),
          text: 'study',
          completed: false
        }
      ],
      showCompleted: false,
      searchText: ''
    };
  },
  handleAppTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
    this.setState({todos: updatedTodos});
  },
  handleSearch: function (showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){
    var {todos} = this.state;

    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAppTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
