export interface FormInputProps {
  placeholder?: string;
  hasValue: boolean;
  hasError: boolean;
  autoComplete?: "off" | "new-password";
  type?: "text" | "password";
  register: any;
}

export interface InputWrapperProps {
  hasValue: boolean;
  hasError: boolean;
}
