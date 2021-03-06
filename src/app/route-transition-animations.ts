import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
    transition('home <=> work, work <=> projects, projects <=> home', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ left: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
      query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
     ]),
     query(':enter', animateChild())
   ])]);