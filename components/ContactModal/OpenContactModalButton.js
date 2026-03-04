"use client";
import { useContactModal } from "./ContactModalContext";

export default function OpenContactModalButton({ className, children }) {
  const { open } = useContactModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
