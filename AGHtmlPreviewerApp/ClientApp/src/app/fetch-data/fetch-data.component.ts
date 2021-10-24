import { Component, OnInit } from '@angular/core';
import { HtmlDbOperatorService } from '../html-db-operator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  private htmlString: string;
  private key: string;
  private errorMessage: string;

  constructor(private _Activatedroute: ActivatedRoute, private htmlDbOperator: HtmlDbOperatorService) {

    this.key = this._Activatedroute.snapshot.paramMap.get("id");
    this.errorMessage = "";
  }

  ngOnInit() {

    if (this.key) {

      this.htmlDbOperator.Get(this.key).subscribe(result => {
        debugger
        if (result.length > 0) {
          this.htmlString = result;
        }
        else {
          this.errorMessage = "No data was found in DB.";
        }

      }, error => {
        debugger;
        alert(error.statusText)
      });
    }
    else {
      this.errorMessage = "The no key was provided for the DB operation."
    }
  }
}


