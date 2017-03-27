import { Component, OnInit } from '@angular/core';
import { Deal } from './deal';
// We haven't defined these services yet
import { AuthService } from './auth.service';
import { DealService } from './deal.service';

@Component({
  selector: 'public-deals',
  templateUrl: 'public-deals.component.html',
  styleUrls: ['public-deals.component.css']
})
export class PublicDealsComponent implements OnInit {
  publicDeals: Deal[];

  // Note: We haven't implemented the Deal or Auth Services yet.
  constructor(
    private dealService: DealService
    ,private authService: AuthService
    ) {
  }
  // When this component is loaded, we'll call the dealService and get our public deals.
  ngOnInit(): void {
    this.dealService.getPublicDeals()
                .subscribe(
                    //For every response
                    (response) => {
                        /* Need to wait for response */
                        this.publicDeals = response;
                        console.log(this.publicDeals);
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