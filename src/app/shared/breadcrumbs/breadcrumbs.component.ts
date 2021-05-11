import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  title: String = '';
  titleSubscription$: Subscription;

  constructor(private router: Router) {
    this.titleSubscription$ = this.getRouteParams().subscribe(({ title }) => {
      this.title = title;
      document.title = `Dashboard - ${title}`;
    });
  }

  ngOnDestroy(): void {
    this.titleSubscription$.unsubscribe();
  }

  getRouteParams() {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
