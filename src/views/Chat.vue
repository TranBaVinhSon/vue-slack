<template lang="html">
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <button @click="logout" class="btn btn-outline-primary">Logout</button>
        </div>

        <div class="col-md-8">
          content
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from 'firebase/auth';
export default {
  name: 'chat',
  methods: {
    logout() {
      console.log("logout")
      firebase.auth().signOut()
      this.$store.dispatch('setUser', null)
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
