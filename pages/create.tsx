import Layout from '@/components/Layout'
import { Formik, Form, Field, ErrorMessage } from 'formik'
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

const Create = () => {
    // const addScenery = (data: any) => axios.post('/api/create', data)

    const initialValues = {
        image: '',
        title: '',
        description: '',
    }

    const handleSubmit = async (values: Scenery, { resetForm }: any) => {
        try {
            const response = await axios.post('/api/create', values)
            console.log(response)
            resetForm()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Layout>
            <div className="m-20 flex items-center justify-center">
                <div className="w-96 rounded-lg bg-gray-200 p-8 shadow-lg">
                    <h1 className="text-black">Form</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={FormValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="mx-auto max-w-md">
                            <div className="mb-4">
                                <label htmlFor="image" className="mb-2 block text-black">
                                    Image URL:
                                </label>
                                <Field
                                    type="text"
                                    id="image"
                                    name="image"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-black"
                                />
                                {/* <ErrorMessage
                                    name="image"
                                    component="div"
                                    className="text-red-500"
                                /> */}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="title" className="mb-2 block text-black">
                                    Title:
                                </label>
                                <Field
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-black"
                                />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="mb-2 block text-black">
                                    Description:
                                </label>
                                <Field
                                    as="textarea"
                                    id="description"
                                    name="description"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-black"
                                />
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </Layout>
    )
}

export default Create
