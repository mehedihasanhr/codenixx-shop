import { type productInsertFormSchema } from "@/form-schemas/product-insert-form";
import { IconSquare, IconSquareCheckFilled, IconX } from "@tabler/icons-react";
import _ from "lodash";
import { ChevronsUpDown } from "lucide-react";
import React from "react";
import { type UseFormReturn } from "react-hook-form";
import type z from "zod";
import { categoriesData } from "../../data/product.data";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface IProps {
  form: UseFormReturn<z.infer<typeof productInsertFormSchema>, any, undefined>;
}

const data = categoriesData(10);

export default function ProductCategoriesSelect({ form }: IProps) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState(() => {
    const selectedValues = form.getValues("category_ids");
    return _.filter(data, (d) => _.includes(selectedValues, d.id));
  });

  // remove item
  const removeItem = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: (typeof data)[0]
  ) => {
    e.stopPropagation();
    // remove from form state
    const categoryIds = form.getValues("category_ids");

    const index = _.indexOf(categoryIds, value.id);
    if (index === -1) return null;

    const newValues = _.filter(categoryIds, (id) => id !== value.id);
    setValues(() => _.filter(data, (d) => _.includes(newValues, d.id)));
    form.setValue("category_ids", newValues);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className="relative flex gap-1 min-h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        asChild
      >
        <div className="flex-1 flex flex-wrap">
          {values.length > 0 ? (
            _.map(values, (value) => (
              <Badge
                key={value.id}
                variant="secondary"
                className="rounded-sm pr-1"
              >
                {value.name}
                <Button
                  variant="secondary"
                  size="icon-sm"
                  className="p-0 w-6 h-6 ml-1.5 rounded-[4px] hover:text-destructive"
                  onClick={(e) => removeItem(e, value)}
                >
                  <IconX size={14} />
                </Button>
              </Badge>
            ))
          ) : (
            <span className="h-8 flex items-center text-muted-foreground">
              Select category...
            </span>
          )}

          <span className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50">
            <ChevronsUpDown size={15} />
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
        <Command>
          <CommandInput />
          <CommandList>
            <CommandEmpty />
            <CommandGroup>
              {_.map(data, (category) => (
                <React.Fragment key={category.id}>
                  <CommandItem
                    value={category.name}
                    onSelect={() => {
                      const value = form.getValues("category_ids");
                      const index = _.indexOf(value, category.id);
                      const values =
                        index === -1
                          ? [...value, category.id]
                          : value?.filter((v) => v !== category.id);

                      setValues(() =>
                        _.filter(data, (d) => _.includes(values, d.id))
                      );

                      form.setValue("category_ids", values);
                      setOpen(false);
                    }}
                  >
                    {_.findIndex(values, (v) => v.id === category.id) > -1 ? (
                      <IconSquareCheckFilled size={16} className="opacity-70" />
                    ) : (
                      <IconSquare size={16} className="opacity-70" />
                    )}
                    <span className="pl-2">{category.name}</span>
                  </CommandItem>
                </React.Fragment>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
