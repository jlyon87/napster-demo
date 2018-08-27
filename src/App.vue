<template>
  <div class="container">
    <div class="row justify-content-center" >
      <div class="col text-center">
        <header>
          <h1>Napster Top Tracks</h1>
        </header>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col text-center">
        <section>
          <app-player></app-player>
        </section>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6" >

        <ul class="list-group">
          <li class="list-group-item list-group-item-action"
            v-for="track in tracks" :key="track.id" >

            <app-card :track="track" ></app-card>
          </li>
        </ul>


      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import Player from './components/Player'

import { getTopTracks } from './api/napster-api'

export default {
  name: 'app',
  data () {
    return {
      tracks: []
    }
  },

  methods: {
    setTracks (newTracks) {
      this.tracks = newTracks.slice(0)
    }
  },

  components: {
    appCard: Card,
    appPlayer: Player
  },

  mounted () {
    getTopTracks()
      .then(tracks => {
        this.setTracks(tracks)
        return tracks[0].albumId
      })
  }
}
</script>

<style scoped>
  li {
    cursor: pointer;
  }
</style>
