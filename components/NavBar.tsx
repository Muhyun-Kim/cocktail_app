/**
 * Author : muhyun-kim
 * Modified : 2023/01/25
 * Function : 共通navbar
 */

import Link from "next/link";
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="flex items-center justify-center text-xl mb-3 h-20">
      <Link href="/">
        <img src="/Users/kim_muhyeon/my_project/react/cocktail_app/public/navIcon.svg" />
      </Link>
    </nav>
  );
}
