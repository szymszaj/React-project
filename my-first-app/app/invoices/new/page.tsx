import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full  gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Create Invoices</h1>
      </div>

      <form className="grid gap-4 max-w-xs">
        <div>
          <Label htmlFor="name" className="block font-semibold mb-2 text-sm">
            Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-2 font-semibold text-sm">
            Email
          </Label>
          <Input id="email" name="email" type="Email" />
        </div>
        <div>
          <Label htmlFor="value" className="block mb-2 font-semibold text-sm">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="block mb-2 font-semibold text-sm"
          >
            Description
          </Label>
          <Textarea id="description" name="description"></Textarea>
        </div>
      </form>
    </main>
  );
}
// 30min
