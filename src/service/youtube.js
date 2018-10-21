import youtubeSearch from 'youtube-api-v3-search';
import config from '../config';

export const fetchVideos = async term => {
  const res = await youtubeSearch(config.api.YOUTUBE_KEY, { q: term });
  return res.items;
}