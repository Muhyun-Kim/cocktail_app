/**
 * Author : muhyun-kim
 * Modified : 2023/01/19
 * Function : アプリのメイン画面。材料に使うスピリッツを選択できる。
 */

import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  let spirits: string[] = ["Vodka", "Gin", "Techila"];
  const router = useRouter();
  const onClick = (spirit: string) => {
    router.push(
      {
        pathname: `/cocktailList/${spirit}`,
        query: {
          spirits,
        },
      },
      `/cocktailList/${spirit}`
    );
  };
  return (
    <div>
      <ul>
        {spirits.map((spirit) => (
          <div onClick={() => onClick(spirit)}>
            <li>
              <Link href={`/cocktailList/${spirit}`}>{spirit}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
