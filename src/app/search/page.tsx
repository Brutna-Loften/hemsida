import "@/app/globals.css";
import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div className="container pt-4 px-4 md:px-6">
      <Input type="text" placeholder="Sök" />
    </div>
  );
}
