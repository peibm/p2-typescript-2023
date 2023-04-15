import  renderTopAnimePage from "./render.js";
import { getTopAnimes, AnimeQuery } from "./animes.js";


const query: AnimeQuery = {
    type: "tv",
    filter: "bypopularity",
    page: 1,
    limit: 1,
  };

const animes = await getTopAnimes(query);

await renderTopAnimePage(animes, `index.html`);
