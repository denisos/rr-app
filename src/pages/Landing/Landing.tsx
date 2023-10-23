import {
  Link,
  useLoaderData,
} from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
{/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}

import { Person } from '../../types';

import { getPeople } from '../../api/api';

export async function loader() {
  const res = await getPeople();
  return { people: res.results };
}

// id is embedded in the url at the end, so extract it
const getPersonId = (person: Person) => {
  const urlParts = person.url.split('/');
  return urlParts.pop() || urlParts.pop()
}

export const Landing = () => {
  const { people } = useLoaderData() as { people: Person[] };

  return (
    <>
      <h1>Star Wars people fetcher</h1>
      <button>Add new person</button>

      <ul className='peopleList'>
        {people.map((person: Person) => {
          const personId = getPersonId(person);
          return (
            <li key={personId} className='personItem'>
              <p>{person.name}</p>
              <Link to={`people/${personId}`}>Details</Link>
            </li>
          )
        })}
      </ul>
    </>
  );
}
