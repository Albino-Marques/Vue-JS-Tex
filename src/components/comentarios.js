export default {
    data() {
        return {
            inputNome: '',
            txtMensagem: '',
            comentarios: []
        }
    },
    methods: {
        addComentario() {
            if (this.txtMensagem.trim() === '') return
            this.comentarios.push({ nome: this.inputNome, mensagem: this.txtMensagem });
            this.inputNome = '';
            this.txtMensagem = '';

        },
        excluir(n) {
            this.comentarios.splice(n, 1);
        }
    },
    computed: {
        getComentarios() {
            return this.comentarios.map(coment => ({
                ...coment,
                nome: coment.nome.trim() === '' ? "Usuário anônimo." : coment.nome
            }))
        }
    }
}