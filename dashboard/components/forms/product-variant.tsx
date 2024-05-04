import * as React from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
// type interface
interface IProps {
  productPrice: string;
  stockQuantityUnit: string;
}

// component
export default function ProductVariantForm({
  productPrice,
  stockQuantityUnit,
}: IProps): React.ReactNode {
  const [variant, setVariant] = React.useState({
    type: "",
    values: [],
  });

  // form submit handler function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-2.5">
        <Label>Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="SIZE">Size</SelectItem>
            <SelectItem value="COLOR">Color</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </form>
  );
}
