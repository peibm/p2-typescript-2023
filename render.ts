import { Anime, getTopAnimes } from "./animes.js";
import { writeFile } from "fs/promises";

export const head = (stylepath: string, title: string) => {
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

const renderAnimeFace = (anime: Anime) => {
  return ``;
};

const renderTopAnime = (animes: Array<Anime>, file: string) => {
  return ``;
};
export default renderTopAnime;

const renderAnimeDetailed = (animes: Anime, file_prefix: string) => {
  return ``;
};
