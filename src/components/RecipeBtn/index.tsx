interface RecipeBtnProps {
    onClick: () => void;
}

const RecipeBtn = ({onClick}: RecipeBtnProps) => {
    return (
        <button onClick={onClick}>Show Random Recipes</button>
    )
}

export default RecipeBtn