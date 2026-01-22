import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "./components/text-field";
import { TextArea } from "./components/text-area";
import SubmitButton from "./components/submit-button";
import { SelectInput } from "./components/select-input";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    TextArea,
    SelectInput,
  },
  formComponents: {
    SubmitButton,
  },
});
