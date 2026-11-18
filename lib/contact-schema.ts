import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters.").max(100, "Name is too long."),
  email: z.string().trim().email("Enter a valid email address.").max(254, "Email address is too long."),
  subject: z.string().trim().min(3, "Please add a short subject.").max(120, "Subject is too long."),
  message: z.string().trim().min(10, "Please add a little more detail.").max(5000, "Message is too long."),
});