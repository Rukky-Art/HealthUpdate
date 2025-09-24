import { useEffect, useState } from 'react';
import { fetchPatientData } from '../utils/fetchPatientData';

const usePatientData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPatientData('coalition', 'skills-test')
            .then((patients) => {
                const jessica = patients.find(p => p.name === 'Jessica Taylor');
                if (!jessica) {
                    setError('Jessica Taylor data not found');
                } else {
                    setData(jessica);
                }
            })
            .catch(err => setError(err.message));
    }, []);

    return { data, error };
};

export default usePatientData;
