import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {

  listaTarefas: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }


  adicionarTarefa(valor) {
    if (valor) {
      this.listaTarefas.push(valor);
    }
  }

  removerTarefa(id: number) {
    this.listaTarefas.splice(id, 1);
  }

}
