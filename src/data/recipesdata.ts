import type { Recipe } from "../utils/recipetypes";

import gnocchiImg from "../assets/gnocchi.jpg";
import pastinaImg from "../assets/pastina-soup.jpg";
import trapaneseImg from "../assets/trapanese.jpg";

export const Recipes: Recipe[] = [
    {
        id: 1,
        title: 'Gnocchi with Sausage in Vodka Sauce',
        summary: "A quick and tasty dinner main dish. The cheesy vodka sauce goes with the the tender gnocchi and sausage.",
        ingredients: [
            { name: 'Italian sausage', quantity:'8 ounces'},
            { name: 'White onion, diced', quantity:'½'},
            { name: 'Vodka marinara sauce', quantity:'1 jar (24 ounces)'},
            { name: 'Tomato juice', quantity:'4 ounces'},
            { name: 'Shredded mozzarella cheese', quantity:'⅔ cup'},
            { name: 'Fresh spinach', quantity:'½ cup'},
            { name: 'Potato gnocchi', quantity:'17 ½ ounces'},
        ],
        steps: [
            {description: '1. Heat a large skillet over medium-high heat. Cook and stir sausage and onion in the hot skillet until browned and crumbly, 5 to 7 minutes. Stir in vodka sauce and enough tomato juice until you reached a desired consistency. Stir in mozzarella cheese and spinach.'},
            {description: '2. Bring a large pot of lightly salted water to a boil. Cook gnocchi in the boiling water until they float to the top, 2 to 4 minutes. Drain.'},
            {description: '3. Transfer gnocchi to a plate, cover with sauce, and serve.'}
        ],
        image: gnocchiImg
    },
    {
        id: 2,
        title: 'Classic Italian Pastina Soup',
        summary: "This classic pastina soup with tender chunks of chicken, tiny Italian pastina pasta, carrots, and parsley has all the rich flavors you need in a comforting bowl of homemade soup.",
        ingredients: [
            { name: 'Whole chicken, neck and insides removed', quantity:'1 (3 pound)'},
            { name: 'Water', quantity:'10 cups, cold'},
            { name: 'Selery, divided', quantity:'3 ribs'},
            { name: 'Medium white or yellow onions, peeled, divided', quantity:'2'},
            { name: 'Large carrots, peeled, divided', quantity:'3'},
            { name: 'Kosher salt, plus more to taste, divided', quantity:'1 tbsp'},
            { name: 'Freshly ground black pepper, divided', quantity:'2 tbsp'},
            { name: 'Olive oil', quantity:'2 tbsp'},
            { name: 'Garlic', quantity:'2 cloves, minced'},
            { name: 'Reduced sodium chicken base (such as Better than Bouillon)', quantity:'1 tbsp'},
            { name: 'Pastina or other tiny pasta, such as stars', quantity:'1 cup'},
            { name: 'Parsley, chopped (optional)', quantity:'1 tbsp'},
            { name: 'Freshly grated Parmesan cheese (optional)', quantity:'2 tbsp'},

        ],
        steps: [
            {description: '1. Place chicken in a large pot and pour water over to cover.'},
            {description: '2. Roughly chop 2 ribs of celery, 1 ½ onions, and 2 carrots; add to pot with chicken. Season with 2 teaspoon salt and 1 teaspoon pepper and bring pot to a boil over high heat. Reduce the heat to medium-low and allow the chicken to simmer 1 hour, covered.'},
            {description: '3. Remove chicken from the pot and allow to cool before removing and shredding the meat. Strain the stock and discard the solids. Reserve liquid and add water if necessary to measure 12 cups of liquid.  Wipe pot clean.'},
            {description: `4. Finely chop remaining celery, onion and carrot. Place pot over medium-high heat and add oil. Add chopped vegetables, remaining salt, pepper and garlic and cook frequently until vegetables are tender and onion is translucent (the veggies should not be browned). Add reserved stock and chicken base and stir to combine. Bring mixture to a boil and reduce it to simmer.  Allow soup to simmer 10 minutes. `},
            {description: '5. Increase heat to high and bring to a boil. Add pasta and cook, stirring occasionally 15 minutes or until pasta is tender. Reduce heat to low and add chicken and season if desired. Cook 5 additional minutes.  Stir in chopped parsley and serve with grated Parmesan cheese. '}
        ],
        image: pastinaImg
    },
    {
        id: 3,
        title: 'Pasta alla Trapanese (Sicilian Tomato Pesto)',
        summary: "I'm excited to share my version of pasta alla Trapanese, featuring Sicily's amazing tomato pesto. I love the green Genovese-style pesto, but when super-sweet cherry tomatoes are in season, I really believe this is the best pesto.",
        ingredients: [
            { name: 'whole roasted almonds', quantity:'1/2 cup'},
            { name: 'Garlic', quantity:'4 cloves'},
            { name: 'Kosher salt, plus more to taste', quantity:'1 tbsp'},
            { name: 'Pecorino Romano cheese, grated, plus more to taste', quantity:'1 cup'},
            { name: 'Packed fresh basil leaves', quantity:'1 cup'},
            { name: 'Mint leaves (optional)', quantity:'4 pieces'},
            { name: 'Extra virgin olive oil', quantity:'1/2 cup'},
            { name: 'Red cherry tomatoes or red grape tomatoes', quantity:'1 pound'},
            { name: 'Busiate pasta, or other curly shaped pasta, such as fusilli', quantity:'1 pound'}

        ],
        steps: [
            {description: '1. Bring about 2 cups of water to a boil, remove from the heat, and stir in almonds; let sit for 3 to 4 minutes. Drain, and once cool enough to handle, rub skins off with your hands; alternately; transfer drained almonds to a kitchen towel, then fold up the towel and rub almonds until skins come off.'},
            {description: '2. Crush sliced garlic with kosher salt in a mortar and pestle into a smooth paste. Alternately, place garlic on a board and sprinkle kosher salt on top; use the flat side of the knife to flatten, mash, and scrape the garlic and salt mixture until it is a smooth paste.'},
            {description: '3. Add peeled almonds to the jar of a blender, followed by the cheese, basil, mint, garlic paste, oil, and tomatoes. Add the ingredients in this order, so that the almonds and cheese have a chance to grind before the wetter ingredients mix in.'},
            {description: `4. Begin to pulse blender on and off until almonds and cheese are ground, then continue to pulse until remaining ingredients are incorporated. Blend on high until the pesto is as coarse or smooth as you like.`},
            {description: '5. Taste for salt, and adjust. Set aside while pasta is cooking.'},
            {description: '6. Bring a large pot of lightly salted water to a boil. Cook busiate pasta in the boiling water, stirring occasionally, until tender yet firm to the bite, about 12 minutes. Transfer pasta into a bowl with a strainer. Reserve starchy cooking liquid.'},
            {description: '7. Add about 1/3 cup of the pasta water into the bowl, and then transfer in the pesto, along with a large pinch of salt, and toss to coat. More pasta water can be added to adjust the texture. Once mixed, add another optional handful of cheese, and toss one last time. Serve immediately.'}
        ],
        image: trapaneseImg
    },

]