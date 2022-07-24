async function extractedData({ links, browser, scraper }) {
    const tempArray = Array.from({ length: Math.ceil(links.length / 50) }, (_, i) => i + 1)
    const promises = tempArray.map(async (slice) => {
        const start = slice * 50;
        const end = (slice + 1) * 50;
        const linksSlice = links.slice(start, end);
        return await scraper(browser, linksSlice);
    })
    await Promise.all(promises);
}