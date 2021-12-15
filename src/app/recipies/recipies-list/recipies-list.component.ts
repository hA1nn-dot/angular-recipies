import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipie.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css'],
})
export class RecipiesListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'Description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'
    ),
    new Recipe(
      'A test Recipe',
      'Description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
