/**
 * Author : muhyun-kim
 * Modified : 2023/01/25
 * Function : 共通navbar
 */

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-center text-xl mb-3 h-20">
      <Link href="/" >
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/19/19/martini-154548_1280.png"
          className="h-16"
        />
      </Link>
    </nav>
  );
}
