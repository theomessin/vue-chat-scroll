module.exports = {
  branches: ['master', { name: 'alpha', prerelease: true }],
  repositoryUrl: 'git@github.com:theomessin/vue-chat-scroll.git',
  plugins: [
    ['@semantic-release/exec', { prepareCmd: 'npm run build' }],
    ['@semantic-release/github', { assets: 'dist/**/*.js' }],
    '@semantic-release/release-notes-generator',
    '@semantic-release/commit-analyzer',
    '@semantic-release/npm',
  ],
};
