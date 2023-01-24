/**
 * Author : muhyun-kim
 * Modified : 2023/01/24
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
    strDrinkThumb: string;
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
      <div className="flex flex-col items-center">
        <div>choice cocktail</div>
        <div className="grid grid-cols-3">
          {ingredient && ingredient.length > 0 && (
            <>
              {ingredient.map((cocktail) => (
                <div className="flex p-4" key={cocktail.idDrink}>
                  <Link href={`/${spirit}/${cocktail.idDrink}`}>
                    <div className="flex justify-center">
                      {cocktail.strDrink}
                    </div>
                    <img src={cocktail.strDrinkThumb} />
                  </Link>
                </div>
              ))}
            </>
          )}
        </div>
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