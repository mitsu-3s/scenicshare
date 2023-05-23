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
        image: undefined,
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
        <Layout>
            <div className="m-20 flex items-center justify-center">
                <div className="rounded-lg bg-gray-200 p-8 shadow-lg">
                    <h1 className="text-black">ログイン（Formik）</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={FormValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="url" className="text-black">
                                    URL:{' '}
                                </label>
                                <Field
                                    type="text"
                                    id="url"
                                    name="url"
                                    className="w-64 p-2 text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="title" className="text-black">
                                    Title:{' '}
                                </label>
                                <Field
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="w-64 p-2 text-black"
                                />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="text-black">
                                    Description:{' '}
                                </label>
                                <Field
                                    type="text"
                                    id="description"
                                    name="description"
                                    className="w-64 p-2 text-black"
                                />
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                                >
                                    ログイン
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </Layout>
    )
}

export default Create
