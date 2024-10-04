import {
    Component,
    OnInit,
    ChangeDetectorRef,
    OnDestroy,
    ViewChild,
    ElementRef,
  } from '@angular/core';
  import {
    trigger,
    transition,
    style,
    animate,
    state,
  } from '@angular/animations';
  import { Router } from '@angular/router';
  import { Subject } from 'rxjs';
  import { takeUntil } from 'rxjs/operators';
  
  import { gsap } from 'gsap';
import { menuList } from 'src/app/helpers/menuList';
import { propertiesList } from 'src/app/helpers/propertiesList';
  
  @Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
  })
  export class NavbarComponent implements OnInit, OnDestroy {
    @ViewChild('nav', { static: true }) nav: ElementRef<HTMLUListElement>;
    destroyed$ = new Subject<void>();
    menuList = menuList;
    propertiesList = propertiesList;
    menuLink: string;
  
    constructor(
      private cdr: ChangeDetectorRef,
      private router: Router
    ) {}
  
    ngOnInit() {
      this.initAnimations();
    }
  
    initAnimations() {
      gsap.from(this.nav.nativeElement, {
        duration: 0.5,
        opacity: 0,
        x: -20,
        delay: 0.3,
      });
    }
  
    ngOnDestroy() {
      this.destroyed$.next();
      this.destroyed$.complete();
    }
  }