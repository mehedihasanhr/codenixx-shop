import { Currency } from "@/lib/utils";
import * as React from "react";
import { Input } from "./ui/input";

interface PriceInputProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currencyCode?: string;
  onBlur?: (value: string) => void;
  readOnly?: boolean;
}

export default function PriceInputField({
  value = "",
  onChange,
  onBlur,
  currencyCode = "USD",
  readOnly = false,
}: PriceInputProps) {
  const currency = new Currency(currencyCode);

  return (
    <>
      <div className="relative">
        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground text-sm font-medium">
          {currency.getCurrencySymbol()}
        </span>
        <Input
          readOnly={readOnly}
          value={value}
          onChange={onChange}
          onBlur={() =>
            onBlur?.(
              value && !isNaN(Number(value))
                ? currency.getFormattedAmountWithoutSymbol(Number(value))
                : ""
            )
          }
          type="text"
          placeholder={currency.getFormattedAmountWithoutSymbol(0)}
          className="pl-8"
        />
      </div>
    </>
  );
}
