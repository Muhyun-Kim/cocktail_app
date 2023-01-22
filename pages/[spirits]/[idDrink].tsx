/**
 * Author : muhyun-kim
 * Modified : 2023/01/22
 * Function : カクテルの詳細表示
 */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function detail() {

  const router = useRouter()
  console.log(router);

  const [detail, setDetail] = useState<string | null>(null);

  useEffect

  return "detail";
}

