import { Layout } from '@/components/Layout'
import axios from 'axios'

const Create = () => {
    const addScenery = (data: any) => axios.post('/api/create', data)

    return (
        <Layout>
            <h1 className="text-xl font-medium text-gray-800">Create</h1>
        </Layout>
    )
}

export default Create
