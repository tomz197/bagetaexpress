import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { item } from "@/db/schema";
import { getUser } from "@/lib/user-utils";
import itemRepository from "@/repositories/item-repository";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function ReservationSummary() {
  return (
    <Suspense
      fallback={
        <Button
          variant="outline"
          className="flex-1 sm:grow-0 opacity-50"
          disabled
        >
          Zhrnutie rezervácií <Loader className="w-5 h-5 animate-spin" />
        </Button>
      }
    >
      <ReservationSummaryInner />
    </Suspense>
  );
}

async function ReservationSummaryInner() {
  const user = await getUser();
  if (!user || !user.isEmployee || !user.storeId) {
    redirect("/");
  }
  const reservationSummary = await itemRepository.getSummary({
    storeId: user.storeId,
    isReservation: true,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex-1 sm:grow-0" variant="outline">
          Zhrnutie rezervácií
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Zhrnutie aktívnych rezervácií</DialogTitle>
          <DialogDescription>
            Ak rezervácie nie sú uzavrené, tak zobrazené počty sa môžu zmeniť
          </DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=" w-fit max-w-fit">p.č.</TableHead>
              <TableHead>Názov</TableHead>
              <TableHead className="text-center">Rezervované/Celkom</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservationSummary.map(
              ({ item, quantity, reservation }, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="text-center">
                    {quantity ?? 0} / {reservation?.quantity} ks
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}
