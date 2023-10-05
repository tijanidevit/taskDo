import { taskValidationSchema } from "@/validations";
import { InferType } from "yup";

export type CreateOrUpdateTask = InferType<typeof taskValidationSchema>;
