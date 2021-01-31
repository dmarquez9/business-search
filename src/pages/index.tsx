import Head from 'next/head'
import Layout from '@components/Layout';
import Container from '@components/Container';
import BusinessList from '@components/BusinessList';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Business | Inicio</title>
      </Head>
      <Container>
        <BusinessList />
      </Container>
    </Layout>
  )
}
