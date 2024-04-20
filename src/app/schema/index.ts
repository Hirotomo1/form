import { z } from "zod";

const PHONE_NUMBER = new RegExp("^[0-9]{3}-[0-9]{4}-[0-9]{4}$");

export const basicFormSchema = z
  .object({
    userName: z.string().min(1, { message: "名前を入力してください" }),
    phoneNumber: z
      .string()
      .regex(
        PHONE_NUMBER,
        "半角数字、ハイフン付きで入力してください (例: 123-4567-8900)"
      ),
    sex: z.union([
      z.literal("none"),
      z.literal("male"),
      z.literal("female"),
      z.literal("other"),
    ]),
    age: z.string().nullable(),
  })
  .superRefine(({ age }, ctx) => {
    if (age !== null && age > "120") {
      ctx.addIssue({
        path: ["age"],
        code: "custom",
        message: "年齢が大きすぎます",
      });
    }
  });

export type BasicFormSchemaType = z.infer<typeof basicFormSchema>;
