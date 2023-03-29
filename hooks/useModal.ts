import { useRecoilState } from "recoil";

import { modalAtom } from "@recoil/common";

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useRecoilState(modalAtom);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return {
    isOpenModal,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
