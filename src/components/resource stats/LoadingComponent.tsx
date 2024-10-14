import Image from "next/image";
import logo from "/public/images/logo.jpg";

export default function LoadingComponent() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-mainBackground">
            <div className="w-20 h-20 rounded-full relative">
                <Image
                    src={logo.src}
                    alt="logo"
                    width={9999}
                    height={9999}
                    className="rounded-full z-50"
                />
                <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    >
                    <circle
                        className="loader-circle stroke-mainColor"
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        strokeWidth="8"
                    />
                </svg>
            </div>
        </div>
    )
}