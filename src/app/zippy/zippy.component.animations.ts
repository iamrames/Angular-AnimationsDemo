import { trigger, style, state, transition, animate } from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
    state('collapsed', style({
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    })),

    transition('collapsed => expanded', [
      animate('300ms ease-out', style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*'
      })),
      animate(1000, style({ opacity: 1}))
    ]),

    transition('expanded => collapsed', [
      animate('300ms ease-in')
    ])
]);
