import { Component, OnInit, HostBinding } from '@angular/core';
import { propertiesList } from 'src/app/helpers/propertiesList';
import {
  elementAnimations,
  ANIMATION_ELEMENT,
} from 'src/app/animations/elementAnimations';

@Component({
  selector: 'rl-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  animations: [elementAnimations],
})
export class ListingsComponent implements OnInit {
  @HostBinding('@elementAnimations') animate: any;
  animationElement = ANIMATION_ELEMENT;

  propertiesList = propertiesList;

  constructor() {}

  ngOnInit(): void {}

  animationDone(event: any) {
    (event.element as HTMLDivElement).childNodes.forEach((item) => {
      const node = item as HTMLDivElement;
      if (node.classList && node.classList.contains('active')) {
        node.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}