This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Lesson Learned:
- Next.js automatically optimize the application by
  - code splitting
  - client-side navigation
  - prefetching (In production, whenever `<Link>` appear in viewport it will prefetches the code in the background)
- Fast Refresh
  - Fast Refresh preserves React local state in function components (and Hooks) by default.
- Global CSS
  - You can only add global css on `pages/_app.js` because global css affects all elements on the page
