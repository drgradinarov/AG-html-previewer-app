import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { HtmlDbOperatorService } from '../html-db-operator.service';
import { AGHtmlElement } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  private AGHtmlElement: AGHtmlElement;
  private htmlString: string;
  private sharableKey: string;
  private isContentEdited: boolean;

  constructor(private htmlDbOperator: HtmlDbOperatorService, private router: Router) {

    this.AGHtmlElement = new AGHtmlElement();
    this.AGHtmlElement.CreationDate = new Date();
    this.sharableKey = "-1";
    this.isContentEdited = false;
  }

  run() {
    
    this.htmlString = this.AGHtmlElement.Html;
  }

  save() {

    if (!this.AGHtmlElement.Html || this.AGHtmlElement.Html == "") {
      alert("You can not save an empty code example.");
      return;
    }

    if (this.AGHtmlElement.Html.length >= 5000) {
      alert("The entered html exceeds the limit of 5 MB.");
      return;
    }
    
    this.AGHtmlElement.LastEditDate = new Date();

    this.htmlDbOperator.SaveHtmlData(this.AGHtmlElement).subscribe(result => {
      if (result) {
        this.sharableKey = result.toString();
        this.isContentEdited = false;
        alert("Saved succesfully :)");
      }
    }, error => {
      alert("Error while saving :(");
    });

  }

  search() {

    if (!this.AGHtmlElement.Html || this.AGHtmlElement.Html == "") {
      alert("Can not perform a search with an empty code example.");
      return;
    }

    this.htmlDbOperator.SearchOriginal(this.AGHtmlElement.Html).subscribe(result => {
      if (result) {
        alert(result);
      }
    }, error => {
      alert("Error while searching :(");
    });
  }

  share() {

    if (this.sharableKey === "-1") {
      alert("Please, save your code before sharing it.")
      return;
    }

    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/fetch-data', `${this.sharableKey}`])
    );
    window.open(url, '_blank');
  }

  onSubmitHtml(event: any) {
    this.isContentEdited = true;
    return this.AGHtmlElement.Html;
  }
}
