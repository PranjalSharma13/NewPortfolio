// components/LanguagePickerModal.tsx
import React from "react";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import { useLanguage } from "../../hooks/useLanguage";
import LanguageGrid from "../language/LanguageGrid";
import { LANGUAGES } from "../../i18n/languages";

type Props = { onClose: () => void };

const LanguagePickerModal = ({ onClose }:Props) => {
  const { current, setLanguage } = useLanguage();

  return (
    <Modal onClose={onClose}>
      <ModalHeader>Select your language</ModalHeader>
      <LanguageGrid
        languages={LANGUAGES}
        current={current}
        onPick={(code) => {
          setLanguage(code);
          onClose();
        }}
      />
    </Modal>
  );
};

export default LanguagePickerModal;
