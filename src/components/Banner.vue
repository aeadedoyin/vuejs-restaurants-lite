<template>
  <div>
    <div>
      <div
        v-if="backgroundMedia.type === 'image'">
        <img
          :alt="text"
          :src="backgroundMedia.src"
          :title="text" />
      </div>
      <div
        v-if="backgroundMedia.type === 'video'">
        <video
          autoplay
          muted>
          <source
            :src="backgroundMedia.src"
            type="video/mp4" />
        </video>
      </div>
      <div
        v-if="text">
        <span>{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    backgroundMedia: {
      type: Object,
      default: () => ({
        type: null, // image/video
        src: null
      })
    },
    text: {
      type: String,
      default: null
    },
    textDistribution: {
      type: String,
      default: 'over' // top | over | bottom
    },
    textVerticalAlignment: {
      type: String,
      default: 'center' // top | center | bottom
    },
    textHorizontalAlignment: {
      type: String,
      default: 'center' // left || center || right
    }
  },
}
</script>