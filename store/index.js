import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      // Define tu estado inicial aquí
      comprasrealizadas: [],
      productos: [
        {
          imagen: 'https://m.media-amazon.com/images/I/71eX-4Pfk8L._AC_SX679_.jpg',
          precio: 290,
          titulo: 'Celeron Quad Core Jasper Lake N5095, pantalla FHD IPS',
          descripcion: 'Laptop',
          id: 1,
        },
        {
          imagen: 'https://m.media-amazon.com/images/I/81-SFliGJmL._AC_SL1500_.jpg',
          precio: 3000,
          titulo: 'HP I9',
          descripcion: 'Laptop Hp',
          id: 2,
        },
        {
          imagen: 'https://elgaleon.com.mx/cdn/shop/articles/Bisuteria_1_800x.jpg?v=1655830757',
          precio: 3000,
          titulo: 'COLLAR KING',
          descripcion: 'HGHGFHJF',
          id: 3,
        },
        {
          imagen: 'https://elgaleon.com.mx/cdn/shop/articles/Bisuteria_1_800x.jpg?v=1655830757',
          precio: 3000,
          titulo: 'COLLAR KING',
          descripcion: 'HGHGFHJF',
          id: 4,
        },
      ],
    };
  },
  mutations: {
    incrementarCantidad(state, r) {
      const index = state.comprasrealizadas.findIndex((item) => item.id === r);
      if (index !== -1) {
        state.comprasrealizadas[index].cantidad += 1;
      }
    },
    agregarcompra(state, producto) {
      const index = state.comprasrealizadas.findIndex((item) => item.id === producto.id);
      if (index !== -1) {
        // Si el producto ya está en el carrito, solo aumenta la cantidad
        state.comprasrealizadas[index].cantidad += 1;
      } else {
        // Si no está, lo agrega con cantidad inicial de 1
        state.comprasrealizadas.push({ ...producto, cantidad: 1 });
      }
    },
    eliminaritem(state, posicion) {
      state.comprasrealizadas.splice(posicion, 1);
    },
  },
  actions: {
    incrementarCantidad({ commit }, r) {
      commit('incrementarCantidad', r);
    },
    agregarcompra({ commit }, producto) {
      commit('agregarcompra', producto);
    },
    eliminaritem({ commit }, posicion) {
      commit('eliminaritem', posicion);
    },
  },
  getters: {
    productos: (state) => state.productos,
    compras: (state) => {
      return state.comprasrealizadas.reduce((acc, item) => acc + item.cantidad, 0);
    },
    procomprados: (state) => state.comprasrealizadas,
    getProductoById: (state) => (id) => {
      return state.comprasrealizadas.find((item) => item.id === id);
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  return {
    provide: {
      store: store,
    },
  };
});
