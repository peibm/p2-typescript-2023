import { Anime, getTopAnimes } from "./animes.js";
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

const renderAnimeCover = (anime: Anime) => {
  return ``;
};

const renderAnimeDetailedPage = (animes: Anime, file: string) => {
  return ``;
};

const renderTopAnimePage = async (animes: Array<Anime>, file: string) => {
  const head = renderhead(`./styles.css`, `Top Animes from AnimeList.net`);
  let animedivs = ``;
  for (const anime of animes) {
    animedivs += `<div class="anime-cover">${renderAnimeCover(anime)}</div>`;
  }

};
export default renderTopAnimePage;
