import z from "zod";

// export const societySchema = z.object({
//   title: z.string().trim().min(1, "Title is required"),

//   organizationKind: z.string().trim().min(1, "Organization kind is required"),

//   email: z.string().email("Invalid email address").max(50, "Email is too long"),

//   phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),

//   whatsAppNumber: z
//     .string()
//     .regex(/^\d{10}$/, "WhatsApp number must be exactly 10 digits"),

//   websiteUrl: z.string().optional(),

//   address: z.string().trim().min(1, "Address is required"),

//   city: z.string().trim().min(1, "City is required"),

//   state: z.string().trim().min(1, "State is required"),

//   pincode: z.string().trim().min(1, "Pincode is required"),

//   about: z.string().optional(),
// });

export const signupSchema = z.object({
  fullName: z.string().trim().min(1, "Full Name is Required"),
  email: z.string().email("Invalid email address").max(50, "Email is too long"),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});
export const signInSchema = z.object({
  
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});
