import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full  gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Create a New Invoices</h1>
      </div>

      <form className="grid gap-4 max-w-xs">
        <div>
          <Label className="block font-semibold mb-2 text-sm">Name</Label>
          <Input type="text" />
        </div>
        <div>
          <Label className="block mb-2 font-semibold text-sm">Email</Label>
          <Input type="Email" />
        </div>
        <div>
          <Label className="block mb-2 font-semibold text-sm">Value</Label>
          <Input type="text" />
        </div>
        <div>
          <Label className="block mb-2 font-semibold text-sm">
            Description
          </Label>
          <Textarea></Textarea>
        </div>
      </form>
    </main>
  );
}
// 30min
