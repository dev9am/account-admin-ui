'use client';

import { useEffect } from 'react';

interface ErrorComponentProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  useEffect(() => {
    // エラーをログに記録
    console.error('Runtime error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
      <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4 max-w-md">
        <p className="text-red-700 mb-2">Error: {error.message}</p>
        {error.digest && (
          <p className="text-xs text-gray-500">Digest: {error.digest}</p>
        )}
      </div>
      <button
        type="button"
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
