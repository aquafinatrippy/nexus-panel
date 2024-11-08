import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

type BackButtonProps = {
  text: string;
  link: string;
};

export const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link
      href={link}
      className="text-gray-500 flex items-center gap-1 font-bold mb-5 hover:underline"
    >
      <ArrowLeftCircle size={18} /> {text}
    </Link>
  );
};
