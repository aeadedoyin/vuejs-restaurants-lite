<template>
  <div class="banner" :class="bannerStyles">
    <div class="banner__wrapper">
      <div class="banner__image" v-if="backgroundMedia.type === 'image'">
        <img class="banner__image-asset" :src="backgroundMedia.src" :alt="text" :title="text" />
      </div>
      <div class="banner__video" v-if="backgroundMedia.type === 'video'">
        <video class="banner__video-asset" autoplay muted>
          <source :src="backgroundMedia.src" type="video/mp4" />
        </video>
      </div>
      <div class="banner__text" v-if="text">
        <span class="banner__text-message">{{ text }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import './Banner.scss';
</style>
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
  computed: {
    bannerStyles () {
      return {
        'banner__text-distribution-over': this.textDistribution === 'over',
        'banner__text-distribution-top': this.textDistribution === 'top',
        'banner__text-distribution-bottom': this.textDistribution === 'bottom',
        'banner__text-horizontal-left': this.textHorizontalAlignment === 'left',
        'banner__text-horizontal-center': this.textHorizontalAlignment === 'center',
        'banner__text-horizontal-right': this.textHorizontalAlignment === 'right',
        'banner__text-vertical-top': this.textVerticalAlignment === 'top',
        'banner__text-vertical-center': this.textVerticalAlignment === 'center',
        'banner__text-vertical-bottom': this.textVerticalAlignment === 'bottom',
      };
    }
  }
}
</script>
