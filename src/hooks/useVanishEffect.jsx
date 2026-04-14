import { useState, useRef } from "react";

export const useVanishEffect = (formData, handleClear) => {
  const [vanishText, setVanishText] = useState(null);
  const vanishCooldown = useRef(false);

  const refs = {
    fullName: useRef(null),
    email: useRef(null),
    contactDetail: useRef(null),
    purpose: useRef(null),
    message: useRef(null),
  };

  const triggerVanish = (fieldName) => {
    const snapshot = formData[fieldName];
    setVanishText({ name: fieldName, text: snapshot, charIndex: null });
    handleClear(fieldName);
  };

  const handleVanishComplete = () => {
    setVanishText(null);
  };

  const handleKeyDown = (e, fieldName) => {
    if (e.key !== "Backspace" && e.key !== "Delete") return;
    if (!formData[fieldName]) return;
    if (vanishCooldown.current) return;

    const input = refs[fieldName].current;
    const selStart = input.selectionStart;
    const selEnd = input.selectionEnd;
    const value = formData[fieldName];
    const isAllSelected = selStart === 0 && selEnd === value.length;

    let deletedChar = "";
    let charIndex = null;

    if (isAllSelected) {
      deletedChar = value;
      charIndex = null;
    } else if (e.key === "Backspace" && selStart > 0) {
      deletedChar = value[selStart - 1];
      charIndex = selStart - 1;
    } else if (e.key === "Delete" && selStart < value.length) {
      deletedChar = value[selStart];
      charIndex = selStart;
    }

    if (!deletedChar) return;

    vanishCooldown.current = true;
    setTimeout(() => {
      vanishCooldown.current = false;
    }, 100);

    setVanishText({ name: fieldName, text: deletedChar, charIndex });
  };

  return { vanishText, refs, triggerVanish, handleVanishComplete, handleKeyDown };
};
