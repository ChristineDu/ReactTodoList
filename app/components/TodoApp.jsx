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
          text: 'Walk dog'
        },{
          id: uuid(),
          text: 'watch movie'
        },{
          id: uuid(),
          text: 'clean room'
        },{
          id: uuid(),
          text: 'study'
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
          text: text
        }
      ]
    });
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
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAppTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
