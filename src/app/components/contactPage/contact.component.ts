import {
    Component,
    OnInit,
    AfterViewInit,
    HostBinding,
    ViewChild,
    ElementRef,
  } from '@angular/core';
  import { ActivatedRoute, Params, Router } from '@angular/router';
  import { Property } from 'src/app/models/Property';
  import { propertiesList } from 'src/app/helpers/propertiesList';
  import {
    elementAnimations,
    ANIMATION_ELEMENT,
  } from 'src/app/animations/elementAnimations';
  import { gsap } from 'gsap';
  
  @Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [elementAnimations],
  })

export class ContactComponent {

}