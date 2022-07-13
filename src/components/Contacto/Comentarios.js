import { Formik } from "formik"
import * as Yup from 'yup'
import { collection, addDoc, writeBatch } from "firebase/firestore"
import { dataBase } from "../../firebase/config"

const schema = Yup.object().shape({
    email: Yup.string()
                .required('Este campo es obligatorio')
                .email('Formato de email inválido'),
    comentarios: Yup.string()
                .required('Este campo es obligatorio')
                .min(2, 'El nombre es demasiado corto')
                .max(120, 'Máximo 120 caracteres'),
    
})

const Comentarios = () => {

    const generarComentario = (values, onSubmitProps) => {

        const comentario = {
            coment: values
        }

        const batch = writeBatch(dataBase)
        const comentariosRef = collection(dataBase, "comentarios")

        addDoc(comentariosRef, comentario)
                .then(() => {
                    batch.commit()
                })

        onSubmitProps.resetForm()

    }

    return (
        <div className="container my-5">
            
            <Formik
                initialValues={ {
                    email: '',
                    comentarios: '',
                } }
                onSubmit={generarComentario}
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

                        <input
                            value={formik.values.comentarios}
                            name="comentarios"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Dejá tu comentario"
                            className="form-control form_comentario my-2"
                        />
                        {formik.errors.comentarios && <p className="alert alert-danger">{formik.errors.comentarios}</p>}

                        <button type="submit" className="btn btn-dark">Enviar</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Comentarios