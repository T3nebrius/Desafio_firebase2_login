<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-center mb-4">Login Firebase</h3>
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Ingrese su dirección de email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Ingrese su password"
                    required
                  />
                </div>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
                <div class="text-center mt-3">
                  <p>
                    Si no tiene una cuenta, ingrese aquí <a href="/signup">Registro</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
import { auth, signInWithEmailAndPassword } from '../firebase'; // Importa el auth de Firebase

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "", 
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push({ name: 'Home' });
      } catch (error) {
        this.errorMessage = "Invalid email or password. Please try again.";
      }
    },
  },
};
</script>
