/**
 * Author : muhyun-kim
 * Modified : 2023/01/26
 * Function : アプリのメイン画面。材料に使うスピリッツを選択できる。
 */

import { useRouter } from "next/router";

export default function Home() {
  //カクテル作りのベースとなるスピリッツリスト
  let spiritList: string[][] = [
    [
      "Vodka",
      "https://cdn.pixabay.com/photo/2018/06/16/05/55/alcohol-3478219_1280.jpg",
    ],
    [
      "Gin",
      "https://cdn.pixabay.com/photo/2021/02/02/14/06/tanqueray-5974184_1280.jpg",
    ],
    [
      "Tequila",
      "https://cdn.pixabay.com/photo/2022/11/03/19/01/alcohol-7568226_1280.jpg",
    ],
  ];

  const router = useRouter();
  const onClick = (spirits: string) => {
    router.push({
      pathname: `/${spirits}`,
      query: { spirit: spirits },
    });
  };

  console.log(router);

  return (
    <div className="flex flex-col items-center bg-orange-50">
      <span className="pb-4">好きなスピリッツを選んでください</span>
      <ul className="flex items-center max-sm:flex-col">
        {spiritList.map((spirits, index) => (
          <li
            key={index}
            onClick={() => onClick(spirits[0])}
            className="flex flex-col items-center px-5"
          >
            {spirits[0]}
            <img src={spirits[1]} className="h-40 w-40" />
          </li>
        ))}
      </ul>
    </div>
  );
}
