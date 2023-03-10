export interface AuthCodeInputProps {
  className?: string;
  placeholder: string;
  inputDisabled?: boolean;
  isCheckAuthCode?: boolean;
  btnDisabled?: boolean;
  hasValue: boolean;
  hasError: boolean;
  type?: "text";
  errorMsg?: string;
  btnMsg?: string;
  register: any;
  handleAuthCode?: () => void;
}
