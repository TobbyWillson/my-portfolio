import { useState, useRef } from "react";

export const useVanishEffect = (formData, handleClear) => {
  const [vanishText, setVanishText] = useState(null);
  const vanishCooldown = useRef(false);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const contactDetailRef = useRef(null);
  const purposeRef = useRef(null);
  const messageRef = useRef(null);

  const refs = {
    fullName: fullNameRef,
    email: emailRef,
    contactDetail: contactDetailRef,
    purpose: purposeRef,
    message: messageRef,
  };

  const triggerVanish = (fieldName) => {
    const snapshot = formData[fieldName];
    setVanishText({ name: fieldName, text: snapshot, charIndex: null });
    handleClear(fieldName);
  };

  const handleVanishComplete = () => setVanishText(null);

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

  const handleInput = (e, fieldName) => {
    const { inputType } = e.nativeEvent;
    const isDelete = inputType === "deleteContentBackward" || inputType === "deleteContentForward" || inputType === "deleteByCut" || inputType === "deleteByDrag" || inputType === "deleteContent";

    if (!isDelete) return;
    if (vanishCooldown.current) return;

    const prevValue = formData[fieldName];
    if (!prevValue) return;

    const nextValue = e.target.value;
    const deletedCount = prevValue.length - nextValue.length;
    const isFullClear = nextValue.length === 0;

    let charIndex = null;
    if (!isFullClear && deletedCount === 1) {
      for (let i = 0; i < prevValue.length; i++) {
        if (prevValue[i] !== nextValue[i]) {
          charIndex = i;
          break;
        }
      }

      if (charIndex === null) charIndex = nextValue.length;
    }

    vanishCooldown.current = true;
    setTimeout(() => {
      vanishCooldown.current = false;
    }, 100);

    setVanishText({
      name: fieldName,
      text: isFullClear ? prevValue : prevValue[charIndex ?? nextValue.length],
      charIndex: isFullClear ? null : charIndex,
    });
  };

  return { vanishText, refs, triggerVanish, handleVanishComplete, handleKeyDown, handleInput };
};
