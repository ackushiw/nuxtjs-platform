<template>
<div>
    Works!
    <pre>{{ $root.platform_os }}</pre>
    <pre>{{ os }}</pre>
    <pre>{{ $root.$platform }}</pre>

</div>
</template>

<script>
export default {
  data() {
    return {
      os: null
    }
  },
  mounted() {
    this.os = this.$root.$platform.os
    this.$root.platform_os = 'haha'
  }
}
</script>
