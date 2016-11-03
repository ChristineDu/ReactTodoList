var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
      ]
    };
  },
  handleAppTodo: function (text) {
    alert(text);
  },
  render: function(){
    var {todos} = this.state;

    return(
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAppTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
