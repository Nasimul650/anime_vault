"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

//https://vidsrc.to/vapi/tv/new/1
//https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
