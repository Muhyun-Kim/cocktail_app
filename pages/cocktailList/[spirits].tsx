import { useRouter } from "next/router";

export default function List() {
  const router = useRouter();
  console.log(router);
  console.log(router.query)
  return "list";
}
