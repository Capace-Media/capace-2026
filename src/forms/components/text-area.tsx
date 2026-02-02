import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { useFieldContext } from "@/forms/create-form-hook";

interface Props {
  label?: string;
  placeholder?: string;
  classname?: string;
  required?: boolean;
}

export function TextArea(props: Props) {
  const field = useFieldContext<string>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return (
    <Field>
      {props.label && (
        <FieldLabel htmlFor={field.name}>{props.label}</FieldLabel>
      )}
      <Textarea
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={isInvalid}
        placeholder={props.placeholder}
        autoComplete="off"
        className={props.classname}
        required={props.required}
      />
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
}
