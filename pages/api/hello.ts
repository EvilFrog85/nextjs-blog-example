import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: 'Hello' })
}

/*
The API Route code will not be part of your client bundle, so you can safely write server-side code.

Static Generation is useful when your pages fetch data from a headless CMS. However, it’s not 
ideal when you’re writing a draft on your headless CMS and want to preview the draft immediately 
on your page. You’d want Next.js to render these pages at request time instead of build time and 
fetch the draft content instead of the published content. You’d want Next.js to bypass Static 
Generation only for this specific case.

Next.js has a feature called Preview Mode to solve the problem above, and it utilizes API Routes. 
To learn more about it take a look at our Preview Mode documentation.

    req is an instance of http.IncomingMessage, plus some pre-built middlewares.
    res is an instance of http.ServerResponse, plus some helper functions.
    
    You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write 
    your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).
*/