<template>
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-4">
        <img :src="imgHref" alt="" class="rounded d-block">
      </div>
      <div class="col">
        <div class="container">
          <div class="row">
            <div class="col">
              {{ track.name }}
            </div>
          </div>
          <div class="row">
            <div class="col">
              <i>{{ track.artistName }}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAlbumImageById } from '../api/napster-api'

export default {
  name: 'card',
  data () {
    return {
      imgHref: ''
    }
  },
  props: [ 'track' ],

  methods: {
    setImage (newImage) {
      this.imgHref = newImage
    }
  },

  mounted () {
    getAlbumImageById(this.track.albumId)
      .then(res => res.data.images)
      .then(images => images.find(img => img.width === 170))
      .then(image => image.url)
      .then(this.setImage)
      .catch(err => {
        console.error('Error fetching image', err)
        this.setImage('')
      })
  }
}
</script>

<style scoped>
  img {
    max-height: 5rem;
  }
</style>
