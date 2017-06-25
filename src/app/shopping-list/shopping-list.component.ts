import { Component, OnInit } from '@angular/core';
import { Ingredients } from' ../shared/ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients = [
      new ingredients('Meat', '500g')
  ]
  constructor() { }

  ngOnInit() {
  }

}
