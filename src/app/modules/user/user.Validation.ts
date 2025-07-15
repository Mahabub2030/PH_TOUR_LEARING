import z from "zod";
export const creatUserZodeSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),

  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Must contain one special character",
    }),
  phone: z.string().optional(),
  picture: z.string().optional(),
  address: z.string().optional(),
  isDeleted: z.boolean().optional(),
  isActive: z.boolean().optional(),
  isVerified: z.boolean().optional(),
  // 🔧 Replace with real values for enum and types if needed
  role: z.enum(["admin", "user", "guide"]), // Replace with your actual Role values
  auths: z.array(z.any()), // Or define IAuthProvider schema if you have it
  bookings: z.array(z.any()).optional(), // Replace with z.custom<Types.ObjectId>()
  guides: z.array(z.any()).optional(),
});
export const upadteUserZodeSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" })
    .optional(),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Must contain one special character",
    }),
  phone: z.string(),
  picture: z.string(),
  address: z.string().optional(),
  isDeleted: z.boolean().optional(),
  isActive: z.boolean().optional(),
  isVerified: z.boolean().optional(),
  // 🔧 Replace with real values for enum and types if needed
  role: z.enum(["admin", "user", "guide"]), // Replace with your actual Role values
  auths: z.array(z.any()), // Or define IAuthProvider schema if you have it
  bookings: z.array(z.any()).optional(), // Replace with z.custom<Types.ObjectId>()
  guides: z.array(z.any()).optional(),
});
