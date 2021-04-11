import React from 'react';
import DedicamosCarousel from './DedicamosCarousel';
import "./styles.scss";
import {Link} from "react-router-dom";
import {IoIosArrowDown} from "react-icons/io";
import FadeIn from '../../utils/FadeIn';
import PrevBtn from '../../utils/PrevBtn';
import NextBtn from '../../utils/NextBtn';
import WspBtn from '../../utils/WspBtn';

const DedicamosComponent = () => {
    const videoSource = "https://player.vimeo.com/external/205643168.sd.mp4?s=7d64661b8e353ff485396e1adf14604985249821&profile_id=164&oauth2_token_id=57447761"
    return (
        <>  
        <FadeIn duration={800}>

            <video autoPlay="autoplay" loop="loop" muted className="video video-dedicamos">
                <source src={videoSource}/>
            </video> 

            <section className='aquenos-container'>

                <div className='descrip-container'>
                    <h1>A que nos dedica<span>mos?</span></h1>
                    <p>Nos dedicamos al diseño, la planificación, la construcción y la venta de viviendas de industrialización mixta, implementando procesos de construcción tradicionales, como la construcción húmeda, y modernos, como la construcción en seco, los cuales empiezan a desarrollarse en nuestra propia fábrica.
                        <br/>
                        Disponemos de nuestros propios modelos de hogares, pero también nos adaptamos a cualquier cambio o exigencia del cliente. </p>
                </div>

                <div className='carousel-cards'>
                    <DedicamosCarousel/>
                </div>

                <div className='btns-container'>
                    <Link to={"/nosotros"}>
                        <PrevBtn/>
                    </Link>
                    <Link to={"/beneficios"}>
                        <NextBtn/>
                    </Link>
                 </div>

            </section>

            <WspBtn/>
            
        </FadeIn>
        </>
    )
}

export default DedicamosComponent
