'use client'
import Button from "@/components/ui/Button";
import Link from "next/link";

const ThanksPage = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center px-2">
            <h1 className="text-3xl font-semibold text-center">Thanks for <span className="text-blue-600">deliver</span> your package <span className="text-blue-600">with us</span>!</h1>
            <p className="text-neutral-400 text-lg">We will contact you soon...</p>
            <Link href="/">
                <Button type="button" className="w-[12rem] flex justify-center items-center bg-blue-600 text-neutral-100 p-3 rounded-lg hover:bg-blue-800 cursor-pointer">Send another package</Button>
            </Link>
        </div>
    );
}
 
export default ThanksPage;