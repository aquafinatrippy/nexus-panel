import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logo-placeholder-image.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
    return (
        <div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white">
            <Link href="/">
                <Image src={ logo } alt="Logo" width={100} height={50} />
                <Avatar>
                    <AvatarFallback>
                        <AvatarImage src="https://avatars.dicebear.com/api/avataaars/nextjs.svg" alt="User" />
                    </AvatarFallback>
                </Avatar>
            </Link>
        </div>
    )
};