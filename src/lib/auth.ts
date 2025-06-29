'use client';

// ローカルストレージキー
const AUTH_TOKEN_KEY = 'auth_token';
const USER_DATA_KEY = 'user_data';

// ユーザーデータの型定義
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

// ログイン状態の確認
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(AUTH_TOKEN_KEY) !== null;
};

// ログイン処理（モック）
export const login = async (email: string, password: string): Promise<User> => {
  // 実際にはAPIリクエストを行うが、ここではモックデータを返す
  return new Promise((resolve, reject) => {
    // バリデーション
    if (!email || !password) {
      reject(new Error('メールアドレスとパスワードを入力してください'));
      return;
    }

    if (!email.includes('@')) {
      reject(new Error('有効なメールアドレスを入力してください'));
      return;
    }

    if (password.length < 6) {
      reject(new Error('パスワードは6文字以上で入力してください'));
      return;
    }

    // 成功レスポンスをシミュレート
    setTimeout(() => {
      // モックユーザーデータ
      const user: User = {
        id: '12345',
        email,
        name: email.split('@')[0],
        role: 'admin',
      };

      // トークンとユーザーデータを保存
      localStorage.setItem(AUTH_TOKEN_KEY, `mock_token_${Date.now()}`);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));

      resolve(user);
    }, 1000); // 1秒の遅延
  });
};

// ログアウト処理
export const logout = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(USER_DATA_KEY);
};

// ユーザー情報の取得
export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;

  const userData = localStorage.getItem(USER_DATA_KEY);
  if (!userData) return null;

  try {
    return JSON.parse(userData) as User;
  } catch (_) {
    return null;
  }
};
