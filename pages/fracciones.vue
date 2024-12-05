<template>
    <div class="fracciones-page">
        <!-- Sección de introducción -->
        <div class="intro-section" v-if="!actividadesIniciadas">
            <h1>Fracciones</h1>
            
            <div class="intro-content">
                <div class="intro-text">
                    <p class="intro-description">
                        Bienvenido al mundo de las fracciones. Aquí aprenderás a identificar, comparar y trabajar con fracciones de manera interactiva.
                    </p>
                    
                    <div class="intro-learning-objectives">
                        <h3>En esta sección aprenderás:</h3>
                        <ul>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Identificar fracciones en representaciones visuales
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Comparar diferentes fracciones
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Resolver ejercicios prácticos con fracciones
                            </li>
                        </ul>
                    </div>

                    <div class="activities-preview">
                        <h3>Actividades disponibles:</h3>
                        <div class="intro-preview-cards">
                            <div class="intro-preview-card">
                                <i class="fas fa-shapes"></i>
                                <h4>Identificación de Fracciones</h4>
                                <p>Identifica qué fracción representa cada figura</p>
                            </div>
                            <div class="intro-preview-card">
                                <i class="fas fa-balance-scale"></i>
                                <h4>Comparación de Fracciones</h4>
                                <p>Compara fracciones y determina cuál es mayor</p>
                            </div>
                        </div>
                    </div>

                    <button @click="comenzarActividades" class="start-activities-button">
                        Comenzar Actividades
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                        <!-- Agregar el botón de volver al inicio -->
        <button @click="volverDashboard" class="back-button">
            <i class="fas fa-arrow-left"></i> Volver al inicio
        </button>
            </div>
        </div>

        <!-- Tu contenido original -->
        <div v-else class="actividades-container">
            <h1>Fracciones</h1>
            
            <div class="content">
                <!-- Actividad 1: Identificación de Fracciones -->
                <div class="activity-card">
                    <h2>Identificar Fracciones</h2>
                    <div v-if="!identificacionActiva" class="intro">
                        <p>¿Qué fracción representa la parte coloreada?</p>
                        <button @click="iniciarIdentificacion" class="start-button">Comenzar</button>
                    </div>
                    <div v-else class="activity">
                        <div class="fraction-visual">
                            <div class="grid-container" :style="gridStyle">
                                <div v-for="n in fraccionActual.denominador" 
                                     :key="n"
                                     :class="['grid-item', n <= fraccionActual.numerador ? 'filled' : '']">
                                </div>
                            </div>
                        </div>
                        <p>¿Qué fracción está coloreada?</p>
                        <div class="fraction-input-container">
                            <input 
                                v-model.number="respuestaNumerador" 
                                type="number" 
                                placeholder="0"
                                class="fraction-input numerator"
                            >
                            <div class="fraction-divider"></div>
                            <input 
                                v-model.number="respuestaDenominador" 
                                type="number" 
                                placeholder="0"
                                class="fraction-input denominator"
                            >
                        </div>
                        <button @click="verificarFraccion" class="verify-button">Verificar</button>
                        <div v-if="mostrarResultado" 
                             :class="['resultado', fraccionCorrecta ? 'correcto' : 'incorrecto']">
                            {{ mensajeResultado }}
                        </div>
                    </div>
                </div>

                <!-- Actividad 2: Comparar Fracciones -->
                <div class="activity-card">
                    <h2>Comparar Fracciones</h2>
                    <div v-if="!comparacionActiva" class="intro">
                        <p>¿Cuál fracción es mayor?</p>
                        <button @click="iniciarComparacion" class="start-button">Comenzar</button>
                    </div>
                    <div v-else class="activity">
                        <div class="comparacion-container">
                            <div class="fraccion-visual">
                                <div class="grid-container small" :style="gridStyleFraccion1">
                                    <div v-for="n in fraccion1.denominador" 
                                         :key="n"
                                         :class="['grid-item', n <= fraccion1.numerador ? 'filled' : '']">
                                    </div>
                                </div>
                                <div class="fraccion-texto">
                                    {{ fraccion1.numerador }}/{{ fraccion1.denominador }}
                                </div>
                            </div>
                            
                            <div class="comparacion-botones">
                                <button @click="compararFracciones('<')" class="compare-button">&lt;</button>
                                <button @click="compararFracciones('=')" class="compare-button">=</button>
                                <button @click="compararFracciones('>')" class="compare-button">&gt;</button>
                            </div>
                            
                            <div class="fraccion-visual">
                                <div class="grid-container small" :style="gridStyleFraccion2">
                                    <div v-for="n in fraccion2.denominador" 
                                         :key="n"
                                         :class="['grid-item', n <= fraccion2.numerador ? 'filled' : '']">
                                    </div>
                                </div>
                                <div class="fraccion-texto">
                                    {{ fraccion2.numerador }}/{{ fraccion2.denominador }}
                                </div>
                            </div>
                        </div>
                        <div v-if="mostrarResultadoComparacion" 
                             :class="['resultado', comparacionCorrecta ? 'correcto' : 'incorrecto']">
                            {{ mensajeComparacion }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-section">
                <button @click="volverDashboard" class="back-button">
                    <i class="fas fa-arrow-left"></i> Volver al Dashboard
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FraccionesPage',
    data() {
        return {
            actividadesIniciadas: false, // Nueva variable
            identificacionActiva: false,
            fracciones: [
                { numerador: 1, denominador: 2 },
                { numerador: 2, denominador: 4 },
                { numerador: 3, denominador: 4 },
                { numerador: 1, denominador: 3 },
                { numerador: 2, denominador: 3 },
                { numerador: 3, denominador: 6 }
            ],
            fraccionActual: null,
            respuestaNumerador: null,
            respuestaDenominador: null,
            mostrarResultado: false,
            fraccionCorrecta: false,
            mensajeResultado: '',

            comparacionActiva: false,
            fraccion1: { numerador: 1, denominador: 2 },
            fraccion2: { numerador: 2, denominador: 3 },
            mostrarResultadoComparacion: false,
            comparacionCorrecta: false,
            mensajeComparacion: ''
        }
    },
    computed: {
        gridStyle() {
            const cols = Math.ceil(Math.sqrt(this.fraccionActual?.denominador || 1))
            return {
                gridTemplateColumns: `repeat(${cols}, 1fr)`
            }
        },
        gridStyleFraccion1() {
            const cols = Math.ceil(Math.sqrt(this.fraccion1.denominador))
            return {
                gridTemplateColumns: `repeat(${cols}, 1fr)`
            }
        },
        gridStyleFraccion2() {
            const cols = Math.ceil(Math.sqrt(this.fraccion2.denominador))
            return {
                gridTemplateColumns: `repeat(${cols}, 1fr)`
            }
        }
    },
    methods: {
        comenzarActividades() {
            this.actividadesIniciadas = true;
        },
        volverDashboard() {
            this.$router.push('/dashboard')
        },
        iniciarIdentificacion() {
            this.identificacionActiva = true
            this.nuevaFraccion()
        },
        nuevaFraccion() {
            this.fraccionActual = this.fracciones[Math.floor(Math.random() * this.fracciones.length)]
            this.respuestaNumerador = null
            this.respuestaDenominador = null
            this.mostrarResultado = false
        },
        verificarFraccion() {
            this.fraccionCorrecta = 
                this.respuestaNumerador === this.fraccionActual.numerador && 
                this.respuestaDenominador === this.fraccionActual.denominador
            this.mensajeResultado = this.fraccionCorrecta
                ? '¡Correcto! ¡Excelente trabajo!'
                : `La fracción correcta es ${this.fraccionActual.numerador}/${this.fraccionActual.denominador}`
            this.mostrarResultado = true
            if (this.fraccionCorrecta) {
                setTimeout(this.nuevaFraccion, 2000)
            }
        },
        iniciarComparacion() {
            this.comparacionActiva = true
            this.nuevaComparacion()
        },
        nuevaComparacion() {
            const denominadores = [2, 3, 4, 6, 8]
            const d1 = denominadores[Math.floor(Math.random() * denominadores.length)]
            const d2 = denominadores[Math.floor(Math.random() * denominadores.length)]
            
            this.fraccion1 = {
                numerador: Math.floor(Math.random() * (d1 - 1)) + 1,
                denominador: d1
            }
            this.fraccion2 = {
                numerador: Math.floor(Math.random() * (d2 - 1)) + 1,
                denominador: d2
            }
            
            this.mostrarResultadoComparacion = false
        },
        compararFracciones(operador) {
            const valor1 = this.fraccion1.numerador / this.fraccion1.denominador
            const valor2 = this.fraccion2.numerador / this.fraccion2.denominador
            
            let comparacionCorrecta = false
            switch(operador) {
                case '<':
                    comparacionCorrecta = valor1 < valor2
                    break
                case '=':
                    comparacionCorrecta = valor1 === valor2
                    break
                case '>':
                    comparacionCorrecta = valor1 > valor2
                    break
            }
            
            this.comparacionCorrecta = comparacionCorrecta
            this.mensajeComparacion = comparacionCorrecta
                ? '¡Correcto! ¡Excelente comparación!'
                : 'Incorrecto. Intenta de nuevo'
            this.mostrarResultadoComparacion = true
            
            if (comparacionCorrecta) {
                setTimeout(this.nuevaComparacion, 2000)
            }
        }
    }
}
</script>

