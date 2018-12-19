import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {

  listaTarefas: Array<string> = [];
  errou = false;
  mensagemErro = '';

  constructor() { }

  ngOnInit() {
  }

  adicionarTarefa(valor) {
    if (valor) {
      this.listaTarefas.push(valor);
    } else {
      this.mensagemErro = 'Tarefa Vazia; Tente Outra vez';
      this.errou = true;
    }
  }

}
