// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      // Define tu estado inicial aquí
    
      comprasrealizadas : [],

      productos : [
        {
            imagen : 'https://m.media-amazon.com/images/I/71eX-4Pfk8L._AC_SX679_.jpg',
            precio :  290,
            titulo : 'Celeron Quad Core Jasper Lake N5095, pantalla FHD IPS',
            descripcion : 'Laptop',
            id : 1
        },
        {
          imagen : 'https://m.media-amazon.com/images/I/81-SFliGJmL._AC_SL1500_.jpg',
          precio : 3000,
          titulo : 'HP I9',
          descripcion : 'Laptop Hp',
          id : 2

       },
       {
        imagen : 'https://elgaleon.com.mx/cdn/shop/articles/Bisuteria_1_800x.jpg?v=1655830757',
        precio : 3000,
        titulo : 'COLLAR KING',
        descripcion : 'HGHGFHJF',
        id : 3

     } ,
     {
        imagen : 'https://elgaleon.com.mx/cdn/shop/articles/Bisuteria_1_800x.jpg?v=1655830757',
        precio : 3000,
        titulo : 'COLLAR KING',
        descripcion : 'HGHGFHJF',
        id : 4

     } 
    
       
      
      ]

    };
  },
  mutations: {
    incrementarCantidad(state, r) {
      if (state.comprasrealizadas[r]) {
        state.comprasrealizadas[r].cantidad += 1;
      } 
    },
    agregarcompra(state,producto) {
          console.log(producto)
          state.comprasrealizadas.push(producto)
          },
      
    
    eliminaritem(state,posicion) {
      state.comprasrealizadas.splice(posicion,1)
    },
  },
  actions: {
    incrementarCantidad({ commit }, r) {
      commit('incrementarCantidad', r);
    },

    agregarcompra({commit},producto){
      commit('agregarcompra',producto)
      
    },
  
    eliminaritem({ commit }) {
      commit('eliminaritem');
    },
  },
  
  getters: {
    count: (state) => state.count,
    productos: (state) => state.productos,
    compras: (state) => {
      const cantidad = state.comprasrealizadas.reduce((accumulator, objeto) => {
        return accumulator + objeto.cantidad;
      }, 0); 
      return cantidad
    },
    procomprados: (state) => state.comprasrealizadas,

    getProductoById: (state) => (id) => {
        return state.comprasrealizadas.findIndex(pro => pro.id === id);
    }

  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
  return {
    provide: {
      store: store
    }
  }
})

