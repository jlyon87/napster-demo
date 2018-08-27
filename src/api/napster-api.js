import axios from 'axios'
import { apikey, baseURL } from './napster.config'

const napster = axios.create({
  params: { apikey },
  baseURL
})

export const getTopTracks = () => {
  const topTracks = '/tracks/top'
  return napster.get(topTracks)
    .then(res => res.data.tracks)
}

export const getAlbumImageById = albumId => {
  const albumImgPath = `/albums/${albumId}/images`
  return napster.get(albumImgPath)
}
