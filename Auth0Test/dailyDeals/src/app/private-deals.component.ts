import { Component, OnInit } from '@angular/core';
import { Deal } from './deal';
// We haven't defined these services yet
import { AuthService } from './auth.service';
import { DealService } from './deal.service';

@Component({
  selector: 'private-deals',
  templateUrl: 'private-deals.component.html',
  styleUrls: ['private-deals.component.css']
})
export class PrivateDealsComponent implements OnInit {
  privateDeals: Deal[];

  // Note: We haven't implemented the Deal or Auth Services yet.
  constructor(
    private dealService: DealService
    ,private authService: AuthService
    ) {
  }
  // When this component is loaded, we'll call the dealService and get our private deals.
  ngOnInit(): void {
    this.dealService.getPrivateDeals()
                .subscribe(
                    //For every response
                    (response) => {
                        /* Need to wait for response */
                        this.privateDeals = response;
                        console.log(this.privateDeals);
                    },
                    //On Error
                    (err) => {
                            console.log("ERROR in component. save to db: "+ err);
                    },
                    //When observable closes
                    () => {
                        console.log("Completed");
                    })
  }

  purchase(item){
    alert("You bought the: " + item.name);
  }
}