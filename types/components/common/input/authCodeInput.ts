export interface AuthCodeInputProps {
  className?: string;
  placeholder: string;
  inputDisabled?: boolean;
  btnDisabled?: boolean;
  hasValue: boolean;
  hasError: boolean;
  type?: "text";
  errorMsg?: string;
  btnMsg?: string;
  register: any;
  handleAuthCode?: () => void;
}
