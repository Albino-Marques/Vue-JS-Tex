export default {
    data() {
        return {
            m1: 'Hello World',
            nome: '',
            inputUser_nome: ''
        }
    },
    methods: {
        inputUser_click(e) {
            e.preventDefault()
            this.nome = this.inputUser_nome
            // console.log(this.inputUser_nome);
        }
    }
}