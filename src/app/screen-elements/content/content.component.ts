import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'jarallax';
import { ContentSection } from 'src/app/models/content-section.model';
import { FeedCard } from 'src/app/models/feed-card.model';
declare var jarallax: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {

readonly contents : ContentSection[] = [

  {
    imgPath: 'assets/pictures/df3ef41518e24bbb90b8d844a9338d49.jpg',
    title : 'Arroces',
    extra : 'Explora el sabor de nuestros',
    path : ''
  },
  {
    imgPath: 'assets/pictures/dce6e998737340e99f5c9c0054eae8f9.jpg',
    title : 'Temporada',
    extra : 'Descubre nuestro menu de',
    path : ''
  },
  {
    imgPath: 'assets/pictures/f5a1f0be81e54fd0bd9991f47429de6b.jpg',
    title : 'Privilegiada',
    extra : 'Disfruta de una ubicacion',
    path : ''
  },
  {
    imgPath : '/assets/pictures/2d0cbf3c05d1497492415cd9e9bc5b75.jpg',
    title : 'Conocenos',
    extra : 'Acercate al restaurante y',
    path : ''
  }
];

public feeds : FeedCard[] = [{
  title : 'Carta de Desayunos',
  description: 'Porque no hay mejor forma de empezar el dia',
  source: 'assets/pictures/49823024e8464fdab3527c5f103dbbbd.jpg'
},
{
  title : 'Cocktail Time!',
  description: 'Pregunta por nuestra carta de Cocktails',
  source: 'assets/pictures/8335a01b2d174316bd0f214d37ca8634.jpg'
},
{
  title : 'Winter is Coming',
  description: 'El verano se va, pero nosotros seguimos',
  source: 'assets/pictures/90f0ce77784d4836877a723006197daa.jpg'
},
{
  title : 'Desayunos',
  description: 'Nuevos Desayunos',
  source: 'assets/pictures/49823024e8464fdab3527c5f103dbbbd.jpg'
}]

constructor() {}

  ngAfterViewInit(): void {}

  public ngOnInit(): void {}

}
