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
- Pre-rendering
  - It improves SEO and makes your app able to work even without JS
  - By default, Next.js pre-renders every page into static HTML. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript.
  - When a page is loaded, javascript code that is necessary to the page will run and makes the page interactive. This process is called hydration.
  - There are 2 forms of pre-rendering:
    - Static Generation: generates HTML at build time. The pre-rendered HTML then reused on each request. This can be done with and without data.
    - Server-side Rendering: generates HTML on each request
  - Static Generation with Data using `getStaticProps`. By doing this, we are telling Next.js that this page has some data dependencies. It runs on build time.
    - `getStaticProps` only runs on server-side. It won't even included in the JS bundle for the browser.
  - Use `getServerSideProps` to fetch data at request time
  - If we do not need to pre-render the data, we can use a strategy called client-side rendering. Here, we statically generate the parts of the page that do not need external data. Then when the page loads, fetch the data from client using JS. This approach works well for user dashboard site, for example.
    - It is recommended to use SWR, a react hook for data fetching when fetching data on client side