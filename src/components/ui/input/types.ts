import { ComponentProps } from "react";
import { OmitMerge } from "@/lib/types";
import { FieldValues } from "react-hook-form";
import { InputDefaultProps } from "@/components/form/types";

export type InputProps<TForm extends FieldValues> = OmitMerge<
  ComponentProps<"input">,
  InputDefaultProps<TForm>
> & {
  label?: string;
};

export type InputRef = HTMLInputElement;
