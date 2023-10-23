import { SwapiListResponse, Person } from '../types';

export const getPeople = async (): Promise<SwapiListResponse<Person>> => {
  const res = await fetch('https://swapi.dev/api/people');
  return await res.json();
}

export const getPerson = async (personId: string): Promise<Person> => {
  const res = await fetch(`https://swapi.dev/api/people/${personId}`);
  return await res.json();
}
