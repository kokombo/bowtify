"use client";
import { useEffect } from "react";
import type { SetStateAction, Dispatch } from "react";

export const useClearErrorMessage = (
  setState: Dispatch<SetStateAction<string | undefined>>
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setState("");
    }, 7000);

    return () => clearTimeout(timer);
  });
};
