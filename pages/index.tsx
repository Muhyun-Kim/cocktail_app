import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        )
      ).json();
      console.log(data);
    })();
  }, []);
  return (
    <div>
      <Seo title="home" />
      <h1 className="active">カクテルの種類</h1>
    </div>
  );
}
