import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {
  @Input() src: string;
  @Input() top = false;
  @Input() style: any;
  @Input() alt: string;
  constructor() { }

  ngOnInit() {
  }

}
