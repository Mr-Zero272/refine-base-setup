import { NEXT_PUBLIC_DIRECTUS_CDN_URL } from "@config";

export const generateList = (length: number) => {
  return Array.from({ length }, (_, i) => i + 1);
};

export const humanize = (field: string = "", separator = "_") => {
  const words = field.split(separator).map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(" ");
};

export const cdnGetFileUrl = (filename_disk: string) =>
  `${NEXT_PUBLIC_DIRECTUS_CDN_URL}/${filename_disk}`;
