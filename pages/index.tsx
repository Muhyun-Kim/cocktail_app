import Link from "next/link";
import { useEffect, useState } from "react";

interface IDrink {
  idDrink: string;
  strDrink: string;
}

export default function Home() {
  let spirits: string[] = ["vodca", "tequila", "gin"];
  const [cocktails, setCocktails] = useState<IDrink[] | null>(null);
  useEffect(() => {
    (async () => {
      const { drinks } = (await (
        await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
        )
      ).json()) as { drinks: IDrink[] };
      setCocktails(drinks);
    })();
  }, []);
  return (
    <div>
      {!cocktails && <h4>Loading...</h4>}
      {cocktails && cocktails.length > 0 && (
        <>
          <ul>
            {spirits.map((spirit) => (
              <li>
                <Link href={`/cocktailList/${spirit}`}>{spirit}</Link>
              </li>
            ))}
          </ul>
          {cocktails.map((cocktail) => (
            <div key={cocktail.idDrink}>{cocktail.strDrink}</div>
          ))}
        </>
      )}
    </div>
  );
}
