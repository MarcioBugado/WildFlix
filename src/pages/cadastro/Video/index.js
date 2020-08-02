import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../PageDefault';

function CadastroVideo(){
    return(
       <PageDefault>
           <h1>Cadastro de Vídeo</h1>

           <Link to="/cadastro/categoria">
               Nova Categoria
           </Link>
       </PageDefault>
    )
}

export default CadastroVideo;