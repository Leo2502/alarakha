import { Formik } from "formik"
import * as Yup from 'yup'
import { collection, addDoc, writeBatch } from "firebase/firestore"
import { dataBase } from "../../firebase/config"
import swal from 'sweetalert'

const schema = Yup.object().shape({
    email: Yup.string()
                .required('Este campo es obligatorio')
                .email('Formato de email inválido'),
    pregunta: Yup.string()
                .required('Este campo es obligatorio')
                .min(2, 'La pregunta es demasiado corta')
                .max(120, 'Máximo 120 caracteres'),
    
})

const Preguntas = ({item}) => {

    const generarPregunta = (values, onSubmitProps) => {

        const id = item.id

        const pregunta = {
            question: values,
            product_id: id,
        }

        const batch = writeBatch(dataBase)
        const preguntasRef = collection(dataBase, "preguntas")

        addDoc(preguntasRef, pregunta)
                .then(() => {
                    batch.commit()
                })

        onSubmitProps.resetForm()

        const Preguntas = document.querySelector("#Preguntas")

        let nuevaPregunta = document.createElement("div");
        nuevaPregunta.innerHTML = ` <hr/>
                                    <p>${values.pregunta}</p>`;
        Preguntas.appendChild(nuevaPregunta);

        swal("Enviada!", "Pregunta enviada con éxito!", "success");

    }

    return (
        <div className="container my-5">
            
            <Formik
                initialValues={ {
                    email: '',
                    pregunta: '',
                } }
                onSubmit={generarPregunta}
                validationSchema={schema}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        
                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="juan.diaz@gmail.com"
                            className="form-control my-2"
                        />
                        {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}

                        <textarea 
                            value={formik.values.pregunta}
                            name="pregunta"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Hacé tu pregunta"
                            className="form-control display-7 my-2"
                            data-form-field="Message"
                            style={{height:"auto"}}
                            />
                        {formik.errors.pregunta && <p className="alert alert-danger">{formik.errors.pregunta}</p>}

                        <button type="submit" className="text-light enlace button_preguntar">Preguntar</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Preguntas