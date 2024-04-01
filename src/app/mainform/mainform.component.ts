import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-mainform',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.css']
})

export class MainformComponent implements OnInit {

  constructor(private service: ApiserviceService){}
  ngOnInit(): void {
    this.service.getCitiesList().subscribe(data => {
      this.allCities = data as City[];
      console.log(data);
    });
  }
  selectedOrigin: any = "";
  selectedDestination: any = "";
  selectedCoin: any = "";
  selectedTrip: any = "";
  enabledButton: boolean = false;

  Trip = [
    "OneWay",
    "Round Trip"
  ]

  allCities: City[] = [];
  allJourneys: Journey[] = [];
  allJourneysBack: Journey[] = [];

  allCoins: Coin[] = [{
    Name: "USD",
    Description: "Dolar"
  },{
    Name: "COP",
    Description: "Peso Colombiano"
  },
  {
    Name: "MXN",
    Description: "Pesos Mexicanos"
  }];

  onChange() {

  }

  addClick() {
    console.log("Form Submitted")

    if (!this.selectedTrip || !this.selectedOrigin || !this.selectedCoin || !this.selectedDestination)
    {
        alert("There are missed data")
    }
    else
    {
      this.service.getJourneyList(this.selectedOrigin,this.selectedDestination,this.selectedCoin).subscribe(data => {
                  this.allJourneys = data as Journey[]
                  console.log(this.allJourneys);
                });
      if (this.selectedTrip === "Round Trip"){
        this.service.getJourneyList(this.selectedDestination,this.selectedOrigin,this.selectedCoin).subscribe(data => {
          this.allJourneysBack = data as Journey[]
          console.log(this.allJourneysBack);
        });
      }
      else{
        this.allJourneysBack = [];
      }
    }


  }
}

interface City {
  iata: string;
  airport: string;
}

interface Coin {
  Name: string;
  Description: string;
}

interface Journey {
  coin: string;
  destination: string;
  flights: Flight [];
  origin: string;
  price: number;
}

interface Flight {
  coin: string;
  destination: string;
  id: number;
  nameTransport: string;
  origin: string;
  price: number;
  priceCoin: number;
  transportId: number;
}
