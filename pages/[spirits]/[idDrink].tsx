/**
 * Author : muhyun-kim
 * Modified : 2023/01/28
 * Function : カクテルの詳細表示
 */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

export default function DetailCocktail() {
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
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
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
      <div className="flex flex-col">
        <div className="flex justify-center">This is receipe!</div>
        <div className="flex justify-center">
          {detail.drinks.map((drink) => (
            <div
              key={drink.idDrink}
              className="flex max-md:flex-col items-center"
            >
              <img src={drink.strDrinkThumb} className="h-40 mr-6" />
              <div className="flex flex-col">
                <div>{drink.strDrink}</div>
                <div>{drink.strGlass}</div>
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
                {drink.strIngredient6 && (
                  <div>
                    {drink.strIngredient6}:{drink.strMeasure6}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <Loading />
      </div>
    );
  }
}
