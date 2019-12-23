import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  newTodo: string;
  todoList: any;
  todoObj: any;

  constructor() {
    this.newTodo = "";
    this.todoList = [];
  }

  ngOnInit() {
  }

  addTodo(){
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false,
    }
    this.todoList.push(this.todoObj);
    this.newTodo = "";
    event.preventDefault();
  }

  removeTodo(index){
    this.todoList.splice(index, 1);
  }

  removeSeletedTodo(){
    for(var i=(this.todoList.length -1); i > -1; i--) {
      if(this.todoList[i].completed) {
        this.todoList.splice(i, 1);
      }
    }
  }

}
