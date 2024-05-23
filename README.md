This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Notes:


```bash
Regarding the permanent link, the idea was to generate a path to the joke that matched the ID in a search to the icanhazdadjoke.com API and that would give the user the link to share it with whoever he/she wanted, but due to lack of time, I couldn't get to the complete set up of the routes.

when he/she is searching, the jokes are filtered. The remove button works. However, the deleted joke, in the search function is not deleted in real time but after the list is updated.

CSS styling can be improved for a better UI. I decided on using Material-ui components to streamline some components like the "GET A JOKE" button. 
```