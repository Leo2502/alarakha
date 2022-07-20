import "./Medios.scss"

const Medios = () => {

    window.scrollTo(0, 0)
    
    return(
        <div>
            <div>
            <h2>💳 Medios de pago</h2>
            <p className="texto-comun">Por el momento, Alarakha Neceseres no cuenta con sistema de tarjetas de crédito</p>
            <ul className="medios-item"> Podés pagar con:
              <br/>
              <br/>
              <li>Efectivo</li>
              <li>Mercado Pago</li>
              <li>Transferencia Bancaria</li>
            </ul>
            </div>
        </div>
    )
}

export default Medios