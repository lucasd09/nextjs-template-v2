"use client";

import { cn } from "@/lib/utils";
import { ChangeEvent, ForwardedRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import { InputProps, InputRef } from "./types";
import { FormInputBase } from "@/components/form/components/form-input-base";
import { fixedForwardRef } from "@/lib/react";
import { Eye, EyeOff } from "lucide-react";

const InputBase = <TForm extends FieldValues>(
  {
    className,
    value: baseValue,
    label,
    onChange,
    name,
    children: _,
    form,
    description,
    isSkeleton,
    type = "text",
    ...props
  }: InputProps<TForm>,
  ref: ForwardedRef<InputRef>,
) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <FormInputBase
      name={name}
      form={form}
      description={description}
      label={label}
      isSkeleton={isSkeleton}
    >
      {({ field }) => {
        const value = form ? (field?.value ?? "") : baseValue;
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          onChange?.(event);
          field?.onChange(event);
        };

        const inputElement = (
          <input
            className={cn(
              "flex h-8 w-full rounded-md border",
              "border-input bg-transparent px-3 py-1 text-sm",
              "shadow-sm transition-colors file:border-0 file:bg-transparent",
              "file:text-sm file:font-medium file:text-foreground",
              "placeholder:text-muted-foreground focus-visible:outline-none",
              "focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed",
              "disabled:opacity-50",
              className,
            )}
            ref={ref}
            {...props}
            {...field}
            type={isPassword && showPassword ? "text" : type}
            value={value}
            onChange={handleChange}
          />
        );

        const Comp = isPassword ? (
          <div className="relative">
            {inputElement}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        ) : (
          inputElement
        );

        if (!label) {
          return Comp;
        }

        return <div className="space-y-1">{Comp}</div>;
      }}
    </FormInputBase>
  );
};

export const Input = fixedForwardRef(InputBase);
