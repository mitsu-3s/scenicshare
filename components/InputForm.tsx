import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

interface Scenery {
    image?: string
    title: string
    description: string
}

const FormValidationSchema = Yup.object().shape({
    image: Yup.string().url('Please enter a valid URL'),
    title: Yup.string().required('Please enter a title'),
    description: Yup.string().required('Please enter a description'),
})

const InputForm = () => {
    const intialValues = {
        image: '',
        title: '',
        description: '',
    }

    const handleSubmit = async (values: Scenery) => {
        try {
            const response = await axios.post('/api/create', values)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="rounded-lg bg-gray-200 p-8 shadow-lg"></div>
        </div>
    )
}

export default InputForm
