<template>
  <div>
    <Row type="flex" align="middle">
      <Col span="4">
        <h4 class="filter-title"><label class="labeltext">...età</label></h4>
      </Col>
      <Col>
        <Button
          class="filter-button"
          shape="circle"
          icon="ios-undo"
          @click="reset"
        ></Button>
      </Col>
    </Row>

    <Slider
      v-model="age"
      range
      :min="sliderMinAge"
      :max="sliderMaxAge"
      show-tip="hover"
    ></Slider>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// NON USARE MAI >>>>
// https://github.com/xwpongithub/vue-range-slider
// import "vue-range-component/dist/vue-range-slider.css";
// import VueRangeSlider from "vue-range-component";

export default {
  data() {
    return {
      sliderMinAge: 0,
      sliderMaxAge: 99
    }
  },
  computed: {
    age: {
      get() {
        return [
          this.$store.getters.getAppFilters.minAge,
          this.$store.getters.getAppFilters.maxAge
        ]
      },
      set(value) {
        this.$store.dispatch('setAppFiltersAge', value)
      }
    }
  },
  methods: {
    reset() {
      this.$store.dispatch('resetAppFiltersAge')
    }
  }
}
</script>

<style>
.ivu-slider-bar {
  background: var(--primary-color) !important;
}
</style>
