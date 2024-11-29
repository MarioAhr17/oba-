<template>
    <div class="activity-page">
        <h1 class="main-title">Operaciones Básicas</h1>
        
        <div class="activities-container">
            <!-- Tabla de Suma -->
            <div class="activity-card">
                <h3>Tabla de Suma</h3>
                <div class="table-activity">
                    <div class="number-select">
                        <label>Sumar con: </label>
                        <select v-model="selectedNumberSum" @change="generateSum">
                            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                        </select>
                    </div>
                    <div class="exercise" v-if="!showResultSum">
                        <p>{{ sumProblem }}</p>
                        <input 
                            type="number" 
                            v-model.number="userAnswerSum" 
                            placeholder="Tu respuesta"
                            class="answer-input"
                        >
                        <button @click="checkSum" class="solve-button">Verificar</button>
                    </div>
                    <div v-else class="result" :class="isCorrectSum ? 'correct' : 'incorrect'">
                        <p>{{ resultMessageSum }}</p>
                        <button @click="nextSum" class="next-button">Siguiente</button>
                    </div>
                </div>
            </div>

            <!-- Tabla de Resta -->
            <div class="activity-card">
                <h3>Tabla de Resta</h3>
                <div class="table-activity">
                    <div class="number-select">
                        <label>Restar desde: </label>
                        <select v-model="selectedNumberRest" @change="generateRest">
                            <option v-for="n in 20" :key="n" :value="n">{{ n }}</option>
                        </select>
                    </div>
                    <div class="exercise" v-if="!showResultRest">
                        <p>{{ restProblem }}</p>
                        <input 
                            type="number" 
                            v-model.number="userAnswerRest" 
                            placeholder="Tu respuesta"
                            class="answer-input"
                        >
                        <button @click="checkRest" class="solve-button">Verificar</button>
                    </div>
                    <div v-else class="result" :class="isCorrectRest ? 'correct' : 'incorrect'">
                        <p>{{ resultMessageRest }}</p>
                        <button @click="nextRest" class="next-button">Siguiente</button>
                    </div>
                </div>
            </div>

            <!-- Tabla de Multiplicación -->
            <div class="activity-card">
                <h3>Tabla de Multiplicar</h3>
                <div class="table-activity">
                    <div class="number-select">
                        <label>Multiplicar por: </label>
                        <select v-model="selectedNumberMult" @change="generateMultiplication">
                            <option v-for="n in 12" :key="n" :value="n">{{ n }}</option>
                        </select>
                    </div>
                    <div class="exercise" v-if="!showResultMult">
                        <p>{{ multiplicationProblem }}</p>
                        <input 
                            type="number" 
                            v-model.number="userAnswerMult" 
                            placeholder="Tu respuesta"
                            class="answer-input"
                        >
                        <button @click="checkMultiplication" class="solve-button">Verificar</button>
                    </div>
                    <div v-else class="result" :class="isCorrectMult ? 'correct' : 'incorrect'">
                        <p>{{ resultMessageMult }}</p>
                        <button @click="nextMultiplication" class="next-button">Siguiente</button>
                    </div>
                </div>
            </div>

            <!-- Tabla de División -->
            <div class="activity-card">
                <h3>Tabla de División</h3>
                <div class="table-activity">
                    <div class="number-select">
                        <label>Dividir entre: </label>
                        <select v-model="selectedNumberDiv" @change="generateDivision">
                            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                        </select>
                    </div>
                    <div class="exercise" v-if="!showResultDiv">
                        <p>{{ divisionProblem }}</p>
                        <input 
                            type="number" 
                            v-model.number="userAnswerDiv" 
                            placeholder="Tu respuesta"
                            class="answer-input"
                        >
                        <button @click="checkDivision" class="solve-button">Verificar</button>
                    </div>
                    <div v-else class="result" :class="isCorrectDiv ? 'correct' : 'incorrect'">
                        <p>{{ resultMessageDiv }}</p>
                        <button @click="nextDivision" class="next-button">Siguiente</button>
                    </div>
                </div>
            </div>
        </div>

        <button class="back-button" @click="volverAlDashboard">Volver al Dashboard</button>
    </div>
</template>

