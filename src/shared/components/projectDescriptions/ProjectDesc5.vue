<template>
  <span>
    An enterprise web app designed to provide quicker
    <span
      class="special-text"
    >assistance to road incidents</span> by providing real-time data trough webcams, graphs, map visualization and
    <span
      class="special-text"
    >route algorithms</span> that allow technicians to solve incidents in a rapid and easy way.
  </span>
</template>

<script>
export default {
  data() {
    return {
      shortVersion: true,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>