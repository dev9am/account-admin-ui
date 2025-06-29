'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <Image
              className="mx-auto h-12 w-auto"
              src="/next.svg"
              alt="Company Logo"
              width={180}
              height={38}
              priority
            />
            <CardTitle className="mt-6 text-3xl font-extrabold">メールを送信しました</CardTitle>
            <CardDescription className="mt-2">
              パスワード再設定のリンクを{email}に送信しました。
              <br />
              メールを確認して、手順に従ってパスワードを再設定してください。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/login" className="font-medium text-primary hover:text-primary/90">
              ログイン画面に戻る
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <Image
            className="mx-auto h-12 w-auto"
            src="/next.svg"
            alt="Company Logo"
            width={180}
            height={38}
            priority
          />
          <CardTitle className="mt-6 text-3xl font-extrabold">パスワードをリセット</CardTitle>
          <CardDescription className="mt-2">
            登録したメールアドレスを入力してください。
            <br />
            パスワード再設定のリンクをメールでお送りします。
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email-address">メールアドレス</Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="text-destructive text-sm py-2 px-4 rounded-md bg-destructive/10">
                {error}
              </div>
            )}

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  処理中...
                </span>
              ) : (
                'リセットリンクを送信'
              )}
            </Button>

            <div className="text-center">
              <Link href="/login" className="font-medium text-primary hover:text-primary/90">
                ログインページに戻る
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
