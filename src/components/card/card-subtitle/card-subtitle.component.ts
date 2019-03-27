import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-subtitle',
  templateUrl: './card-subtitle.component.html',
  styleUrls: ['./card-subtitle.component.scss']
})
export class CardSubtitleComponent implements OnInit {
  @Input() subtitle: string;
  @Input() styles: any;
  constructor() { }

  ngOnInit() {
  }

}
