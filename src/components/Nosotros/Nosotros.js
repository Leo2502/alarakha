import './Nosotros.scss'

export const Nosotros = () => {
    return(
        <div>
        <div className="nosotros">
            <div>
                <h2>Nuestra Historia</h2>
                <p className="presentacion"><strong>Alarakha Neceseres</strong> nació del hobby que me tiene loca desde chica: el diseño y la costura... "CREAR"<br/>
                En esta tienda vas a encontrar moda con diseños creativos y sobretodo llenos de amor<br/>
                ¡Que la disfrutes!
                </p>
            </div>
            <div>
                <h2>Bio</h2>
                <div data-aos="fade-up" class="atencion m-0 p-0">
                <img className="foto-bio" src="../assets/multimedia/images/general/yo.png" alt="Karen-Alarakha"/>
                </div>
                <p className="texto-comun">Soy Karen, una chica nacida en Villa Adelina de unos treintantos... amante del fútbol y la moda. 
                <br/>
                <br/>
                Desde pequeña me encantaba copiar a mi abuela mientras cosía o tejía... así aprendí a surcir mis propias cosas que rompía en la primaria, hasta que empecé a hacer mis propias cartucheras.
                <br/>
                Luego pasé a fabricar neceseres para mi uso personal y a mis amigas les gustó tanto que comenzaron a pedirme productos personalizados, para después alentarme a crear mi emprendimiento...<br/>
                De a poco gente de cerca que no conocía contactaba por Facebook para pedirme diseños particulares que hacía con gusto... Poco a poco los círculos crecieron y las solicitudes y pedidos pasaron a ser al por mayor, después del interior ¡Una locura para mí!... y acá estoy: <strong>FELIZ!</strong>
                <br/>
                <br/>
                Feliz de poder llegar a tan lejos con mis diseños y trabajos. Gracias por confiar y acompañarme en este camino! ♥
                </p>
            </div>
            <div>
                <h2>Producción</h2>
                <p className="texto-comun mb-5">Siempre fui muy exigente con la calidad de las cosas en la vida, y mucho más ahora en Alarakha! Tanto las telas como los cierres, abrojos, botones, etc. son de un magnífico nivel, de buena calidad y sobretodo <i>durabilidad</i>.<br/>
                <strong>No te vas a arrepentir!</strong>
                </p>
            </div>
        </div>
        </div>
    )
}