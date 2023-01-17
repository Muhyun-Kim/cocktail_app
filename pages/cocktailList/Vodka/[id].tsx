import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CocktailList() {
  interface IDrink {
    idDrink: string;
    strDrink: string;
  }
  const router = useRouter();
  const { id } = router.query;
  const cocktailAPI: string = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552`;
  const [cocktails, setCocktails] = useState<IDrink[] | null>(null);
  useEffect(() => {
    (async () => {
      const { drinks } = await (await fetch(cocktailAPI)).json();
      setCocktails(drinks);
      setCocktails(drinks);
      console.log(cocktails);
    })();
  }, []);
  console.log(id);
  console.log(router.query);
  return <div>ds</div>;
}