<style scoped>
/* 1. Estilos base */
.fracciones-page {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

/* 2. Estilos de la introducción (con prefijo intro-) */
.intro-section {
    text-align: center;
    padding: 40px 20px;
}

.intro-content {
    max-width: 800px;
    margin: 0 auto;
}

.intro-description {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
    margin: 20px 0;
}

.intro-learning-objectives {
    text-align: left;
    background: #f5f5f5;
    padding: 25px;
    border-radius: 12px;
    margin: 30px 0;
}

.intro-learning-objectives h3 {
    color: #333;
    margin-bottom: 15px;
}

.intro-learning-objectives ul {
    list-style: none;
    padding: 0;
}

.intro-learning-objectives li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 12px 0;
    color: #555;
}

.intro-learning-objectives i {
    color: #4CAF50;
}

.intro-preview-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.intro-preview-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: center;
}

.intro-preview-card i {
    font-size: 2rem;
    color: #4CAF50;
    margin-bottom: 15px;
}

.intro-preview-card h4 {
    color: #333;
    margin-bottom: 10px;
}

.intro-preview-card p {
    color: #666;
    font-size: 0.9rem;
}

.start-activities-button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 30px auto;
    cursor: pointer;
    transition: all 0.3s ease;
}

.start-activities-button:hover {
    background: #45a049;
    transform: translateY(-2px);
}

