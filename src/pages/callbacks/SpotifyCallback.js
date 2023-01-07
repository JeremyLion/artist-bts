import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/actions/spotify'

const SpotifyCallback = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.spotifyUser)

  useEffect(() => {
    const hash = window.location.hash.substring(1).split("&").reduce(function(initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

    if (hash.access_token) {
      localStorage.setItem('spotify_accessToken', hash.access_token);
    }



    if(hash.access_token && hash.state) {
      // window.location.replace('/');
    }

    dispatch(fetchUser())
  }, [dispatch]);

  return (
    <div>
      Loading...
    </div>
  );
}

export default SpotifyCallback