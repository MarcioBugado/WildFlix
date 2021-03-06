import React from 'react';
import Menu from '../../components/Menu/index.js'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
   <div>
     <Menu/>
     <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      videoDescription={"No longer to be poisoned by civilization he flees, and walks alone upon the land to become lost in the wild."}
      url={dadosIniciais.categorias[0].videos[0].url}/>
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carousel
      category={dadosIniciais.categorias[1]}
      />
      <Carousel
      category={dadosIniciais.categorias[2]}
      />
      <Footer/>

   </div>
  );
}

export default Home;