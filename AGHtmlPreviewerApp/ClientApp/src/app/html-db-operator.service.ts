import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AGHtmlElement } from './models/models'

@Injectable({
  providedIn: 'root'
})
export class HtmlDbOperatorService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = document.getElementsByTagName('base')[0].href;
  }

  SaveHtmlData(AGHtmlElement: AGHtmlElement) {
    return this.http.put(this.url + `api/Values/SaveHtmlData`, AGHtmlElement);
  }

  SearchOriginal(testSample: string) {
    return this.http.post(this.url + `api/Values/SearchOriginal?testSample=${testSample}`, { testSample }, { responseType: 'text' });
  }

  Get(id: string) {
    return this.http.get(this.url + `api/Values/Get?id=${id}`, { responseType: 'text' });
  }
}
