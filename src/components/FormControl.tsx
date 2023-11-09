import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from 'react';

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  pointer?: boolean;
}

const FormLabel = ({ pointer, children, ...props }: FormLabelProps) => {
  return (
    <label
      className={`text-sm font-medium leading-6 text-gray-900 ${
        pointer && 'hover:cursor-pointer hover:text-gray-600'
      }`}
      {...props}
    >
      {children}
    </label>
  );
};

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const FormInput = ({ id, name, hidden, invalid, ...props }: FormInputProps) => {
  if (hidden) return <input id={id} name={name || id} hidden {...props} />;
  return (
    <input
      id={id}
      name={name || id}
      className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
        invalid
          ? 'ring-red-300 focus:ring-red-500 focus-visible:outline-red-400'
          : 'ring-gray-300 focus:ring-ccmt-neutral-300 focus-visible:outline-ccmt-neutral-200'
      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
      {...props}
    />
  );
};

interface FormControlProps extends InputHTMLAttributes<HTMLInputElement> {
  outer?: (children: ReactNode) => ReactNode;
  label: string;
  hidden?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
}

const FormControl = ({
  outer,
  id,
  label,
  hidden = false,
  invalid,
  invalidMessage,
  ...props
}: FormControlProps) => {
  const FormControlContent = (
    <>
      <FormLabel htmlFor={id} pointer={hidden}>
        {label}
      </FormLabel>
      <FormInput id={id} invalid={invalid} hidden={hidden} {...props} />
      {invalid && (
        <div id={`${id}-error`} role="alert" className="text-sm text-red-600">
          {invalidMessage}
        </div>
      )}
    </>
  );

  if (outer) return outer(FormControlContent);
  return FormControlContent;
};

export default FormControl;
export { FormLabel, FormInput };
