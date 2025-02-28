import { useMemo } from "react";

const UseTruncate = (text: string, maxLength: number) => {
  return useMemo(() => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }, [text, maxLength]);
};
export default UseTruncate;
