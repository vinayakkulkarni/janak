<template>
  <div>
    My Brand New <%= name %> widget
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  export default defineComponent({
    name: '<%= name %>',
  });
</script>
