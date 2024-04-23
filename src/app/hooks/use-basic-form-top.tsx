"use client";

import { useForm } from "react-hook-form";
import { BasicFormSchemaType, basicFormSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export const useBasicFormTop = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicFormSchemaType>({
    resolver: zodResolver(basicFormSchema),
  });

  const onSubmit = (data: BasicFormSchemaType) => {
    console.log(data);
    router.replace("/pages/thanks");
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  };
};
