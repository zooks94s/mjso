<template lang="pug">
  .contents-heading
    slot
</template>

<style lang="scss" scoped>
.contents-heading {
  height: 50vh;
  padding: 140px calcRelativeWith($header-width, $wrapper-width) 110px;
}
</style>
