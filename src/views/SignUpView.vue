<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">Regístrese</h2>
      <form @submit.prevent="signUp">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="Ingrese su email"
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
  
        <button type="submit" class="btn btn-primary w-100">
          Registro
        </button>
      </form>
      <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
        {{ errorMessage }}
      </div>
    </div>
</template>
  
  <script>
  import { auth, createUserWithEmailAndPassword } from '../firebase'; 
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: "",
      };
    },
    methods: {
      async signUp() {
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push('/Home'); 
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                this.errorMessage = "Este email ya se encuentra en uso, favor ingrese un nuevo email";
            } else {
                this.errorMessage = "Ha ocurrido un error, favor reintente mas tarde";
            }
        }
      }
    }
  };
  </script>
  
  