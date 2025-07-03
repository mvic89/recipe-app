export interface Ingredient {
    name: string;
    quantity: string;
}

export interface RecipeSteps {
    description: string;
}

export interface Recipe {
    id: number;
    title: string;
    summary: string;
    ingredients: Ingredient[];
    steps: RecipeSteps[];
    image: string;
}