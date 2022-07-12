import { Link } from "react-router-dom"
import "./Tienda.scss"

const Tienda = () => {
    return(
        <div>
        <div>
        <h2>Cambios y devoluciones</h2>
        <p className="texto-comun">
          Los productos adquiridos a través de nuestra tienda virtual tienen cambio dentro de los 30 días de realizada la compra. Si la compra fue enviada a través de  Oca, el costo del envío no se toma en consideración para el cambio y el cliente se hará cargo de los gastos de los nuevos envíos. En el caso de que sea por una falla de fábrica, asumimos los gastos correspondientes de la reposición de su pedido en excelente estado. Para solicitar la reposición <strong><Link to={"/contacto"}>contactanos</Link></strong>.<br/>
          <br/>
          PARA REALIZAR CAMBIOS DURANTE LA PANDEMIA CONTACTARSE VIA WHATSAPP AL +54-911-624-889-37 DE LUNES A VIERNES DE 10  A 17 HS<br/>
          <br/>
          Importante! Los productos con descuento promocional, no tienen cambio.<br/>
          <br/>
          Para poder efectuar el cambio de prodcutos deberán presentarse en óptimas condiciones, de lo contrario nos reservamos el derecho de cambio.<br/>
          <br/>
          Es necesario que el producto se encuentre sin uso, en perfectas condiciones, con etiquetas y bolsas correspondientes. De lo contrario nos reservamos el derecho de cambio.<br/>
          <br/>
          No se realizan devoluciones ni reintegros de la compra. Una vez realizada la orden no se puede cancelar el mismo, así como tampoco modificarse antes de la entrega. <br/>
          <br/>
          Alarakha Neceseres garantiza todos sus productos. Cada producto se envía en su correspondiente bolsa y debidamente embalado. Si el paquete que contiene tu pedido esta abierto a la hora de ser entregado, por favor no lo aceptes y escribinos a alarakha.neceseres@gmail.com con el numero de tu orden para chequear la mercadería con el correo antes de entregarla.<br/>
          <br/>
          Una vez que te enviamos el mail avisando que nos llegó el pedido devuelto por OCA, tienen 15 días para responder el mensaje, de lo contrario se perderá el derecho a reclamo.<br/>
        </p>
        </div>
        <div>
            <h2>Envíos</h2>
            <p className="texto-comun mb-5">
              Podemos enviartelo por Correo Argentino a tu sucursal más cercana o a domicilio, con costo a cargo del cliente. Los envios por correo tardan de  3 a 10 días HÁBILES aprox. Tené en cuenta que este plazo comienza a contar desde que confirmamos tu pago.<br/>
              <br/>
              En las fechas de alta demanda, como navidad, hot sale y cybermonday los tiempos de envío pueden incrementarse debido al colapso de los correos y pedidos.<br/>
              <br/>
              Una vez que mandamos el pedido, te pasamos el número de seguimiento para que chequees en la página de Oca (www.oca.com.ar) en Tracking de paquetes.<br/>
              <br/>
              IMPORTANTE! El código te llega por mail, por las dudas revisá tu carpeta de spam.
              Si tu pedido ya llegó a destino (es decir a la sucursal de Oca que elegiste) tenés 5 DIAS para retirarlo, de lo contrario lo devuelven a la sucursal de origen.<br/>
              <br/>
              Si tu pedido fue a domicilio, tené en cuenta que la entrega se realiza en días hábiles de 8:00 a 20:00hs. La persona que recibe el pedido debe ser mayor de 18 años y presentar documento de identidad.
              Si tu pedido fue a sucursal, lo puede retirar el titular de la compra o bien una persona autorizada con documento de identidad y carta de autorización.<br/>
            </p>
        </div>
        </div>
    )
}

export default Tienda