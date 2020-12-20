<template>
    <div>
        <h1>Hello world!</h1>
        <div style="width: 500px" id="reader"></div>
        <video ref="scanner" @click="stopScanner()"></video>
        <button @click="scan()">Scan</button>
        <iframe v-bind:src="result"></iframe>
        {{ result }}
    </div>
</template>

<script>
import QrScanner from 'qr-scanner'

QrScanner.WORKER_PATH = '/qr-scanner-worker.min.js'

export default {
    data(){
        return {
            scanner: null,
            result: null
        }
    },
    mounted(){
        this.scanner = new QrScanner(this.$refs.scanner, result => {
            this.result = result
        })
        this.scanner.start()
    },
    methods: {
        startScanner(){
            this.scanner.start()
        },
        stopScanner(){
            this.scanner.stop()
        }
    }
}
</script>
