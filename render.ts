import { Anime, getTopAnimes, Title } from "./animes.js";
import { writeFile } from "fs/promises";

export const renderhead = (stylepath: string, title: string) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="${stylepath}">
    </head>`;
};

function renderTitlesLI(titles: Array<Title>) {
  let output = '';

  for (const titleObj of titles) {
    output += `<li><strong>${titleObj.type}:</strong> ${titleObj.title}</li>`;
  }

  return output;
}

const renderAnimeCover = (anime: Anime) => {
  const { titles, images, rank, score } = anime;
  const default_title = titles[0].title;
  const filename = `${rank}.html`; 
  return {
    filename,
    cover_html: 
    `<a href="./${filename}" target="_blank">
    <div class="cover-container" >
      <div class="coverinfo">
        <div class="title">${default_title}</div>
        <div class="rank">#${rank}</div>
        <div class="score">${score}/10</div>
      </div>
    </div>
  </a>`,
  };
};

const renderAnimeDetailedPage = async (anime: Anime, filename: string) => {
  const head = renderhead(`./styles-detailed.css`, anime.titles[0].title);;
  const body = `<body>
  <h1>Anime Details</h1>

  <ul>
    <li>
      <span class="label">Rank:</span> ${anime.rank}
    </li>
    <li>
      <span class="label">Titles:</span>
      <ul>
        ${renderTitlesLI(anime.titles)}
      </ul>
    </li>
    <li>
      <span class="label">Image:</span>
      <img src="${anime.images.webp?.image_url}" alt="Anime image">
    </li>
    <li>
      <span class="label">Score:</span> ${anime.score}
    </li>
    <li>
      <span class="label">Synopsis:</span> ${anime.synopsis}
    </li>
    <li>
      <span class="label">Year:</span> ${anime.year}
    </li>
    <li>
      <span class="label">Episodes:</span> ${anime.episodes}
    </li>
    <li>
      <span class="label">Airing:</span> ${anime.airing}
    </li>
    <li>
      <span class="label">Status:</span> ${anime.status}
    </li>
    <li>
      <span class="label">Broadcast:</span> ${anime.broadcast}
    </li>
    <li class="trailer">
      <span class="label">Trailer:</span>
      <iframe width="560" height="315" src=${anime.trailer.embed_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </li>
  </ul>
</body>
</html>
`;
  await writeFile(`./TopAnimesHtml/`+filename, head + body);
};

const renderTopAnimePage = async (animes: Array<Anime>, file: string) => {
  const head = renderhead(`./styles_index.css`, `Top Animes from AnimeList.net`);
  let animedivs = "<body>\n";
  for (const anime of animes) {
    const { filename, cover_html } = renderAnimeCover(anime);
    animedivs += `<div class="anime-cover" style="background-image: url(${anime.images.jpg.large_image_url});">
    ${cover_html}
    </div>`;
    renderAnimeDetailedPage(anime, filename);
  }
  writeFile("./TopAnimesHtml/index.html",head + animedivs + "<body>")
};
export default renderTopAnimePage;
