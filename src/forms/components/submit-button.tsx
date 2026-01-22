import { Button } from "@/components/ui/button";
import { useFormContext } from "../create-form-hook";

interface Props {
  label: string;
}

export default function SubmitButton(props: Props) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button withArrow type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Skickar..." : props.label}
        </Button>
      )}
    </form.Subscribe>
  );
}
