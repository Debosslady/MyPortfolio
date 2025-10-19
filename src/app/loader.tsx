import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="animate-spin border-4 border-gray-300 border-t-blue-500 rounded-full w-16 h-16 mb-6"></div>
      <Image
        src="/assets/images/match-logo.png"
        width={100}
        height={100}
        alt="Logo"
        priority
        className="rounded-md"
      />
      <p className="text-gray-600 mt-4 font-medium">Loading...</p>
    </div>
  );
}
