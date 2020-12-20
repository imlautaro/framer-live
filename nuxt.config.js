export default {
    srcDir: 'src',
    components: true,
    target: 'static',
    buildModules: ['@nuxtjs/pwa'],
    server: {
        host: '0.0.0.0'
    },
    generate: {
        dir: 'docs'
    }
}