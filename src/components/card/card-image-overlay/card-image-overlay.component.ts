import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-image-overlay',
  templateUrl: './card-image-overlay.component.html',
  styleUrls: ['./card-image-overlay.component.scss']
})
export class CardImageOverlayComponent implements OnInit {
  @Input() cardBody;
  @Input() styles;
  constructor() { }

  ngOnInit() {

  }

}
