module.exports = {
  async redirects() {
    return [
      {
        source: '/:path((?!usa$).*)',
        has: [
          {
            type: 'header',
            key: 'x-vercel-ip-country',
            value: 'US',
          },
        ],
        destination: '/usa',
        permanent: false,
      },
            {
        source: '/test',
        has: [
          {
            type: 'header',
            key: 'x-vercel-ip-country',
            value: 'GB',
          },
        ],
        destination: '/gb',
        permanent: false,
      },
    ];
  },
};
