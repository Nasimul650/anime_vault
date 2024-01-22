import { NextResponse } from "next/server";

const DATA_SOURCE_URL = 'https://vidsrc.to/vapi/tv/new/1'

export async function GET(){
  const res = await fetch(DATA_SOURCE_URL)
  const anime = await res.json()
  return NextResponse.json(anime)
}