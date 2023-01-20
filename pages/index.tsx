/**
 * Author : muhyun-kim
 * Modified : 2023/01/20
 * Function : アプリのメイン画面。材料に使うスピリッツを選択できる。
 */

import { useRouter } from "next/router";

export default function Home() {
  let spirits: string[] = ["Vodka", "Gin", "Tequila"];
  const router = useRouter();
  const onClick = (spirits: string) => {
    router.push({
      pathname: `/cocktailList/${spirits}`,
      query: { spirit: spirits },
    });
  };

  return (
    <div>
      <ul>
        {spirits.map((spirits) => (
          <li onClick={() => onClick(spirits)}>{spirits}</li>
        ))}
      </ul>
    </div>
  );
}
