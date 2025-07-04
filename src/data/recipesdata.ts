import type { Recipe } from "../utils/recipetypes";

import gnocchiImg from "../assets/gnocchi.jpg";
import pastinaImg from "../assets/pastina-soup.jpg";
import trapaneseImg from "../assets/trapanese.jpg";
import sorrentinaImg from "../assets/sorrentina.jpg";
import vongoleImg from "../assets/vongole.jpg";

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
            {description: 'Heat a large skillet over medium-high heat. Cook and stir sausage and onion in the hot skillet until browned and crumbly, 5 to 7 minutes. Stir in vodka sauce and enough tomato juice until you reached a desired consistency. Stir in mozzarella cheese and spinach.'},
            {description: 'Bring a large pot of lightly salted water to a boil. Cook gnocchi in the boiling water until they float to the top, 2 to 4 minutes. Drain.'},
            {description: 'Transfer gnocchi to a plate, cover with sauce, and serve.'}
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
            {description: 'Place chicken in a large pot and pour water over to cover.'},
            {description: 'Roughly chop 2 ribs of celery, 1 ½ onions, and 2 carrots; add to pot with chicken. Season with 2 teaspoon salt and 1 teaspoon pepper and bring pot to a boil over high heat. Reduce the heat to medium-low and allow the chicken to simmer 1 hour, covered.'},
            {description: 'Remove chicken from the pot and allow to cool before removing and shredding the meat. Strain the stock and discard the solids. Reserve liquid and add water if necessary to measure 12 cups of liquid.  Wipe pot clean.'},
            {description: `Finely chop remaining celery, onion and carrot. Place pot over medium-high heat and add oil. Add chopped vegetables, remaining salt, pepper and garlic and cook frequently until vegetables are tender and onion is translucent (the veggies should not be browned). Add reserved stock and chicken base and stir to combine. Bring mixture to a boil and reduce it to simmer.  Allow soup to simmer 10 minutes. `},
            {description: 'Increase heat to high and bring to a boil. Add pasta and cook, stirring occasionally 15 minutes or until pasta is tender. Reduce heat to low and add chicken and season if desired. Cook 5 additional minutes.  Stir in chopped parsley and serve with grated Parmesan cheese. '}
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
            {description: 'Bring about 2 cups of water to a boil, remove from the heat, and stir in almonds; let sit for 3 to 4 minutes. Drain, and once cool enough to handle, rub skins off with your hands; alternately; transfer drained almonds to a kitchen towel, then fold up the towel and rub almonds until skins come off.'},
            {description: 'Crush sliced garlic with kosher salt in a mortar and pestle into a smooth paste. Alternately, place garlic on a board and sprinkle kosher salt on top; use the flat side of the knife to flatten, mash, and scrape the garlic and salt mixture until it is a smooth paste.'},
            {description: 'Add peeled almonds to the jar of a blender, followed by the cheese, basil, mint, garlic paste, oil, and tomatoes. Add the ingredients in this order, so that the almonds and cheese have a chance to grind before the wetter ingredients mix in.'},
            {description: `Begin to pulse blender on and off until almonds and cheese are ground, then continue to pulse until remaining ingredients are incorporated. Blend on high until the pesto is as coarse or smooth as you like.`},
            {description: 'Taste for salt, and adjust. Set aside while pasta is cooking.'},
            {description: 'Bring a large pot of lightly salted water to a boil. Cook busiate pasta in the boiling water, stirring occasionally, until tender yet firm to the bite, about 12 minutes. Transfer pasta into a bowl with a strainer. Reserve starchy cooking liquid.'},
            {description: 'Add about 1/3 cup of the pasta water into the bowl, and then transfer in the pesto, along with a large pinch of salt, and toss to coat. More pasta water can be added to adjust the texture. Once mixed, add another optional handful of cheese, and toss one last time. Serve immediately.'}
        ],
        image: trapaneseImg
    },
    {
        id: 4,
        title: 'Gnocchi alla Sorrentina',
        summary: `A classic Italian "primo", or starter pasta, from the Campania region of Italy. Fresh tomatoes are sauteed with onion, garlic, and basil, then tossed with fresh mozzarella, basil, and your favorite gnocchi or short pasta. In the summer, we skip the oven part of this recipe and just eat it after being tossed in the saute pan.`,
        ingredients: [
            { name: 'Olive oil', quantity:'2 teaspoons'},
            { name: 'Potato gnocchi', quantity:'½ pound'},
            { name: 'Small onion, chopped', quantity:'1'},
            { name: 'Garlic, minced', quantity:'1 clove'},
            { name: 'Italian plum tomatoes, halved', quantity:'14 ounces'},
            { name: 'Dry white wine', quantity:'¼ cup'},
            { name: 'Small fresh mozzarella balls (ciliegine)', quantity:'7 ounces'},
            { name: 'Finely grated Parmigiano-Reggiano cheese', quantity:'4 tbsp'},
            { name: 'Fresh basil', quantity:'4 sprigs'}

        ],
        steps: [
            {description: 'Preheat the oven to 400 degrees F (200 degrees C). Lightly oil an oven-safe baking dish.'},
            {description: 'Bring a large pot of lightly salted water to a boil. Cook gnocchi in the boiling water until they float to the top, 2 to 4 minutes. Drain and set aside.'},
            {description: 'While gnocchi is cooking, heat olive oil in a skillet over medium heat. Add onion and cook until soft and translucent, about 5 minutes. Add garlic and cook until fragrant, about 30 seconds. Cut an "x" into the skin of each tomato with a sharp knife and add to the skillet; stir well. Pour in white wine and simmer until tomatoes are tender, about 10 minutes. Using a spoon, gently crush tomatoes to release juice and pulp. Add basil and continue to gently crush tomatoes to create a sauce. Remove and discard tomato skins as they loosen from the pulp. Cook for 1 more minute over low heat. Add drained gnocchi to the sauce and mix until covered with the sauce.'},
            {description: `Remove skillet from heat and add mozzarella balls, folding everything together gently but quickly, so cheese is coated with sauce but not cooked or melted. Transfer to the prepared baking dish and sprinkle with Parmigiano-Reggiano cheese.`},
            {description: 'Bake in the preheated oven until cheese has melted, about 10 minutes. Garnished with fresh basil sprigs. '}
        ],
        image: sorrentinaImg
    },
    {
        id: 5,
        title: 'Spaghetti Risottati alle Vongole',
        summary: `Spaghetti is cooked like a risotto in fresh clam sauce for a flavor-packed dish. A few simple ingredients can create this delicious pasta dish that will wow you. The spaghetti take in the juices of the clams using minimal water. This is one of my family's favorite pasta dishes.`,
        ingredients: [
            { name: 'Water', quantity:'8 cups'},
            { name: 'Salt', quantity:'1 tbsp'},
            { name: 'Extra-virgin olive oil', quantity:'2 tbsp'},
            { name: 'Red Thai chile pepper, seeded and chopped', quantity:'1'},
            { name: 'Garlic, crushed', quantity:'1'},
            { name: 'Verace clams in shell, scrubbed', quantity:'2 pounds'},
            { name: 'White wine', quantity:'¾ cup'},
            { name: 'Spaghetti', quantity:'12 ounces'},
            { name: 'Lemon zest', quantity:'1 teaspoon'},
            { name: 'Chopped flat-leaf (Italian) parsley', quantity:'½ cup'},
            { name: 'Coarsely ground black pepper', quantity:'1 teaspoon'}
        ],
        steps: [
            {description: 'Bring water to a boil in a stockpot; add salt. Reduce heat to a simmer. '},
            {description: 'Heat a large skillet over medium heat. Add oil, followed by chile pepper and garlic. Cook and stir gently until fragrant, about 30 seconds. Remove garlic and chile pepper; discard. Add clams to the fragrant oil.'},
            {description: 'Pour wine over the clams and cover immediately. Let simmer until clams have opened, about 7 minutes. Remove clams using a slotted spoon to a large bowl. Cover to avoid losing their steam. Discard any unopened clams.'},
            {description: `Pour four ladles of salted water into the skillet with the juice of the clams. Bring to a boil over high heat. Add spaghetti; move around with a pasta fork to keep from sticking together. Cook, adding a ladle or two of salted water as needed to keep spaghetti barely covered, until pasta is tender yet firm to the bite, 8 to 10 minutes. Add clams and sprinkle in lemon zest. Give the skillet a hefty toss to gently mix the clams in the thickened sauce.`},
            {description: 'Divide into four pasta bowls. Cover with parsley and serve immediately with empty plates on the side for the shells while eating.'}
        ],
        image: vongoleImg
    },

]