import {Recipe} from './recipe.model'

import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService{
recipesChanged = new Subject<Recipe[]>();
 

 /* private  recipes : Recipe[] = [
        new Recipe(' Pizza',
        'Thin Crust Cheez burst Pizza',
        'https://icon2.cleanpng.com/20180302/xlw/kisspng-pizza-pizza-chophouse-restaurant-italian-cuisine-potato-pizza-5a9926b1178071.2448808115199863530963.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
    
        new Recipe('Burger',
        'Double Patty Chicken Burger',
        'https://png.pngtree.com/element_our/sm/20180226/sm_5a938dbfae919.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
      ];
      */

      private recipes: Recipe[] = [];

      constructor(private slService: ShoppingListService){}

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipeByID(index: number){
        return this.recipes[index];
      }

      addIngredientsToSL(ingredients: Ingredient[]){
        this.slService.addIng(ingredients)
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())

      }

      deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice())
      }
}