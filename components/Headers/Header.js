"use client";
import Link from "next/link";
import Image from "next/image";

import classes from "./Header.module.css";
import HeaderBg from "./HeaderBg";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <>
      <HeaderBg />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image width={100} height={100} src="/images/logo.png" alt="logo" />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={path.startsWith("/meals") ? classes.active : ""}
              >
                Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={path.startsWith("/community") ? classes.active : ""}
              >
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
