import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface Joke {
  type: string;
  value: Value;
}

export interface Value {
  id: number;
  joke: string;
  categories: string[];
}

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.page.html',
  styleUrls: ['./fetch.page.scss'],
})
export class FetchPage implements OnInit {
  loading: HTMLIonLoadingElement;
  joke = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getJoke(event) {
    const apiUrl = 'http://api.icndb.com/jokes/random';

    return this.http
      .get<Joke>(apiUrl)
      .pipe(
        tap(({ value: { joke } }) => {
          this.joke = joke;
          event.target.complete();
        })
      )
      .subscribe();
  }
}
