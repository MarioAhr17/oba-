<template>
    <div class="geometria-page">
        <h1>Geometría Básica</h1>
        
        <!-- Actividad 1: Identificación de Figuras -->
        <div class="content">
            <div class="activity-card">
                <h2>Identificación de Figuras</h2>
                <div v-if="!identificacionActiva" class="intro">
                    <p>Aprende a reconocer diferentes figuras geométricas.</p>
                    <button @click="iniciarIdentificacion" class="start-button">Comenzar</button>
                </div>
                <div v-else class="activity">
                    <div class="shape" :class="figuraActual.clase"></div>
                    <p>¿Qué figura es esta?</p>
                    <div class="options">
                        <button 
                            v-for="opcion in opciones" 
                            :key="opcion"
                            @click="verificarRespuesta(opcion)"
                            class="option-button"
                        >
                            {{ opcion }}
                        </button>
                    </div>
                    <div v-if="mostrarResultado" :class="['resultado', respuestaCorrecta ? 'correcto' : 'incorrecto']">
                        {{ mensajeResultado }}
                    </div>
                </div>
            </div>

            <!-- Actividad 2: Cálculo de Perímetros -->
            <div class="activity-card">
                <h2>Cálculo de Perímetros</h2>
                <div v-if="!perimetroActivo" class="intro">
                    <p>Practica el cálculo de perímetros de diferentes figuras.</p>
                    <button @click="iniciarPerimetro" class="start-button">Comenzar</button>
                </div>
                <div v-else class="activity">
                    <div class="figura-container">
                        <div class="rectangulo">
                            <span class="medida-ancho">{{ ancho }}cm</span>
                            <span class="medida-alto">{{ alto }}cm</span>
                        </div>
                    </div>
                    <p>Calcula el perímetro del rectángulo</p>
                    <input 
                        v-model.number="respuestaPerimetro" 
                        type="number" 
                        placeholder="Ingresa el perímetro"
                        class="input-respuesta"
                    >
                    <button @click="verificarPerimetro" class="verify-button">Verificar</button>
                    <div v-if="mostrarResultadoPerimetro" :class="['resultado', perimetroCorrecto ? 'correcto' : 'incorrecto']">
                        {{ mensajePerimetro }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Botón de volver al final -->
        <div class="footer-section">
            <button @click="volverDashboard" class="back-button">
                <i class="fas fa-arrow-left"></i> Volver al Dashboard
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GeometriaPage',
    data() {
        return {
            // Datos para identificación de figuras
            identificacionActiva: false,
            figuras: [
                { nombre: 'Cuadrado', clase: 'cuadrado' },
                { nombre: 'Triángulo', clase: 'triangulo' },
                { nombre: 'Círculo', clase: 'circulo' },
                { nombre: 'Rectángulo', clase: 'rectangulo' }
            ],
            figuraActual: null,
            opciones: ['Cuadrado', 'Triángulo', 'Círculo', 'Rectángulo'],
            mostrarResultado: false,
            respuestaCorrecta: false,
            mensajeResultado: '',

            // Datos para cálculo de perímetros
            perimetroActivo: false,
            ancho: 0,
            alto: 0,
            respuestaPerimetro: null,
            mostrarResultadoPerimetro: false,
            perimetroCorrecto: false,
            mensajePerimetro: ''
        }
    },
    methods: {
        volverDashboard() {
            this.$router.push('/dashboard')
        },
        iniciarIdentificacion() {
            this.identificacionActiva = true
            this.nuevaFigura()
        },
        nuevaFigura() {
            this.figuraActual = this.figuras[Math.floor(Math.random() * this.figuras.length)]
            this.mostrarResultado = false
        },
        verificarRespuesta(respuesta) {
            this.respuestaCorrecta = respuesta === this.figuraActual.nombre
            this.mensajeResultado = this.respuestaCorrecta 
                ? '¡Correcto! ¡Muy bien!' 
                : `Incorrecto. Era un ${this.figuraActual.nombre}`
            this.mostrarResultado = true
            setTimeout(() => {
                if (this.respuestaCorrecta) {
                    this.nuevaFigura()
                }
            }, 2000)
        },
        iniciarPerimetro() {
            this.perimetroActivo = true
            this.nuevoPerimetro()
        },
        nuevoPerimetro() {
            this.ancho = Math.floor(Math.random() * 8) + 3
            this.alto = Math.floor(Math.random() * 8) + 3
            this.respuestaPerimetro = null
            this.mostrarResultadoPerimetro = false
        },
        verificarPerimetro() {
            const perimetroCorrecto = 2 * (this.ancho + this.alto)
            this.perimetroCorrecto = this.respuestaPerimetro === perimetroCorrecto
            this.mensajePerimetro = this.perimetroCorrecto
                ? '¡Correcto! ¡Excelente trabajo!'
                : `Incorrecto. El perímetro es ${perimetroCorrecto}cm`
            this.mostrarResultadoPerimetro = true
            if (this.perimetroCorrecto) {
                setTimeout(this.nuevoPerimetro, 2000)
            }
        }
    }
}
</script>

<style scoped>
.geometria-page {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.header-section {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
}

.back-button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    transition: background-color 0.3s;
}

.back-button:hover {
    background: #45a049;
}

h1 {
    text-align: left;
    color: #333;
    margin: 0;
}

.content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.activity-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.shape {
    width: 100px;
    height: 100px;
    margin: 20px auto;
}

.cuadrado {
    background: #4CAF50;
}

.triangulo {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #2196F3;
}

.circulo {
    border-radius: 50%;
    background: #FF9800;
}

.rectangulo {
    width: 150px;
    height: 100px;
    background: #9C27B0;
}

.options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
}

.option-button, .start-button, .verify-button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.option-button {
    background: #f0f0f0;
}

.start-button, .verify-button {
    background: #4CAF50;
    color: white;
    width: 100%;
    margin-top: 10px;
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

.figura-container {
    position: relative;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.input-respuesta {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border: 2px solid #ddd;
    border-radius: 4px;
}

.medida-ancho, .medida-alto {
    position: absolute;
    background: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 0.9em;
}

.medida-ancho {
    bottom: 40px;
}

.medida-alto {
    right: 40px;
    transform: rotate(-90deg);
}

@media (max-width: 768px) {
    .header-section {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    .content {
        grid-template-columns: 1fr;
    }
}

.footer-section {
    margin-top: 30px;
    text-align: center;
}
</style> 