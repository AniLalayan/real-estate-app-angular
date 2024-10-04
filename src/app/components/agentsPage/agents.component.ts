import {
    Component,
  } from '@angular/core';
  import {
    elementAnimations,
    ANIMATION_ELEMENT,
  } from 'src/app/animations/elementAnimations';
  import { gsap } from 'gsap';
import { agentsList } from 'src/app/helpers/agents';
  
  
  @Component({
    selector: 'agents',
    templateUrl: './agents.component.html',
    styleUrls: ['./agents.component.scss'],
    animations: [elementAnimations],
  })

export class AgentsComponent {

  agentsList = agentsList;

}