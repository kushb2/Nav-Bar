import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  lstRecipes: Recipe[] = [
    new Recipe('test recipe', 'taste me' , 'http://www.seriouseats.co' +
      'm/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabb' +
      'age-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg' )
  ];
  constructor() { }

}
