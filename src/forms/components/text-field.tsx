import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useFieldContext } from "@/forms/create-form-hook";

interface Props {
  label?: string;
  placeholder?: string;
  classname?: string;
  labelClassname?: string;
  maxLength?: number;
  hidden?: boolean;
  required?: boolean;
}

export function TextField(props: Props) {
  const { hidden = false } = props;
  const field = useFieldContext<string>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return (
    <Field>
      {props.label && (
        <FieldLabel htmlFor={field.name} className={props.labelClassname}>
          {props.label}
        </FieldLabel>
      )}
      <Input
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={isInvalid}
        placeholder={props.placeholder}
        autoComplete="off"
        maxLength={props.maxLength}
        className={props.classname}
        hidden={hidden}
        required={props.required}
      />
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
}
