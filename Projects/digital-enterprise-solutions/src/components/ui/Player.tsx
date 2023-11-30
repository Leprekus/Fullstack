import React, { useEffect, useState } from 'react'
declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: () => void;
  
  }
}
import SpotifyWebApi from 'spotify-web-api-js'
import useSpotify from '~/hooks/useSpotify'
export default function Player() {
  const [ token, loading ] = useSpotify()


  return (
    <>
    <div className="w-[360px] h-36 rounded-md border border-slate-800 flex items-center gap-6 px-2">
    <div className="w-[124px] h-[124px] bg-orange-50 rounded-md"/>
    <div className="flex flex-col gap-2 justify-start h-full py-6">
        <h1>Untitled</h1>
        <p className="text-xs text-zinc-400">Album • Artist</p>
        <div className="flex gap-2 p-2">
        <button className="w-8 h-8 rounded-full border border-slate-800">r</button>
        <button className="w-8 h-8 rounded-full border border-slate-800">p</button>
        <button className="w-8 h-8 rounded-full border border-slate-800">f</button>
        </div>
    </div>
    
   
    </div>
    </>
  )
}
