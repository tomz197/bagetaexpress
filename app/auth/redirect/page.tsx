import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RedirectPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  if (session.user.isAdmin || session.user.isEmployee) {
    redirect("/auth/e/dashboard");
  }
  if (session.user.isSeller) {
    redirect("/auth/s/summary");
  }
  if (session.user.isCustomer) {
    redirect("/auth/c/store");
  }

  return (
    <div
      style={{ minHeight: "100dvh" }}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-col">
        <h1 className=" font-semibold text-xl">Nenašla sa škola k účtu</h1>
        <h2 className=" text-lg">Prihlálste sa cez váš škoský účet</h2>
        <Button>
          <a href="/">Prihlásiť sa</a>
        </Button>
      </div>
    </div>
  );
}