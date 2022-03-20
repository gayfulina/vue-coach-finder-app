<template>
  <section>
    <base-card>
      <h2>Page not Found</h2>
      <p>This page maybe not found - maybe check out all our
        <router-link to='/coaches'> coaches</router-link>
      </p>
    </base-card>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped>

</style>