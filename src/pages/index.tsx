import { GetServerSidePropsContext } from 'next';
import { services } from '../util/data';

export default function Home({ services }) {
  return (
    <div>
      <h1>Hello Word</h1>
    </div>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const response = await fetch('http://localhost:3000/api/services');
  const data = await response.json();
  return {
    props: {
      services: data.services,
    },
  };
};
