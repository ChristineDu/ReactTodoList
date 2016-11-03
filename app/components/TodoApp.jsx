var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk dog'
        },{
          id: 2,
          text: 'watch movie'
        },{
          id: 3,
          text: 'clean room'
        },{
          id: 4,
          text: 'study'
        }
      ],
      showCompleted: false,
      searchText: ''
    };
  },
  handleAppTodo: function (text) {
    alert(text);
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
