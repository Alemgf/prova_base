import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import recipesData from '../recipes.json';

export default function RecipesPage() {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {    
    setRecipes(recipesData);
  }, []);

  return (
    <div>
      <h1>Lista de Receitas</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <Link href={`/recipes/${recipe.id}`}>
              <a>
                <img src={recipe.image} alt={recipe.name} />
                <p>{recipe.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}