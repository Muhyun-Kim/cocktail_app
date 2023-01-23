/**
 * Author : muhyun-kim
 * Modified : 2023/01/21
 * Function : アプリのメイン画面。材料に使うスピリッツを選択できる。
 */

import { useRouter } from "next/router";

export default function Home() {
  let spiritList: string[] = ["Vodka", "Gin", "Tequila"];
  const router = useRouter();
  const onClick = (spirits: string) => {
    router.push({
      pathname: `/${spirits}`,
      query: { spirit: spirits },
    });
  };

  console.log(router);

  return (
    <div>
      <span>Choice your favorite spirit</span>
      <ul>
        {spiritList.map((spirits) => (
          <li onClick={() => onClick(spirits)}>{spirits}</li>
        ))}
      </ul>
    </div>
  );
}
