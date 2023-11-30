// import { NextApiHandler, type NextApiRequest, type NextApiResponse } from "next";

interface ISpotifyTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope?: string;
  }

import { type NextApiRequest, type NextApiResponse } from 'next'

 
export default async function handler (req: NextApiRequest, res: NextApiResponse) {

    const clientId = process.env.NEXT_SPOTIFY_CLIENT_ID as string
    const clientSecret = process.env.NEXT_SPOTIFY_CLIENT_SECRET as string

    const authString = `${clientId}:${clientSecret}`;
    const base64AuthString = Buffer.from(authString).toString('base64');

    const authOptions = {
        method: 'POST',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
      };

   
      const response = await fetch(authOptions.url, {
        method: authOptions.method,
        headers: authOptions.headers,
        body: authOptions.body,
      })
    
      console.log({ response })
      if(response.ok) {
          
        const data = (await response.json() as ISpotifyTokenResponse)
        return res.status(200).json(data)
    }
    return res.status(500).json({ status: response.status })
      
}
 
