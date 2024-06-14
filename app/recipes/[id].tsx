import { useRouter } from 'next/router';
import recipesData from '../../../recipes.json';

export default function RecipeDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const recipe = recipesData.find((r) => r.id === id);

  if (!recipe) {
    return <p>Receita não encontrada.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded shadow-md">
      <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <h2 className="text-xl font-semibold mb-2">Ingredientes</h2>
      <ul className="list-disc ml-6 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instruções</h2>
      <ol className="list-decimal ml-6">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}