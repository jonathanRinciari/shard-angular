import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.scss']
})
export class CardTextComponent implements OnInit {
  @Input() text: string;
  @Input() styles: any;
  constructor() { }

  ngOnInit() {
  }

}
