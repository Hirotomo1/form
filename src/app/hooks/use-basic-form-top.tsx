"use client";

import { useForm } from "react-hook-form";
import { BasicFormSchemaType, basicFormSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useBasicFormTop = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicFormSchemaType>({
    resolver: zodResolver(basicFormSchema),
  });

  const onSubmit = (data: BasicFormSchemaType) => {
    console.log(data);
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  };
};
