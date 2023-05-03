import { useForm } from "react-hook-form";

import { usePatchChangePassword } from "@service/index";

interface ChangePasswordForm {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}

const useChangePassword = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<ChangePasswordForm>({ mode: "all" });

  const { mutate: patchChangePasswordMutate } = usePatchChangePassword();

  const isBtnDisable = !(
    !!watch("password") &&
    !!watch("newPassword") &&
    !!watch("newPasswordConfirm") &&
    watch("newPassword") === watch("newPasswordConfirm") &&
    Object.keys(errors).length === 0
  );

  const handleChangePassword = (data: ChangePasswordForm) => {
    patchChangePasswordMutate(
      {
        body: {
          origin_password: data.password,
          new_password: data.newPassword,
        },
      },
      {
        onSuccess: () => {
          alert("비밀번호가 변경 되었습니다.");
        },
      },
    );
  };

  return {
    isBtnDisable,
    register,
    errors,
    handleSubmit: handleSubmit(handleChangePassword),
  };
};

export default useChangePassword;
