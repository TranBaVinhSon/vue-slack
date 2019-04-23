<template lang="html">
  <div>
    <div class="jumbotron bg-primary text-white text-center">
      <h2 class="lead display-3">#SLACK#</h2>
      <p>Realtime communication at it's best</p>
    </div>

    <div class="alert alert-info" v-if="loading">
      Processing....
    </div>

    <!-- show errors -->
    <div class="alert alert-danger" v-if="hasErrors">
      <div v-for="error in errors">
        {{ error }}
      </div>
    </div>

    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col text-center">
          <button @click="loginWithGoogle" class="btn btn-outline-danger btn-lg">Login with google</button>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col text-center">
          <button class="btn btn-outline-primary btn-lg">Login with Twitter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from 'firebase/auth'
export default {
  name: 'login',
  data() {
    return {
      errors: [],
      loading: false
    }
  },
  computed: {
    hasErrors() {
      return this.errors.length > 0
    }
  },
  methods: {
    loginWithGoogle() {
      console.log("google")
      this.loading = true
      this.errors = []

      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((response) => {
          console.log(response.user)

          // dispatch setUser action
          this.$store.dispatch('setUser', response.user)
          // then redirect user to '/' page
          this.$router.push({
            path: '/'
          })
        })
        .catch(error => {
          this.errors.push(error.message)
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
