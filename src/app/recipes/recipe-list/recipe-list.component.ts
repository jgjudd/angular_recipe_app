import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('Test Recipe', 'This is a test recipe', 'C:/Users/Justin/Desktop/offlineLectures/CourseProject1/Capture.png')
	];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
  	this.recipeWasSelected.emit(recipe);
  }
}
