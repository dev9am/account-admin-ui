import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  onDemandEntries: {
    // ページがメモリに保持される時間（ms）
    maxInactiveAge: 60 * 1000,
    // 同時にメモリに保持されるページ数
    pagesBufferLength: 5,
  },
};

export default nextConfig;
