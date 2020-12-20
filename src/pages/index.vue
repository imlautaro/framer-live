<template>
    <div>
        <h1>Hello world!</h1>
        <div style="width: 500px" id="reader"></div>
        <video ref="scanner"></video>
        <button @click="scan()">Scan</button>
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
    },
    methods: {
        scan(){
            this.scanner.start()
        }
    }
}
</script>
