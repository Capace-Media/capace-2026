import { useFieldContext } from "../create-form-hook";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  label?: string;
  placeholder?: string;
  classname?: string;
  options: string[];
}

export function SelectInput(props: Props) {
  const field = useFieldContext<string>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return (
    <Field data-invalid={isInvalid}>
      {props.label && (
        <FieldLabel htmlFor={field.name}>{props.label}</FieldLabel>
      )}
      <Select
        name={field.name}
        value={field.state.value}
        onValueChange={(value) => field.handleChange(value || "")}
        aria-invalid={isInvalid}
      >
        <SelectTrigger id={field.name} className={props.classname}>
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {props.options.map((option, index) => (
            <SelectItem value={option} key={index}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
}
