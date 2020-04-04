import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  covidAdvice =
    [
      {info: 'COVID-19',
        heading: 'Exposing yourself to the sun or to temperatures higher than 25C degrees DOES NOT prevent ' +
          'the coronavirus disease (COVID-19)',
        source: 'WHO',
        image: 'assets/images/covid/co1.jpg'

      },
      {info: 'COVID-19',
        heading: 'You can recover from the coronavirus disease (COVID-19). Catching the new ' +
          'coronavirus DOES NOT mean you will have it for life.',
        source: 'WHO',
        image: 'assets/images/covid/co2.jpg'

      },
      {info: 'COVID-19',
        heading: 'Being able to hold your breath for 10 seconds or more without coughing or feeling discomfort DOES NOT mean ' +
          'you are free from the coronavirus disease (COVID-19) or any other lung disease.',
        source: 'WHO',
        image: 'assets/images/covid/co3.jpg'
      },
      {info: 'COVID-19',
        heading: 'Drinking alcohol does not protect you against COVID-19 and can be dangerous',
        source: 'WHO',
        image: 'assets/images/covid/co4.jpg'
      },
      {info: 'COVID-19',
        heading: 'COVID-19 virus can be transmitted in areas with hot and humid climates',
        source: 'WHO',
        image: 'assets/images/covid/co5.png'
      },
      {
        info: 'COVID-19',
        heading: 'Cold weather and snow CANNOT kill the new coronavirus.',
        source: 'WHO',
        image: 'assets/images/covid/co6.png'
      },
      {
        info: 'COVID-19',
        heading: 'The new coronavirus CANNOT be transmitted through mosquito bites.',
        source: 'WHO',
        image: 'assets/images/covid/co7.png'
      },
      {
        info: 'COVID-19',
        heading: 'Hand dryers are not effective in killing the 2019-nCoV',
        source: 'WHO',
        image: 'assets/images/covid/co8.png'
      }
    ]

  constructor() { }

  ngOnInit() {
  }


}
