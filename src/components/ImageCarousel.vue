<template>
  <carousel
    id="image-slider"
    :autoplay="true"
    :autoplay-hover-pause="true"
    :per-page="3"
  >
    <slide class="slide">
      <div class="slider-image-container">
        <picture>
          <!-- <source srcset="@/assets/intro/images/imageSlider/slider_01.webp"
                media="(max-width: 992px)"
                type = "image/webp"  > -->
          <source
            srcset="@/assets/intro/images/imageSlider/slider_01_mobile.jpg"
            media="(max-width: 992px)"
            type="image/jpeg"
          >
          <img
            v-img:group-1
            src="@/assets/intro/images/imageSlider/slider_01.png"
            alt="Aerial view of a bridge crossing the Delaware River"
          >
        </picture>
      </div>
    </slide>

    <slide class="slide">
      <div class="slider-image-container">
        <picture>
          <!-- <source srcset="@/assets/intro/images/imageSlider/slider_02.webp"
                media="(max-width: 992px)" 
                type = "image/webp"  > -->
          <source
            srcset="@/assets/intro/images/imageSlider/slider_02_mobile.jpg"
            media="(max-width: 992px)" 
            type="image/jpeg"
          >
          <img
            v-img:group-1
            src="@/assets/intro/images/imageSlider/slider_02.png"
            alt="Aerial image of a tall sailing ship docked at the bank of the Delaware River"
          >
        </picture>
      </div>
    </slide>

    <slide class="slide">
      <div class="slider-image-container">
        <picture>
          <!-- <source srcset="@/assets/intro/images/imageSlider/slider_03.webp"
                  media="(max-width: 992px)"  
                  type = "image/webp" > -->
          <source
            srcset="@/assets/intro/images/imageSlider/slider_03_mobile.jpg"
            media="(max-width: 992px)"  
            type="image/jpeg"
          >
          <img
            v-img:group-1
            src="@/assets/intro/images/imageSlider/slider_03.png"
            alt="A blue heron fishing on the Delaware River"
          >
        </picture>
      </div>
    </slide>
    <slide class="slide">
      <div class="slider-image-container">
        <picture>
          <!-- <source srcset="@/assets/intro/images/imageSlider/slider_05.webp"
                  media="(max-width: 992px)" 
                  type = "image/webp" > -->
          <source
            srcset="@/assets/intro/images/imageSlider/slider_05_mobile.jpg"
            media="(max-width: 992px)" 
            type="image/jpeg"
          >
          <img
            v-img:group-1
            src="@/assets/intro/images/imageSlider/slider_05.png"
            alt="Aerial view of a wooded area on the banks of the Delaware River"
          >
        </picture>
      </div>
    </slide>
  </carousel>
</template>

<script>
  export default {
      name: 'ImageCarousel'
  }

</script>

<style scoped lang="scss">
  #image-slider {
    *:focus{
      outline: none;
    }
  }
  .slide {
    margin: 0;
    padding: 0;
    select:focus{
      outline: none;
    }
  }
  .slider-image-container {
    padding: 10px;
    display: block;
    margin: auto;
    max-width: 400px;
    img {
      width: 100%;
    }
  }
</style>
