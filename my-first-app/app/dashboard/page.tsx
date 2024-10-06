import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-left p-4">10/02/2024</TableCell>
            <TableCell className="text-left p-4">Jon I.</TableCell>
            <TableCell className="text-left p-4">test@lorem.com</TableCell>
            <Badge className="rounded-full ">Open</Badge>
            <TableCell className="text-right p-4">$250.00</TableCell>
            <a href=""></a>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
