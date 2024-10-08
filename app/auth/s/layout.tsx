import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { getUser } from "@/lib/user-utils";
import NavWrapper from "@/components/nav/nav-wrapper";
import NavButton from "@/components/nav/nav-button";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function authLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getUser();
  if (!user || !user.isSeller) {
    redirect("/");
  }

  return (
    <div style={{ minHeight: "100dvh" }} className="flex flex-col">
      <div className=" hidden sm:inline-block">
        <NavWrapper>
          <NavButton href="/auth/s/summary" text="Zhrnutie" />
          <NavButton href="/auth/s/take" text="Prevziať" />
          <NavButton href="/auth/s/unblock" text="Odblokovať" />
          <NavButton href="/auth/s/block" text="Ukončiť predaj" />
        </NavWrapper>
      </div>
      <div className="sm:hidden">
        <NavWrapper>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <a href="/auth/s/summary">
                <DropdownMenuItem>Zhrnutie</DropdownMenuItem>
              </a>
              <a href="/auth/s/take">
                <DropdownMenuItem>Prevziať</DropdownMenuItem>
              </a>
              <a href="/auth/s/unblock">
                <DropdownMenuItem>Odblokovať</DropdownMenuItem>
              </a>
              <a href="/auth/s/block">
                <DropdownMenuItem>Ukončiť predaj</DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavWrapper>
      </div>
      <div className="p-2 flex-1 flex">
        <main className="max-w-screen-lg mx-auto flex-1">{children}</main>
      </div>
    </div>
  );
}
