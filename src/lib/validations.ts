import { z } from "zod";
import { password, slug } from "./customValidation";
export interface FormState<G> {
  message?: string;
  success?: boolean;
  errors?: Partial<Record<keyof G, string[]>>;
}

export const RegisterFormSchema = z.object({
  firstName: z.string().min(2, { message: "حداقل ۲ کارکتر وارد کنید." }).trim(),
  lastName: z.string().min(2, { message: "حداقل ۲ کارکتر وارد کنید." }).trim(),
  email: z.string().email({ message: "لطفا یک ایمیل معتبر وارد کنید." }).trim(),
  password: password(),
  role: z.number(),
});

export type RegisterType = z.infer<typeof RegisterFormSchema>;
export type RegisterFormState = FormState<RegisterType>;

export const RegisterFormSellerSchema = z.object({
  firstName: z.string().min(2, { message: "حداقل ۲ کارکتر وارد کنید." }).trim(),
  lastName: z.string().min(2, { message: "حداقل ۲ کارکتر وارد کنید." }).trim(),
  email: z.string().email({ message: "لطفا یک ایمیل معتبر وارد کنید." }).trim(),
  password: password(),
  role: z.number(),
  shopName: z
    .string()
    .min(2, { message: "حداقل 2 کاراکتر وارد نمایید" })
    .trim(),
  shopSlug: z.string().min(2, { message: "حداقل 2 کارکتر وارد نمایید" }).trim(),
});
export type SellerRegisterType = z.infer<typeof RegisterFormSellerSchema>;
export type SellerRegisterFormState = FormState<SellerRegisterType>;

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "لطفا یک ایمیل معتبر وارد کنید." }).trim(),
  password: z.string(),
  role: z.coerce.number(),
});

export type LoginType = z.infer<typeof LoginFormSchema>;
export type LoginFormState = FormState<LoginType>;

export const BrandSchemaZod = z.object({
  titleFa: z.string().min(1, "Title (FA) is required"), // Minimum 1 character
  titleEn: z.string().min(1, "Title (EN) is required"), // Minimum 1 character
  slug: slug(),
  logo: z.string().url().optional(), // Optional logo
});
export type BrandType = z.infer<typeof BrandSchemaZod>;
export type BrandFormState = FormState<BrandType>;

export const CategorySchemaZod = z.object({
  titleEn: z.string().min(1, "Name is required").trim(),
  titleFa: z.string().min(1, "Name is required").trim(),
  slug: slug(),
  icon: z.string().url().trim().optional(),
  returnReasonAlert: z.string().trim().optional(),
  properties: z.array(z.string()).optional(), // Array of strings (ObjectIds)
  parent: z.string().optional(), // String (ObjectId)
});

export type CategoryType = z.infer<typeof CategorySchemaZod>;
export type CategoryFormState = FormState<CategoryType>;

