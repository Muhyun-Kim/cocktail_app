/**
 * Author : muhyun-kim
 * Modified : 2023/01/22
 * Function : カクテルの詳細表示
 */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function detailCocktail() {
  interface Detail {
    drinks: cocktailInfo[];
  }

  interface cocktailInfo {
    idDrink: string;
    strDrink: string;
    strGlass: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
  }

  const router = useRouter();
  const { idDrink } = router.query;
  const [detail, setDetail] = useState<Detail | null>(null);

  useEffect(() => {
    if (typeof idDrink !== "undefined") {
      (async () => {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
        );
        const detailAPI = await response.json();
        setDetail(detailAPI);
      })();
    }
  }, [idDrink]);

  console.log("deail=", detail);
  console.log(detail?.drinks[0].strDrink);
  if (detail) {
    return (
      <div>
        <div>
          {detail.drinks.map((drink) => (
            <div>
              <img src={drink.strDrinkThumb} />
              <div>{drink.strDrink}</div>
              {drink.strIngredient1 && (
                <div>
                  {drink.strIngredient1}:{drink.strMeasure1}
                </div>
              )}
              {drink.strIngredient2 && (
                <div>
                  {drink.strIngredient2}:{drink.strMeasure2}
                </div>
              )}
              {drink.strIngredient3 && (
                <div>
                  {drink.strIngredient3}:{drink.strMeasure3}
                </div>
              )}
              {drink.strIngredient4 && (
                <div>
                  {drink.strIngredient4}:{drink.strMeasure4}
                </div>
              )}
              {drink.strIngredient5 && (
                <div>
                  {drink.strIngredient5}:{drink.strMeasure5}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div> Loading... </div>;
  }
}
