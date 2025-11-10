import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

module.exports = {
  output: 'export',
}
