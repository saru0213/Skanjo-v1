import { toast } from "sonner";

export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text);
  toast.success("Copied to clipboard!");
};
