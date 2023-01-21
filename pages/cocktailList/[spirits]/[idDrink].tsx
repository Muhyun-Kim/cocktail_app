/**
 * Author : muhyun-kim
 * Modified : 2023/01/20
 * Function : カクテルの詳細レシピが見えるページ
 */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CocktailList() {
  interface IDrink {
    idDrink: string;
    strDrink: string;
  }
  const router = useRouter();
  const { id } = router.query;
  const [cocktails, setCocktails] = useState<IDrink[] | null>(null);

  useEffect(() => {
    if (typeof id !== "undefined") {
      (async () => {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const { drinks } = await response.json();
        if (Array.isArray(drinks) && drinks.length > 0) {
          setCocktails(drinks);
        }
      })();
    }
  }, [id]);
  console.log(cocktails);

  return (
    <>
      <div>{cocktails && cocktails[0].strDrink}</div>
    </>
  );
}
