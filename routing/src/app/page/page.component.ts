import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  // To get the URL/Query params via Input Signal we need to enable
  // withComponentInputBinding() in provideRouter in app.config.ts
  pageNumber = input.required<string>();
  limit = input.required<string>();

  // input signal to get the route resolver data from pageResolver
  data = input.required<{ pageNumber: string; pageName: string }>();
}
