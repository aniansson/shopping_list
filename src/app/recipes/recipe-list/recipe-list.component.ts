import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Meatballs', 'Homemade meatballs with mashed potatoes and a delicious sauce',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Koettbullar_stockholm2006.jpg/800px-Koettbullar_stockholm2006.jpg'),
        new Recipe('Pizza', 'Fresh, homemade and crispy Pizza, right from the oven!',
            'https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg')
    ];

    constructor() { }


}