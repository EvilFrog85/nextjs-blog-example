This is a starter template for [Learn Next.js](https://nextjs.org/learn).

Start dev:
npm run dev




You should ask yourself: "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use Server-side Rendering. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data.


Static Generation with Data using getStaticProps

How does it work? Well, in Next.js, when you export a page component, you can also export an async function called getStaticProps. If you do this, then:

    getStaticProps runs at build time in production, and…
    Inside the function, you can fetch external data and send it as props to the page.