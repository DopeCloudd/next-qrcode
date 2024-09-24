"use client";
import Link from "next/link";
import { ThemeToggle } from "@/app/components/nav/theme-toggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Liste des pages où la navbar ne doit pas apparaître
  const noNavbarPages = ["/login", "/signup"];

  return (
    <>
      {!noNavbarPages.includes(pathname) && (
        <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold ml-2">Follow my QR</h1>
          </div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link href="/docs">Docs</Link>
            </li>
            <li>
              <Link href="/examples">Examples</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/login">
                <Button>Connexion</Button>
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
