import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function List() {
  interface IDrink {
    idDrink: string;
    strDrink: string;
  }
  const router = useRouter();
  const { spirits } = useRouter().query;
  console.log(spirits);
  const spiritAPI: string = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`;

  const [cocktails, setCocktails] = useState<IDrink[] | null>(null);
  useEffect(() => {
    (async () => {
      const { drinks } = (await (await fetch(spiritAPI)).json()) as {
        drinks: IDrink[];
      };
      setCocktails(drinks);
    })();
  }, []);
  console.log(cocktails);
  console.log(spiritAPI);
  console.log(router.query);

  return (
    <div>
      {!cocktails && <h4>Loading...</h4>}
      {cocktails && cocktails.length > 0 && (
        <>
          {cocktails.map((cocktail) => (
            <Link href={`/cocktailList/Vodka/[id]`} as={`/cocktailList/Vodka/${cocktail.idDrink}`}>
              <div key={cocktail.idDrink}>{cocktail.strDrink}</div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
}
