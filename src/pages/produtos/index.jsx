import axios from 'axios'
import { useEffect, useState } from 'react';
 
const Produtos = () => {
    const [pizzas,setPizzas] = useState(['Calabreza','Muçarela']);
   
    // Mapeamento das pizzas da lista (iteração)
    const listaPizzas = pizzas.map(pizza =>
        <li key={pizza}>{pizza}</li>);
    return(
    <>
        <h3>Listagem de Produtos</h3>
        <ul>
            {listaPizzas}
        </ul>
    </>
    )
}
export default Produtos