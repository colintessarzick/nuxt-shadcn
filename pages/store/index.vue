<script lang="ts" setup>
import {listDevices} from "~/helpers/api/operations/listDevices";

onMounted(() => {
  listDevices()
})
</script>

<template>
  <div>
    Page: store
  </div>
</template>

<style scoped></style>
