import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { IconSquare, IconSquareCheckFilled } from "@tabler/icons-react";
import _ from "lodash";

import * as React from "react";

interface ContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  values: string[];
  onSelectChange: (value: string) => void;
}

interface IProps {
  value?: string[];
  onSelectChange?: (values: string[]) => void;
  children: React.ReactNode;
}

const MultiSelectContext = React.createContext<ContextProps>({
  values: [],
  open: false,
  setOpen: () => {},
  onSelectChange: () => {},
});

const useMultiSelectContext = () => React.useContext(MultiSelectContext);

// multi select
export function MultiSelect({ value, onSelectChange, children }: IProps) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState<string[]>(() =>
    value !== undefined ? [...value] : []
  );

  // handle value change
  const handleValueChange = (value: string) => {
    let currentValues = values;

    if (currentValues.includes(value)) {
      currentValues = currentValues.filter((d) => d !== value);
    } else {
      currentValues = [...currentValues, value];
    }

    setValues(currentValues);
    onSelectChange !== undefined && onSelectChange(currentValues);
  };

  return (
    <MultiSelectContext.Provider
      value={{
        open,
        setOpen,
        values,
        onSelectChange: handleValueChange,
      }}
    >
      <Popover open={open} onOpenChange={setOpen}>
        {children}
      </Popover>
    </MultiSelectContext.Provider>
  );
}

// trigger
export function MultiSelectTrigger(
  props: React.ComponentProps<typeof PopoverTrigger>
) {
  return (
    <PopoverTrigger
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        props.className
      )}
      {...props}
    />
  );
}

interface MultiSelectContentProps {
  children: React.ReactNode;
}

export function MultiSelectContent({ children }: MultiSelectContentProps) {
  return (
    <PopoverContent className="p-0 w-auto min-w-[var(--radix-popover-trigger-width)]">
      <Command>
        <CommandInput placeholder="" />
        <CommandList>
          <CommandEmpty />
          <CommandGroup>{children}</CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  );
}

export function MultiSelectItem(
  props: React.ComponentProps<typeof CommandItem>
) {
  const { values, onSelectChange } = useMultiSelectContext();

  const isInclude = _.includes(values, props.value);

  return (
    <CommandItem
      onSelect={onSelectChange}
      className={cn("flex items-center gap-2 w-full", props.children)}
      {...props}
    >
      {isInclude ? (
        <IconSquareCheckFilled className="text-primary" size={15} />
      ) : (
        <IconSquare stroke={1.5} opacity={80} size={15} />
      )}

      {props.children}
    </CommandItem>
  );
}
