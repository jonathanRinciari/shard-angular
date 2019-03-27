import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardSubtitleComponent } from './card-subtitle/card-subtitle.component';
import { CardTextComponent } from './card-text/card-text.component';
import { CardLinkComponent } from './card-link/card-link.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardImageOverlayComponent } from './card-image-overlay/card-image-overlay.component';
import { CardBodyComponent } from './card-body/card-body.component';

@NgModule({
  declarations: [CardComponent, CardTitleComponent, CardSubtitleComponent, CardTextComponent, CardLinkComponent, CardImageComponent, CardImageOverlayComponent, CardBodyComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
