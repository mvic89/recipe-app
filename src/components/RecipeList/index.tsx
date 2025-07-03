import type { Recipe } from "../../utils/recipetypes";

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({recipes}: RecipeListProps) => {
    return (
        <div>
        {recipes.map((recipe) => (
            <div key={recipe.id}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} width="100%" />
              <p>{recipe.summary}</p>
            </div>
        ))}
        </div>
    )
}

export default RecipeList