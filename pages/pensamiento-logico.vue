<template>
    <div class="pensamiento-page">
        <h1>Pensamiento Lógico</h1>
        
        <div class="content">
            <!-- Actividad 1: Secuencias -->
            <div class="activity-card">
                <h2>Secuencias Numéricas</h2>
                <div v-if="!secuenciaActiva" class="intro">
                    <p>Descubre el patrón y encuentra el siguiente número</p>
                    <button @click="iniciarSecuencia" class="start-button">
                        <i class="fas fa-play"></i> Comenzar
                    </button>
                </div>
                <div v-else class="activity">
                    <div class="sequence-container">
                        <div class="number-box" 
                             v-for="(num, index) in secuenciaActual.numeros" 
                             :key="index">
                            {{ num }}
                        </div>
                        <div class="number-box mystery">
                            <i class="fas fa-question"></i>
                        </div>
                    </div>
                    <div class="hint-text" v-if="mostrarPista">
                        <i class="fas fa-lightbulb"></i> 
                        Pista: {{ secuenciaActual.pista }}
                    </div>
                    <div class="input-container">
                        <input 
                            v-model.number="respuestaSecuencia" 
                            type="number" 
                            placeholder="¿Cuál sigue?"
                            class="number-input"
                        >
                        <button @click="verificarSecuencia" class="verify-button">
                            Verificar
                        </button>
                    </div>
                    <button @click="togglePista" class="hint-button">
                        <i class="fas fa-lightbulb"></i> 
                        {{ mostrarPista ? 'Ocultar Pista' : 'Ver Pista' }}
                    </button>
                    <div v-if="mostrarResultadoSecuencia" 
                         :class="['resultado', secuenciaCorrecta ? 'correcto' : 'incorrecto']">
                        {{ mensajeSecuencia }}
                    </div>
                </div>
            </div>

            <!-- Actividad 2: Patrones Visuales -->
            <div class="activity-card">
                <h2>Patrones Visuales</h2>
                <div v-if="!patronActivo" class="intro">
                    <p>Identifica el patrón y selecciona la figura que sigue</p>
                    <button @click="iniciarPatron" class="start-button">
                        <i class="fas fa-play"></i> Comenzar
                    </button>
                </div>
                <div v-else class="activity">
                    <div class="pattern-container">
                        <div class="pattern-box" v-for="(figura, index) in patronActual.secuencia" 
                             :key="index">
                            <div :class="['figura', figura]"></div>
                        </div>
                        <div class="pattern-box mystery">
                            <i class="fas fa-question"></i>
                        </div>
                    </div>
                    <p class="instruction-text">¿Qué figura sigue?</p>
                    <div class="options-container">
                        <button 
                            v-for="opcion in patronActual.opciones" 
                            :key="opcion"
                            @click="verificarPatron(opcion)"
                            class="option-button"
                        >
                            <div :class="['figura', opcion]"></div>
                        </button>
                    </div>
                    <div v-if="mostrarResultadoPatron" 
                         :class="['resultado', patronCorrecto ? 'correcto' : 'incorrecto']">
                        {{ mensajePatron }}
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
</template>

