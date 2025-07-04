'use client'
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";




const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;

`



const App = () => {

  return (
    <StyledMainDiv>
        <Header/>
        <RecipeList headline="Random Italian Pasta Recipes" firstSubtitle="Ingredients" secondSubtitle="Steps"/>
        <Footer/>
    </StyledMainDiv>
  )
}

export default App
