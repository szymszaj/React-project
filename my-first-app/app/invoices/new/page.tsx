import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Create a New Invoices</h1>
      </div>

      <form>
        <div>
          <Label>Name</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Email</Label>
          <Input type="Email" />
        </div>
        <div>
          <Label>Value</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Description</Label>
          <Textarea></Textarea>
        </div>
      </form>
    </main>
  );
}