/* 3. Estilos originales de las actividades */
.actividades-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.actividades-container h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 2rem;
}

.content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.activity-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.activity-card h2 {
    color: #333;
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.fraction-visual {
    margin: 20px auto;
    text-align: center;
}

.grid-container {
    display: grid;
    gap: 4px;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    padding: 10px;
    background: #f5f5f5;
    border-radius: 8px;
}

.grid-container.small {
    width: 150px;
    height: 150px;
}

.grid-item {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.grid-item.filled {
    background: #4CAF50;
    border-color: #45a049;
}

.fraction-input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin: 20px auto;
    width: 80px;
}

.fraction-input {
    width: 100%;
    text-align: center;
    padding: 8px;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 1.2rem;
}

.fraction-divider {
    width: 100%;
    height: 2px;
    background: #333;
}

.verify-button, .start-button {
    width: 100%;
    padding: 12px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
    margin-top: 15px;
}

.verify-button:hover, .start-button:hover {
    background: #45a049;
}

.resultado {
    margin-top: 15px;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
}

.correcto {
    background: #E8F5E9;
    color: #2E7D32;
}

.incorrecto {
    background: #FFEBEE;
    color: #C62828;
}

/* Estilos para la comparación de fracciones */
.comparacion-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
}

.fraccion-visual {
    text-align: center;
}

.fraccion-texto {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
}

.comparacion-botones {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.compare-button {
    padding: 10px 20px;
    font-size: 1.2rem;
    background: #f0f0f0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.compare-button:hover {
    background: #e0e0e0;
}

@media (max-width: 768px) {
    .content {
        grid-template-columns: 1fr;
    }
    
    .comparacion-container {
        flex-direction: column;
    }
    
    .comparacion-botones {
        flex-direction: row;
    }
}

.footer-section {
    margin-top: 40px;
    text-align: center;
}

.back-button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.back-button:hover {
    background: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.back-button i {
    font-size: 1.1rem;
}
</style> 