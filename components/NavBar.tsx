/**
 * Author : muhyun-kim
 * Modified : 2023/01/25
 * Function : 共通navbar
 */

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-center m-3 text-xl">
        <Link href="/">Home</Link>
    </nav>
  );
}
