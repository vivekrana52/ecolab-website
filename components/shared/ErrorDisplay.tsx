'use client';

import Link from 'next/link';

interface ErrorDisplayProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorDisplay({ error, reset }: ErrorDisplayProps) {
  return (
    <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center max-w-lg">
        {/* Error Icon */}
        <div className="w-16 h-16 rounded-full border-2 border-red-500/50 flex items-center justify-center mb-6">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8V12M12 16H12.01"
              stroke="#EF4444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#EF4444"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-bold text-white">Something went wrong</h1>

        {/* Error Message */}
        <div className="mt-6 w-full">
          <pre className="bg-[#111] p-4 rounded-lg text-red-400 text-sm font-mono max-w-md overflow-auto mx-auto text-left">
            {error.message || 'An unexpected error occurred.'}
          </pre>
        </div>

        {/* Actions */}
        <div className="mt-8 flex items-center gap-6">
          <button
            onClick={reset}
            className="bg-[#2563EB] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="text-gray-400 underline hover:text-gray-300 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
