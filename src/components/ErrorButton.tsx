'use client';

import { useState } from 'react';

export default function ErrorButton() {
  const [showError, setShowError] = useState(false);

  if (showError) {
    // 意図的にエラーを発生させる
    throw new Error('This is a test error triggered by the button click');
  }

  return (
    <div className="mt-8 text-center">
      <h2 className="text-xl font-semibold mb-4">Test Error Handling</h2>
      <button
        type="button"
        onClick={() => setShowError(true)}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        Trigger Runtime Error
      </button>
      <p className="mt-2 text-sm text-gray-500">Click this button to test the error boundary</p>
    </div>
  );
}
