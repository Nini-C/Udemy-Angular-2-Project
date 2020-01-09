import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Prawn Pasta',
      'Tomato sauce mixed with white sauce',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('prawns', 5)
      ]
    ),
    new Recipe(
      'Burger',
      'Juicy beef with fresh vegetables',
      'https://cdn.pixabay.com/photo/2019/05/17/09/04/burger-4209189_960_720.jpg',
      [
        new Ingredient('French Fries', 30),
        new Ingredient('Beef', 1),
        new Ingredient('Bread', 2)
      ]
    )
  ];

  constructor(private shoppinglistService: ShoppingListService) { }

  getRecipes() {
    // .slice() = simply return a copy of the recipes array
    return this.recipes.slice();
  }

  addIngredientToShoppinglist(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

}
