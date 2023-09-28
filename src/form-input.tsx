import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

interface FormInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  label: string;
  placeholder: string;
  testName?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, placeholder, testName, error, ...restProps }, ref) => {
    return (
      <div className="flex gap-2 items-center">
        <label>{label}</label>
        <input
          className="border border-gray-200 rounded-sm p-1"
          placeholder={placeholder}
          data-testid={`${testName}-input`}
          ref={ref}
          {...restProps}
        />
        {error && <div className="text-red-600 text-xs">{error} *</div>}
      </div>
    );
  }
);

export default FormInput;
