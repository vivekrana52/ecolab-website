import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 | ECOLAB',
};

export default function NotFound() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center">
        <p className="text-8xl font-bold text-white/10">404</p>
        <h1 className="text-3xl font-bold text-white mt-4">Page Not Found</h1>
        <p className="text-gray-400 mt-2">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-[#2563EB] text-white px-6 py-3 rounded-lg font-medium mt-8 hover:bg-[#1d4ed8] transition-colors inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
