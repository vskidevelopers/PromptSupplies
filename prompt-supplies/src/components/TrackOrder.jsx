import { Button } from "./ui/button";
import { Truck } from "lucide-react";

export default function TrackOrder() {
  return (
    <div className="ml-auto flex items-center gap-1">
      <Button size="sm" variant="outline" className="h-8 gap-1">
        <Truck className="h-3.5 w-3.5" />
        <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
          Track Order
        </span>
      </Button>
    </div>
  );
}