<script>
export default {
    name: 'PensamientoLogicoPage',
    data() {
        return {
            secuenciaActiva: false,
            secuencias: [
                {
                    numeros: [2, 4, 6, 8],
                    siguiente: 10,
                    pista: "Suma 2 en cada paso"
                },
                {
                    numeros: [1, 3, 6, 10],
                    siguiente: 15,
                    pista: "La diferencia aumenta en 1 cada vez"
                },
                {
                    numeros: [2, 4, 8, 16],
                    siguiente: 32,
                    pista: "Multiplica por 2 en cada paso"
                },
                {
                    numeros: [1, 4, 9, 16],
                    siguiente: 25,
                    pista: "Son números cuadrados"
                }
            ],
            secuenciaActual: null,
            respuestaSecuencia: null,
            mostrarResultadoSecuencia: false,
            secuenciaCorrecta: false,
            mensajeSecuencia: '',
            mostrarPista: false,

            patronActivo: false,
            patrones: [
                {
                    secuencia: ['circulo', 'cuadrado', 'triangulo', 'circulo', 'cuadrado'],
                    siguiente: 'triangulo',
                    opciones: ['circulo', 'cuadrado', 'triangulo']
                },
                {
                    secuencia: ['cuadrado', 'cuadrado', 'circulo', 'cuadrado', 'cuadrado'],
                    siguiente: 'circulo',
                    opciones: ['circulo', 'cuadrado', 'triangulo']
                },
                {
                    secuencia: ['triangulo', 'circulo', 'triangulo', 'circulo'],
                    siguiente: 'triangulo',
                    opciones: ['circulo', 'cuadrado', 'triangulo']
                },
                {
                    secuencia: ['circulo', 'circulo', 'triangulo', 'triangulo'],
                    siguiente: 'cuadrado',
                    opciones: ['circulo', 'cuadrado', 'triangulo']
                },
                {
                    secuencia: ['cuadrado', 'triangulo', 'cuadrado', 'triangulo'],
                    siguiente: 'cuadrado',
                    opciones: ['circulo', 'cuadrado', 'triangulo']
                }
            ],
            patronActual: null,
            mostrarResultadoPatron: false,
            patronCorrecto: false,
            mensajePatron: ''
        }
    },
    methods: {
        volverDashboard() {
            this.$router.push('/dashboard')
        },
        iniciarSecuencia() {
            this.secuenciaActiva = true
            this.nuevaSecuencia()
        },
        nuevaSecuencia() {
            const secuenciasDisponibles = this.secuencias.filter(s => 
                !this.secuenciaActual || s.siguiente !== this.secuenciaActual.siguiente
            )
            this.secuenciaActual = secuenciasDisponibles[
                Math.floor(Math.random() * secuenciasDisponibles.length)
            ]
            this.respuestaSecuencia = null
            this.mostrarResultadoSecuencia = false
            this.mostrarPista = false
        },
        verificarSecuencia() {
            this.secuenciaCorrecta = this.respuestaSecuencia === this.secuenciaActual.siguiente
            this.mensajeSecuencia = this.secuenciaCorrecta
                ? '¡Correcto! ¡Excelente razonamiento!'
                : `El número que seguía era ${this.secuenciaActual.siguiente}`
            this.mostrarResultadoSecuencia = true
            if (this.secuenciaCorrecta) {
                setTimeout(this.nuevaSecuencia, 2000)
            }
        },
        togglePista() {
            this.mostrarPista = !this.mostrarPista
        },
        iniciarPatron() {
            this.patronActivo = true
            this.nuevoPatron()
        },
        nuevoPatron() {
            const patronesDisponibles = this.patrones.filter(p => 
                !this.patronActual || p.siguiente !== this.patronActual.siguiente
            )
            this.patronActual = patronesDisponibles[
                Math.floor(Math.random() * patronesDisponibles.length)
            ]
            this.mostrarResultadoPatron = false
        },
        verificarPatron(respuesta) {
            this.patronCorrecto = respuesta === this.patronActual.siguiente
            this.mensajePatron = this.patronCorrecto
                ? '¡Correcto! ¡Muy bien!'
                : 'Incorrecto. Intenta de nuevo'
            this.mostrarResultadoPatron = true
            if (this.patronCorrecto) {
                setTimeout(() => {
                    this.nuevoPatron()
                }, 2000)
            }
        }
    }
}
</script>

<style scoped>
.pensamiento-page {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.activity-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.sequence-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 20px 0;
    flex-wrap: wrap;
}

.number-box {
    width: 60px;
    height: 60px;
    background: #4CAF50;
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.number-box:hover {
    transform: translateY(-2px);
}

.number-box.mystery {
    background: #FF9800;
    font-size: 1.8rem;
}

.input-container {
    display: flex;
    gap: 10px;
    margin: 20px 0;
}

.number-input {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1.1rem;
    text-align: center;
}

.hint-button {
    width: 100%;
    padding: 10px;
    background: #FF9800;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 10px 0;
    transition: background-color 0.3s;
}

.hint-button:hover {
    background: #F57C00;
}

.hint-text {
    background: #FFF3E0;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    color: #F57C00;
}

.pattern-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 20px 0;
    flex-wrap: wrap;
}

.pattern-box {
    width: 60px;
    height: 60px;
    background: #f5f5f5;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.pattern-box.mystery {
    background: #FF9800;
    color: white;
    font-size: 1.8rem;
}

.figura {
    width: 40px;
    height: 40px;
}

.figura.circulo {
    background: #4CAF50;
    border-radius: 50%;
}

.figura.cuadrado {
    background: #2196F3;
    width: 40px;
    height: 40px;
}

.figura.triangulo {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 40px solid #9C27B0;
}

.instruction-text {
    text-align: center;
    color: #666;
    margin: 15px 0;
    font-size: 1.1rem;
}

.options-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}

.option-button {
    width: 70px;
    height: 70px;
    background: #f5f5f5;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.option-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.resultado {
    margin-top: 15px;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
}

.correcto {
    background: #E8F5E9;
    color: #2E7D32;
}

.incorrecto {
    background: #FFEBEE;
    color: #C62828;
}

.start-button, .verify-button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background-color 0.3s;
}

.start-button {
    width: 100%;
    justify-content: center;
}

.verify-button {
    min-width: 100px;
}

.start-button:hover, .verify-button:hover {
    background: #45a049;
}

.footer-section {
    margin-top: 30px;
    text-align: center;
}

.back-button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
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

@media (max-width: 768px) {
    .content {
        grid-template-columns: 1fr;
    }
    
    .sequence-container {
        gap: 10px;
    }
    
    .number-box {
        width: 50px;
        height: 50px;
        font-size: 1.3rem;
    }
}
</style> 