// Zod Schema and Type
export const CitySchemaZod = z.object({
  name: z.string().min(1, "Name is required").trim(),
  code: z.string().min(1, "Code is required").trim(),
  slug: slug(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CityType = z.infer<typeof CitySchemaZod>;
export type CityFormState = FormState<CityType>;

export const ColorSchemaZod = z.object({
  title: z.string().min(1, "Title is required").trim(),
  hexCode: z
    .string()
    .min(1, "Hex code is required")
    .trim()
    .regex(/^#([0-9A-Fa-f]{3}){1,2}$/, "Invalid hex code format"),
});

export type ColorType = z.infer<typeof ColorSchemaZod>;
export type ColorFormState = FormState<ColorType>;

export const CommentSchemaZod = z.object({
  text: z.string().min(1, "Text is required").trim(),
  rating: z
    .number()
    .int()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot exceed 5")
    .optional(), // Rating is optional
  product: z.number(),
});
export type CommentType = z.infer<typeof CommentSchemaZod>;
export type CommentFormState = FormState<CommentType>;

const SpecificationSchemaZod = z.object({
  title: z.string().min(1, "Specification title is required").trim(),
  value: z.string().trim().optional(),
  name: z.string().min(1, "Specification name is required").trim(),
  isDefault: z.coerce.boolean().optional().default(false),
});

const ImageSchemaZod = z.object({
  main: z.string().url("Main image must be a valid URL").trim(),
  list: z
    .array(z.string().url("List images must be valid URLs").trim())
    .optional(),
});

// Main Product Zod Schema
export const ProductSchemaZod = z.object({
  code: z.coerce.number().int().positive("Code must be a positive integer"),
  titleFa: z.string().min(1, "Title (FA) is required").trim(),
  titleEn: z.string().min(1, "Title (EN) is required").trim(),
  status: z.enum(["marketable", "unmarketable"]).default("marketable"),
  images: ImageSchemaZod,
  colors: z.array(z.string()).optional(),
  badges: z.array(z.string()).optional(),
  category: z.string(),
  brand: z.string(),
  review: z.string(),
  specifications: z
    .array(SpecificationSchemaZod)
    .transform((specifications) => specifications.filter((i) => !!i.value))
    .optional(),
  expert_review: z.string().trim().optional(),
});

export type ProductType = z.infer<typeof ProductSchemaZod>;
export type ProductFormState = FormState<ProductType>;

// Zod Schema
export const PropertySchemaZod = z.object({
  name: z.string().min(1, "Name is required").trim(),
  label: z.string().min(1, "Label is required").trim(),
  type: z.string().min(1, "Type is required").trim(),
  options: z
    .array(
      z.object({
        label: z.string().min(1, "Option label is required").trim(),
        value: z.string().min(1, "Option value is required").trim(),
      })
    )
    .optional(), // Options array is optional
});

export type PropertyType = z.infer<typeof PropertySchemaZod>;
export type PropertyFormState = FormState<PropertyType>;

// Zod Schema and Type (unchanged)
export const SellerSchemaZod = z.object({
  user: z.string(),
  name: z.string().min(1, "Name is required").trim(),
  slug: slug(),
});

export type SellerType = z.infer<typeof SellerSchemaZod>;
export type SellerFormState = FormState<SellerType>;

export const BadgeFormSchema = z.object({
  icon: z.string().url().trim(),
  title: z.string().min(1, "Title is required").trim(),
});
export type BadgeType = z.infer<typeof BadgeFormSchema>;

export type BadgeFormState = FormState<BadgeType>;

export const UpdateAddressSchema = z.object({
  _id: z.string().trim(),
  city: z.string().trim(),
  street: z.string().min(3, "نام خیابان را وارد نمایید").trim(),
  postalCode: z.string().min(2, "کد پستی خود را وارد نمایید").trim(),
  location: z.tuple([z.number(), z.number()]),
});
export type AddressType = z.infer<typeof UpdateAddressSchema>;
export type AddressFormState = FormState<AddressType>;

export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .min(16, "شماره کارت باید 16 رقم باشد")
    .max(16, "شماره کارت باید 16 رقم باشد")
    .regex(/^\d+$/, "شماره کارت فقط باید شامل اعداد باشد"),
  cvv2: z
    .string()
    .min(3, "CVV2 باید حداقل 3 رقم باشد")
    .max(3, "CVV2 باید حداکثر 3 رقم باشد")
    .regex(/^\d+$/, "CVV2 فقط باید شامل اعداد باشد"),
  expiryMonth: z
    .string()
    .min(2, "ماه باید دو رقم باشد")
    .max(2, "ماه باید دو رقم باشد")
    .regex(/^\d+$/, "ماه باید فقط شامل اعداد باشد")
    .refine((val) => parseInt(val) >= 1 && parseInt(val) <= 12, {
      message: "ماه باید بین 01 و 12 باشد",
    }),
  expiryYear: z
    .string()
    .min(2, "سال باید دو رقم باشد")
    .max(2, "سال باید دو رقم باشد")
    .regex(/^\d+$/, "سال باید فقط شامل اعداد باشد"),
  securityCode: z
    .string()
    .min(3, "کد امنیتی باید حداقل 3 رقم باشد")
    .max(3, "کد امنیتی باید حداکثر 3 رقم باشد")
    .regex(/^\d+$/, "کد امنیتی فقط باید شامل اعداد باشد"),
});
