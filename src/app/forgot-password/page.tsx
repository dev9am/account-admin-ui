'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FormEvent } from 'react';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // バリデーション
      if (!email) {
        throw new Error('メールアドレスを入力してください');
      }

      if (!email.includes('@')) {
        throw new Error('有効なメールアドレスを入力してください');
      }

      // 実際のAPIリクエストの代わりに成功をシミュレート
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 成功時の処理
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'リクエストに失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  // 送信成功後の表示
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <Image
              className="mx-auto h-12 w-auto"
              src="/next.svg"
              alt="Company Logo"
              width={180}
              height={38}
              priority
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">メールを送信しました</h2>
            <p className="mt-2 text-sm text-gray-600">
              パスワード再設定のリンクを{email}に送信しました。
              <br />
              メールを確認して、手順に従ってパスワードを再設定してください。
            </p>
            <div className="mt-6">
              <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                ログイン画面に戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Image
            className="mx-auto h-12 w-auto"
            src="/next.svg"
            alt="Company Logo"
            width={180}
            height={38}
            priority
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">パスワードをリセット</h2>
          <p className="mt-2 text-sm text-gray-600">
            登録したメールアドレスを入力してください。
            <br />
            パスワード再設定のリンクをメールでお送りします。
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email-address" className="sr-only">
              メールアドレス
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm py-2 px-4 rounded-md bg-red-50">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading && (
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                </span>
              )}
              {isLoading ? '処理中...' : 'リセットリンクを送信'}
            </button>
          </div>

          <div className="text-center">
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              ログインページに戻る
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
