import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-corona-case',
  templateUrl: './corona-case.component.html',
  styleUrls: ['./corona-case.component.scss']
})
export class CoronaCaseComponent implements OnInit {

  totalCase: string;
  totalDeath: string;
  totalRecovered: string;
  caseByCountry: string;
  totalWorldAllCase: string;
  PopularPosts = [
    {
      heading: 'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.',
      image: '/assets/images/popular/corona1.jpeg',
      count: '1'
    },
    {
      heading: 'Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.',
      image: '/assets/images/popular/corona2.jpeg',
      count: '2'
    },
    {
      heading: 'Avoid hand touching, hands can transfer the virus to your eyes, ' +
        'nose or mouth. From there, the virus can enter your body and can make you sick.',
      image: '/assets/images/popular/corona6.jpg',
      count: '3'
    },
    {
      heading: 'Stay home if you feel unwell. If you have a fever, cough ' +
        'and difficulty breathing, seek medical attention and call in advance. ',
      image: '/assets/images/popular/corona4.png',
      count: '4'
    },
    {
      heading: 'Stay informed and follow advice given by your healthcare provider',
      image: '/assets/images/popular/corona7.jpg',
      count: '5'
    }
  ];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.GetAllReports().then((response) => {
      response.json().then((data) => {
        const reports = data.reports[0];
        this.totalCase = this.numberWithCommas(reports.cases)
        this.totalDeath =  this.numberWithCommas(reports.deaths);
        this.totalRecovered = this.numberWithCommas(reports.recovered);
        this.caseByCountry = data.reports[0].table[0];
        this.totalWorldAllCase = data.reports[0].table[0][0];
      });
    }).catch();
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }


}
