import { generateList } from "@helpers";
import { useMemo } from "react";

export default function useGenerateList(length: number) {
  const list = useMemo(() => generateList(length), [length]);
  return list;
}
