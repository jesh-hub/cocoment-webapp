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

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const FormInput = ({ id, name, hidden, ...props }: FormInputProps) => {
  if (hidden) return <input id={id} name={name || id} hidden {...props} />;
  return (
    <input
      id={id}
      name={name || id}
      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccmt-neutral-300 focus-visible:outline-ccmt-neutral-200 sm:text-sm sm:leading-6"
      {...props}
    />
  );
};

interface FormControlProps extends InputHTMLAttributes<HTMLInputElement> {
  outer?: (children: ReactNode) => ReactNode;
  label: string;
  hidden?: boolean;
}

const FormControl = ({
  outer,
  id,
  label,
  hidden = false,
  ...props
}: FormControlProps) => {
  const FormControlContent = (
    <>
      <FormLabel htmlFor={id} pointer={hidden}>
        {label}
      </FormLabel>
      <FormInput id={id} hidden={hidden} {...props} />
    </>
  );

  if (outer) return outer(FormControlContent);
  return FormControlContent;
};

export default FormControl;
export { FormLabel, FormInput };
