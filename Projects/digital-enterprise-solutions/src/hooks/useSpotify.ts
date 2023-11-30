import { getCookie, setCookie } from 'cookies-next';
import { useState, useEffect } from 'react';
interface ISpotifyTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope?: string;
  }

  
const useSpotify = (): [ISpotifyTokenResponse | null, boolean] => {
    const [token, setToken] = useState<null | ISpotifyTokenResponse>(null);
    const [loading, setLoading] = useState(true);
    
    const fetchToken = async () => {

      try {
        const cookieToken = getCookie('spotify-token')

        if(cookieToken) {
          const token = (JSON.parse(cookieToken as string) as ISpotifyTokenResponse)
          setToken(token)
      
        } else {
          const response = await fetch('/api/spotifyToken');
          if(response.ok) {
            const token = await response.json() as ISpotifyTokenResponse
            setCookie('spotify-token', JSON.stringify(token))
            setToken(token)
          }
  
          console.error(`Failed to fetch Spotify token ${response.status}`);
    
        }
       
      } catch (error) {
        // Handle token fetch error
        console.error('Failed to fetch Spotify token Error:', error);
      } finally {
        setLoading(false);
      }
      
    };

  useEffect(() => {
    fetchToken()
    .catch(e => console.error(e));
  }, []);

  return [ token, loading ];
};

export default useSpotify;
