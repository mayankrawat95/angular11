import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{
    constructor(private dataStoragService: DataStorageService, private recipeService: RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        const recipes = this.recipeService.getRecipes();

        if(recipes.length === 0){
            return this.dataStoragService.fetchRecipes();

        }else{
            return recipes;
        }
    }
}