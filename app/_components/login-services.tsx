"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MsLogo from "@/assets/ms-symbollockup.svg";

export default function LoginServices() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <Button
        style={{
          backgroundColor: "hsl(var(--foreground))",
          color: "hsl(var(--background))",
        }}
        size="lg"
        className="px-3"
        onClick={() => {
          switch (true) {
            case session.user.isEmployee || session.user.isAdmin:
              router.push("/auth/e/dashboard");
              break;
            case session.user.isSeller:
              router.push("/auth/s/summary");
              break;
            case session.user.isCustomer:
              router.push("/auth/c/store");
              break;
            default:
              router.push("/auth/redirect");
          }
        }}
      >
        Prejsť do aplikácie
      </Button>
    );
  }

  return (
    <>
      <Button
        style={{
          backgroundColor: "hsl(var(--foreground))",
          color: "hsl(var(--background))",
        }}
        size="lg"
        className="px-3 gap-3"
        onClick={() => {
          signIn("azure-ad", { callbackUrl: "/auth/redirect" });
        }}
      >
        <Image height={24} width={24} src={MsLogo} alt="Ms logo" />
        Prihlásiť sa cez Microsoft
      </Button>
    </>
  );
}
