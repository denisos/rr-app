import { useLoaderData } from "react-router-dom";
import { Person } from '../../types';
import { getPerson } from '../../api/api';

import './PersonDetail.css'

export async function loader({ params }: any) {
  const res = await getPerson(params.personId);
  return res;
}

export const PersonDetail = () => {
  const person = useLoaderData() as Person;

  return (
    <div className='personDetailContainer'>
      <h2>Details page for {person.name}</h2>

      <dl>
        <dt>Birth year: </dt>
        <dd>{person.birth_year}</dd>
        <dt>Height: </dt>
        <dd>{person.height}</dd>
      </dl>
    </div>
  );
} 
