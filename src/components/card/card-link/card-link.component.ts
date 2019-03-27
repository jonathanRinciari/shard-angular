import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.scss']
})
export class CardLinkComponent implements OnInit {
  @Input() url: string;
  @Input() styles: any;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
