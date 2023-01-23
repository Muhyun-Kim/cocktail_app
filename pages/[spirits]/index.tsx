/**
 * Author : muhyun-kim
 * Modified : 2023/01/21
 * Function : homeからスピリッツを選んだ際に遷移する画面
 */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "../../components/Loading";

export default function List() {
  interface cocktailInfo {
    idDrink: string;
    strDrink: string;
  }

  const router = useRouter();
  const { spirit } = router.query;
  const [ingredient, setIngredient] = useState<cocktailInfo[] | null>(null);

  useEffect(() => {
    if (typeof spirit !== "undefined") {
      (async () => {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`
        );
        const { drinks } = await response.json();
        if (Array.isArray(drinks) && drinks.length > 0) {
          setIngredient(drinks);
        }
      })();
    }
  }, [spirit]);

  console.log(ingredient);

  if (ingredient) {
    return (
      <div>
        <span>choice cocktail</span>
        {ingredient && ingredient.length > 0 && (
          <>
            {ingredient.map((cocktail) => (
              <div className="cocktailName" key={cocktail.idDrink}>
                <Link href={`/${spirit}/${cocktail.idDrink}`}>
                  {cocktail.strDrink}
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <Loading />
      </div>
    );
  }
}
