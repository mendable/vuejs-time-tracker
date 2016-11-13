<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">Total Time</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center">{{ totalTime }} hours</h1>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    totalTime () {
      return this.$store.state.totalTime
    }
  }
}
</script>
