import { Component, OnInit, HostBinding } from '@angular/core';
import { propertiesList } from 'src/app/helpers/propertiesList';
import {
  elementAnimations,
  ANIMATION_ELEMENT,
} from 'src/app/animations/elementAnimations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [elementAnimations],
})

export class HomeComponent implements OnInit {
    ngOnInit(): void {}
}
