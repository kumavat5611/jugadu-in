import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss']
})
export class CoronaComponent implements OnInit {

  covidAdvice =
    [
      {
        info: 'COVID-19',
        heading: 'Exposing yourself to the sun or to temperatures higher than 25C degrees DOES NOT prevent ' +
          'the coronavirus disease (COVID-19)',
        detail: 'You can catch COVID-19, no matter how sunny or hot the weather is. Countries with hot weather' +
          ' have reported cases of COVID-19. To protect yourself,' +
          ' make sure you clean your hands frequently and thoroughly and avoid touching your eyes, mouth, and nose. ',
        source: 'WHO',
        image: 'assets/images/covid/co1.jpg'

      },
      {
        info: 'COVID-19',
        heading: 'You can recover from the coronavirus disease (COVID-19). Catching the new ' +
          'coronavirus DOES NOT mean you will have it for life.',
        detail: 'Most of the people who catch COVID-19 can recover and eliminate ' +
          'the virus from their bodies. If you catch the disease, make sure you treat your symptoms. ' +
          'If you have cough, fever, and difficulty breathing, seek medical care early' +
          ' – but call your health facility by telephone first. Most patients recover thanks to supportive care.',
        source: 'WHO',
        image: 'assets/images/covid/co2.jpg'

      },
      {
        info: 'COVID-19',
        heading: 'Being able to hold your breath for 10 seconds or more without coughing or feeling discomfort DOES NOT mean ' +
          'you are free from the coronavirus disease (COVID-19) or any other lung disease.',
        detail: 'The most common symptoms of COVID-19 are dry cough, tiredness and fever. ' +
          'Some people may develop more severe forms of the disease, such as pneumonia. ' +
          'The best way to confirm if you have  the virus producing COVID-19 disease is with a laboratory test.  ' +
          'You cannot confirm it with this breathing exercise, which can even be dangerous.',
        source: 'WHO',
        image: 'assets/images/covid/co3.jpg'
      },
      {
        info: 'COVID-19',
        heading: 'Drinking alcohol does not protect you against COVID-19 and can be dangerous',
        detail: 'Frequent or excessive alcohol consumption can increase your risk of health problems. ',
        source: 'WHO',
        image: 'assets/images/covid/co4.jpg'
      },
      {
        info: 'COVID-19',
        heading: 'COVID-19 virus can be transmitted in areas with hot and humid climates',
        detail: 'From the evidence so far, the COVID-19 virus can be transmitted in ALL AREAS, ' +
          'including areas with hot and humid weather. Regardless of climate, adopt protective ' +
          'measures if you live in, or travel to an area reporting COVID-19. The best way to protect yourself' +
          ' against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that ' +
          'may be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose.',
        source: 'WHO',
        image: 'assets/images/covid/co5.png'
      },
      {
        info: 'COVID-19',
        heading: 'Cold weather and snow CANNOT kill the new coronavirus.',
        detail: 'There is no reason to believe that cold weather can kill the new ' +
          'coronavirus or other diseases. The normal human body temperature remains ' +
          'around 36.5°C to 37°C, regardless of the external temperature or weather. ' +
          'The most effective way to protect yourself against the new coronavirus ' +
          'is by frequently cleaning your hands with alcohol-based hand rub or washing them with soap and water.',
        source: 'WHO',
        image: 'assets/images/covid/co6.png'
      },
      {
        info: 'COVID-19',
        heading: 'The new coronavirus CANNOT be transmitted through mosquito bites.',
        detail: 'To date there has been no information nor evidence to suggest that ' +
          'the new coronavirus could be transmitted by mosquitoes. The new coronavirus is a' +
          ' respiratory virus which spreads primarily through droplets generated when an ' +
          'infected person coughs or sneezes, or through droplets of saliva or discharge from the nose.' +
          ' To protect yourself, clean your hands frequently with an alcohol-based' +
          ' hand rub or wash them with soap and water. Also, avoid close contact with anyone who is coughing and sneezing.',
        source: 'WHO',
        image: 'assets/images/covid/co7.png'
      },
      {
        info: 'COVID-19',
        heading: 'Hand dryers ARE NOT effective in killing the 2019-nCoV',
        detail: 'Hand dryers are not effective in killing the 2019-nCoV.' +
          ' To protect yourself against the new coronavirus, you should frequently' +
          ' clean your hands with an alcohol-based hand rub or wash them with soap and water. ' +
          'Once your hands are cleaned, you should dry them thoroughly by using paper towels or a warm air dryer.',
        source: 'WHO',
        image: 'assets/images/covid/co8.png'
      }
    ];

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
      heading: 'Stay home if you feel unwell. If you have a fever, ' +
        'cough and difficulty breathing, seek medical attention and call in advance. ',
      image: '/assets/images/popular/corona4.png',
      count: '4'
    },
    {
      heading: 'Stay informed and follow advice given by your healthcare provider',
      image: '/assets/images/popular/corona7.jpg',
      count: '5'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
