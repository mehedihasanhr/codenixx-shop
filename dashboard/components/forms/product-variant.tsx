import * as React from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import _ from "lodash";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export interface Variant {
  type: string;
  values: string[];
}

// type interface
interface IProps {
  index: number;
  defaultValue: Variant;
  onSubmit: (variant: Variant, index: number) => void;
  remove: (index: number) => void;
}

// component
export default function ProductVariantForm({
  index,
  defaultValue,
  onSubmit,
  remove,
}: IProps): React.ReactNode {
  const [variant, setVariant] = React.useState<Variant>(defaultValue);
  const [error, setError] = React.useState<Record<string | undefined>>();

  // form submit handler function
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (variant.type !== "" && !_.isEmpty(variant.values)) {
      onSubmit(variant, index);
    } else {
    }
  };

  return (
    <form className="p-6 rounded-lg border border-border/50 flex flex-col space-y-3.5">
      {/* variant type */}
      <div className="flex flex-col space-y-2.5">
        <Label>Type</Label>
        <Select
          value={variant.type}
          onValueChange={(currentValue: string) =>
            setVariant((prev) => ({ ...prev, type: currentValue }))
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="SIZE">Size</SelectItem>
            <SelectItem value="COLOR">Color</SelectItem>
          </SelectContent>
        </Select>
        {error.type !== "" ? <FormMessage>{error.type}</FormMessage> : null}
      </div>

      {/* variant Values */}
      <div className="flex flex-col space-y-2.5">
        <div>
          <Label>Values</Label>
        </div>
        <div className="flex flex-col space-y-2">
          {_.map(variant.values, (value: string, idx: number) => (
            <div className="relative">
              <Input
                key={idx}
                type="text"
                value={value}
                onChange={(e) => {
                  const values = variant.values.map((v, i) =>
                    i === idx ? e.target.value : v
                  );

                  setVariant((prev) => ({ ...prev, values }));
                }}
              />

              {/* value delete button */}
              {variant.values.length > 1 ? (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => {
                    const values = variant.values;
                    if (values.length > 1) {
                      values.splice(idx, 1); // remove data from idx
                      setVariant((prev) => ({
                        ...prev,
                        values,
                      }));
                    }
                  }}
                  className="absolute top-1/2 -translate-y-1/2 right-0.5 hover:bg-transparent hover:text-red-500"
                >
                  <IconTrash size={15} opacity={0.5} />
                </Button>
              ) : null}
            </div>
          ))}
        </div>
        <div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 text-xs py-1 px-0 h-fit text-muted-foreground hover:bg-transparent hover:text-foreground hover:font-medium"
            onClick={() => {
              setVariant((prev) => ({
                ...prev,
                values: [...prev.values, ""],
              }));
            }}
          >
            <IconPlus size={13} stroke={1.5} />
            <span>Add Value</span>
          </Button>
        </div>
      </div>

      {/* form actions */}
      <div className="flex items-center justify-between">
        <Button
          onClick={() => remove(index)}
          type="button"
          variant="ghost"
          size="sm"
        >
          Delete
        </Button>
        <Button type="button" size="sm" onClick={handleSubmit}>
          Done
        </Button>
      </div>
    </form>
  );
}
