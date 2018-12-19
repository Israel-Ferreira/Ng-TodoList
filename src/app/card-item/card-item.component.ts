import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() tarefa: string;
  @Input() tarefaIndex: number;

  @Output() actions = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removerTarefa(id: number) {
    console.log(id);
    this.actions.emit(id);
  }

}
