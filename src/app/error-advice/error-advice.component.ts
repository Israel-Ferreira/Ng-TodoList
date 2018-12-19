import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-advice',
  templateUrl: './error-advice.component.html',
  styleUrls: ['./error-advice.component.css']
})
export class ErrorAdviceComponent implements OnInit {

  @Input() message = 'Deu Ruim';
  constructor() { }

  ngOnInit() {
  }

}
