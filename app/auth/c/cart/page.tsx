import CartItemRow from "@/app/auth/c/cart/_components/cartItemRow";
import Cheackout from "@/app/auth/c/cart/_components/checkout";
import { getCartId, getCartItems } from "@/lib/cartUtils";
import { redirect } from "next/navigation";

export default async function CartPage() {
  const cartId = await getCartId();
  const data = await getCartItems();

  if (data.length === 0) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold">Košík</h1>
        <p className="text-xl">Tvoj kosík je prázdny</p>
        <form
          action={async () => {
            "use server";
            redirect("/auth/c/store");
          }}
        ></form>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-between md:justify-start">
      <div>
        <h1 className="text-2xl font-semibold pt-2">Košík</h1>
        <div className="grid grid-cols-1 divide-y-2">
          {data.map((item, i) => (
            <CartItemRow
              key={item.item.id + "-" + i}
              {...item.item}
              quantity={item.quantity}
              cartId={cartId}
            />
          ))}
        </div>
        <div className="flex justify-between py-4">
          <p className="font-semibold text-lg">Spolu</p>
          <p className="font-semibold text-xl">
            {data
              .reduce(
                (acc, item) =>
                  acc + parseFloat(item.item.price) * item.quantity,
                0
              )
              .toFixed(2)}
            €
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <Cheackout items={data} cartId={cartId} />
      </div>
    </div>
  );
}
