import './produtos.css'
const CadastroProduto = () =>{
    
    
    return (
        <div>ClassName= "Produtos">
       <h3> Cadastro de Produtos</h3>
        
        <input type="text" id="id"/>
         <input type="text" id="nome"/>
          <input type="text" id="descricao"/>
           <input type="text" id="preco"/>
            <input type="text" id="tipo"/>
             <input type="text" id="categoria"/>


             <input type="button" id="cadastrar"
                onClick = {()=>{alert('vamos cadastrar produtos')}}/>

        <div/>





    )
}
export default CadastroProduto