import "./Medios.scss"

const Medios = () => {
    return(
        <div>
            <div>
            <h2>💳 Medios de pago</h2>
            <div className="atencion">
                <img width="35%" data-aos="zoom-in-right" src="../assets/multimedia/images/general/atencion.png" alt="atencion"/>
            </div>
            <p className="texto-comun">Alarakha Neceseres no cuenta con sistema de cuotas bancarias</p>
            <ul className="medios-item"> Podés pagar con:
              <br/>
              <br/>
              <li>Efectivo</li>
              <li>Mercado Pago</li>
              <li>Tarjetas de crédito y débito</li>
              <li>Transferencia Bancaria</li>
            </ul>
            </div>
        </div>
    )
}

export default Medios