"use client";

import Image from "next/image";
import { Button } from "@/components/shadcn/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function SignIn() {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(false);
    const handleSignIn = async () => {
        setLoading(true);
    };
    return (
        <Button
            onClick={handleSignIn}
            className='gap-2 text-neutral-50 bg-neutral-900 dark:bg-neutral-950 border-[1px] w-full border-transparent dark:border-neutral-500/25 dark:hover:bg-neutral-600/10'
            variant={theme === "dark" ? "outline" : "default"}
            disabled={loading}
        >
            {loading ? (
                <Loader2 className='animate-spin' />
            ) : (
                <Image
                    src='/spotify.svg'
                    width={20}
                    height={20}
                    alt=''
                />
            )}
            Sign in with Spotify
        </Button>
    );
}
