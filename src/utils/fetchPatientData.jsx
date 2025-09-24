export async function fetchPatientData(username, password) {
    const token = btoa(`${username}:${password}`);
    const res = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
            Authorization: `Basic ${token}`
        }
    });
    if (!res.ok) throw new Error('Failed to fetch data');
    const data = await res.json();
    return data;
}
  