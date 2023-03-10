export interface FormInputProps {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  hasValue: boolean;
  hasError: boolean;
  autoComplete?: "off" | "new-password";
  type?: "text" | "password";
  errorMsg?: string;
  register: any;
}

export interface InputWrapperProps {
  hasValue: boolean;
  hasError: boolean;
}
