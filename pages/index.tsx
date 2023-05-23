import { PrismaClient } from '@prisma/client'
import Layout from '../components/Layout'

const prisma = new PrismaClient()

export async function getServerSideProps() {
    const sceneries = await prisma.scenery.findMany()

    return {
        props: {
            sceneries: JSON.parse(JSON.stringify(sceneries)),
        },
    }
}

const Home = ({ sceneries = [] }) => {
    return (
        <Layout sceneries={sceneries}>
            {/* <h1 className="text-xl font-medium text-gray-800">Top-rated places to stay</h1>
            <p className="text-gray-500">Explore some of the best places in the world</p>
            <div className="mt-8"></div> */}
        </Layout>
    )
}

export default Home
