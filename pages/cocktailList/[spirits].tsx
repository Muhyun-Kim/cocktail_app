import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function List() {
  interface IDrink {
    idDrink: string;
    strDrink: string;
  }
  const router = useRouter();
  const { spirits } = router.query;
  const [ingredient, setIngredient] = useState<IDrink[] | null>(null);
  useEffect(() => {
    if (typeof spirits !== "undefined") {
      (async () => {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirits}`
        );
        const { drinks } = await response.json();
        if (Array.isArray(drinks) && drinks.length > 0) {
          setIngredient(drinks);
        }
      })();
    }
  }, [spirits]);
  console.log(router);
  console.log(spirits);

  return (
    <div>
      {ingredient && ingredient.length > 0 && (
        <>
          {ingredient.map((cocktail) => (
            <Link
              href={`/cocktailList/${spirits}/${cocktail.idDrink}`}
              as={`/cocktailList/${spirits}/${cocktail.idDrink}`}
            >
              <div key={cocktail.idDrink}>{cocktail.strDrink}</div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
}
