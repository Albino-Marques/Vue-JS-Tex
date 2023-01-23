export default{
    data(){
        return{
            // nome:'Roque Fernando M. Sousa',
            // mensagem:'Lorem Ipsum sit amet',
            inputNome:'',
            txtMensagem:'',
            comentarios:[{
                nome:'Roque Fernando M. Sousa',
                mensagem:'Lorem Ipsum sit amet'
            }]
            } 
        },
        methods:{
            adComentario(){
                this.comentarios.push({
                    nome:this.inputNome,
                    mensagem:this.txtMensagem
                })
                
                //console.log(this.comentarios[0].nome)
                //console.log(this.inputNome)
                //console.log(this.txtMensagem)
            }
        },

}