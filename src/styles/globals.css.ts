import './reset.css';

import { globalStyle } from '@vanilla-extract/css';

import { rem } from '@/utils/pxto';

import { theme } from './theme.css';

// global
globalStyle('body', {
  paddingInline: theme.sizes.appInlineSpace,
  paddingBottom: 'env(safe-area-inset-bottom)',
  fontFamily: theme.fonts.sans,
  overflowX: 'hidden',
  backgroundColor: theme.colors.background,
});

globalStyle('#___gatsby, #___gatsby > div', {
  height: '100%',
});

globalStyle('img', {
  userSelect: 'none',
});

globalStyle('[data-theme="dark"]', {
  colorScheme: 'dark',
});

globalStyle('[data-theme="light"]', {
  colorScheme: 'light',
});

// article
globalStyle('article', {
  ...theme.typographies.post_body,
  color: theme.colors.gray.accent,
});

globalStyle('article h1', {
  fontSize: rem(28),
  lineHeight: 1.25,
  paddingTop: rem(32),
  paddingBottom: rem(16),
});

globalStyle('article h2', {
  fontSize: rem(22.4),
  lineHeight: 1.2,
  paddingTop: rem(40),
  paddingBottom: rem(18),
});

globalStyle('article h3', {
  fontSize: rem(19.2),
  lineHeight: 1.1,
  paddingTop: rem(48),
  paddingBottom: rem(24),
});

globalStyle('article h4', {
  fontSize: rem(16),
  lineHeight: 1.3,
  paddingTop: rem(56),
  paddingBottom: rem(28),
});

globalStyle('article h5, article h6', {
  fontSize: rem(16),
  lineHeight: 1.3,
  paddingTop: rem(56),
  paddingBottom: rem(28),
});

globalStyle('article h1, article h2, article h3, article h4, article h5, article h6', {
  fontWeight: 900,
});

globalStyle('article p', {
  paddingBottom: rem(28),
});

globalStyle('article a', {
  opacity: 0.8,
  textDecoration: 'underline',
  transition: 'opacity 0.2s',
});

globalStyle('article a:hover', {
  opacity: 1,
});

globalStyle('article strong', {
  fontWeight: 600,
});

// 임시 이텔릭
globalStyle('article italic', {
  fontStyle: 'italic',
});

globalStyle('article > div[data-content] > :first-child', {
  paddingTop: 0,
});

globalStyle('article > div[data-content] > :last-child', {
  paddingBottom: 0,
});

globalStyle('article table', {
  maxWidth: '100%',
  borderCollapse: 'collapse',
  paddingBottom: rem(28),
});

globalStyle('article th, article td', {
  padding: `${rem(4)} ${rem(8)}`,
  border: `1px solid ${theme.colors.gray.accent}`,
  textAlign: 'left',
});

globalStyle('article th', {
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  fontWeight: 600,
});

globalStyle('article blockquote', {
  paddingLeft: rem(16),
  borderLeft: `${rem(4)} solid ${theme.colors.gray.accent}`,
  marginBottom: rem(16),
  color: theme.colors.gray.accent,
  fontStyle: 'italic',
});

// 임시로 padding 써서 줬음. 나중에 p테그 padding 제거해야함.
globalStyle('article blockquote > p', {
  paddingBottom: rem(4)

});

globalStyle('article ul, article ol', {
  paddingLeft: rem(24),
  paddingBottom: rem(28),
});

globalStyle('article ul li, article ol li', {
  paddingBottom: rem(8),
});

globalStyle('article p > code', {
  paddingBlock: rem(2),
  paddingInline: rem(4),
  fontFamily: theme.fonts.mono,
  fontSize: rem(14.5),
  lineHeight: 1.3,
  backgroundColor: theme.colors.border,
  borderRadius: rem(8),
});

globalStyle('article p > code::before', {
  content: '`',
});

globalStyle('article p > code::after', {
  content: '`',
});
