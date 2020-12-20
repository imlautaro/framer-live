<template>
    <div>
        <h1>Hello world!</h1>
        <div style="width: 500px" id="reader"></div>
        <video ref="scanner"></video>
        <button @click="scan()">Scan</button>
    </div>
</template>

<script>
import QrScanner from 'qr-scanner'

export default {
    data(){
        return {
            scanner: null
        }
    },
    mounted(){
        this.scanner = new QrScanner(this.$refs.scanner, result => console.log(result))
    },
    methods: {
        scan(){
            this.scanner.start()
        }
    }
}
</script>