<script>
export default {
    name: 'OperacionesPage',
    data() {
        return {
            // Suma
            selectedNumberSum: 1,
            currentAddend: 1,
            userAnswerSum: null,
            showResultSum: false,
            isCorrectSum: false,
            resultMessageSum: '',

            // Resta
            selectedNumberRest: 10,
            currentSubtrahend: 1,
            userAnswerRest: null,
            showResultRest: false,
            isCorrectRest: false,
            resultMessageRest: '',

            // Multiplicación
            selectedNumberMult: 1,
            currentMultiplier: 1,
            userAnswerMult: null,
            showResultMult: false,
            isCorrectMult: false,
            resultMessageMult: '',

            // División
            selectedNumberDiv: 1,
            currentDividend: 1,
            userAnswerDiv: null,
            showResultDiv: false,
            isCorrectDiv: false,
            resultMessageDiv: ''
        }
    },
    computed: {
        sumProblem() {
            return `${this.selectedNumberSum} + ${this.currentAddend} = ?`
        },
        restProblem() {
            return `${this.selectedNumberRest} - ${this.currentSubtrahend} = ?`
        },
        multiplicationProblem() {
            return `${this.selectedNumberMult} × ${this.currentMultiplier} = ?`
        },
        divisionProblem() {
            return `${this.currentDividend} ÷ ${this.selectedNumberDiv} = ?`
        }
    },
    methods: {
        volverAlDashboard() {
            this.$router.push('/dashboard')
        },

        // Métodos para Suma
        generateSum() {
            this.currentAddend = Math.floor(Math.random() * 10) + 1
            this.userAnswerSum = null
            this.showResultSum = false
        },
        checkSum() {
            const correctAnswer = this.selectedNumberSum + this.currentAddend
            this.isCorrectSum = this.userAnswerSum === correctAnswer
            this.resultMessageSum = this.isCorrectSum 
                ? '¡Correcto! ¡Muy bien!' 
                : `Incorrecto. La respuesta correcta es ${correctAnswer}`
            this.showResultSum = true
        },
        nextSum() {
            this.generateSum()
        },

        // Métodos para Resta
        generateRest() {
            this.currentSubtrahend = Math.floor(Math.random() * this.selectedNumberRest) + 1
            this.userAnswerRest = null
            this.showResultRest = false
        },
        checkRest() {
            const correctAnswer = this.selectedNumberRest - this.currentSubtrahend
            this.isCorrectRest = this.userAnswerRest === correctAnswer
            this.resultMessageRest = this.isCorrectRest 
                ? '¡Correcto! ¡Muy bien!' 
                : `Incorrecto. La respuesta correcta es ${correctAnswer}`
            this.showResultRest = true
        },
        nextRest() {
            this.generateRest()
        },

        // Métodos para Multiplicación
        generateMultiplication() {
            this.currentMultiplier = Math.floor(Math.random() * 10) + 1
            this.userAnswerMult = null
            this.showResultMult = false
        },
        checkMultiplication() {
            const correctAnswer = this.selectedNumberMult * this.currentMultiplier
            this.isCorrectMult = this.userAnswerMult === correctAnswer
            this.resultMessageMult = this.isCorrectMult 
                ? '¡Correcto! ¡Excelente!' 
                : `Incorrecto. La respuesta correcta es ${correctAnswer}`
            this.showResultMult = true
        },
        nextMultiplication() {
            this.generateMultiplication()
        },

        // Métodos para División
        generateDivision() {
            // Generamos un dividendo que sea múltiplo del divisor
            this.currentDividend = this.selectedNumberDiv * (Math.floor(Math.random() * 10) + 1)
            this.userAnswerDiv = null
            this.showResultDiv = false
        },
        checkDivision() {
            const correctAnswer = this.currentDividend / this.selectedNumberDiv
            this.isCorrectDiv = this.userAnswerDiv === correctAnswer
            this.resultMessageDiv = this.isCorrectDiv 
                ? '¡Correcto! ¡Excelente!' 
                : `Incorrecto. La respuesta correcta es ${correctAnswer}`
            this.showResultDiv = true
        },
        nextDivision() {
            this.generateDivision()
        }
    },
    mounted() {
        this.generateSum()
        this.generateRest()
        this.generateMultiplication()
        this.generateDivision()
    }
}
</script>

<style scoped>
.activity-page {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.main-title {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.activities-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
}

.activity-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.activity-card h3 {
    color: #2c3e50;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 10px;
}

.table-activity {
    padding: 10px;
}

.number-select {
    margin-bottom: 15px;
    text-align: center;
}

.number-select select {
    padding: 5px;
    margin-left: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
}

.exercise {
    text-align: center;
}

.answer-input {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border: 2px solid #ddd;
    border-radius: 4px;
    text-align: center;
}

.solve-button, .next-button {
    width: 100%;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;
}

.solve-button {
    background-color: #4CAF50;
    color: white;
}

.next-button {
    background-color: #FF9800;
    color: white;
}

.result {
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    text-align: center;
}

.correct {
    background-color: #E8F5E9;
    color: #2E7D32;
}

.incorrect {
    background-color: #FFEBEE;
    color: #C62828;
}

.back-button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.back-button:hover {
    background-color: #45a049;
}
</style> 