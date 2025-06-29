'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Global error logging
    console.error('Global runtime error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4 max-w-md">
            <p className="text-red-700 mb-2">Global Error: {error.message}</p>
            {error.digest && <p className="text-xs text-gray-500">Digest: {error.digest}</p>}
          </div>
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
