<template>
    <div class="container mt-5">
      <div v-if="user" class="text-center">
        <h1 class="display-4">Bienvenido, <span class="text-primary">{{ user.email }}</span></h1>
        <button @click="logout" class="btn btn-danger mt-3">Logout</button>
      </div>
      <div v-else class="text-center">
        <h2 class="text-warning">Por favor, ingrese a login</h2>
        <router-link to="/login" class="btn btn-primary mt-3">Ir a Login</router-link>
      </div>
    </div>
  </template>
  
  <script>
import { auth } from '../firebase';
/*
  auth.signOut().then(() => {
    this.$router.push('/login'); 
    });
    */
  
  export default {
    data() {
      return {
        user: null,
      };
    },
    created() {
      this.user = auth.currentUser; 
    },
    methods: {
      logout() {
        auth.signOut().then(() => {
          this.$router.push('/login');
        });
      }
    }
  };
  </script>
  