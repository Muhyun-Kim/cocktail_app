import { useRouter } from "next/router";

export default function List() {
  const router = useRouter();
  console.log(router);
  return "list";
}
