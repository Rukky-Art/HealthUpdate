import React from 'react';
import PatientData from '../hooks/PatientData';
import BloodPressureChart from './BloodPressureChart';
import { FaPhoneAlt, FaUserShield, FaFileMedical } from 'react-icons/fa';


const extractBloodPressureReadings = (diagnosisHistory) => {
    if (!Array.isArray(diagnosisHistory)) return [];

    
    const readings = diagnosisHistory.map(item => {
        const month = item.month || '';
        const year = item.year || '';
        const date = month && year ? `${month} ${year}` : 'Unknown';

        return {
            date,
            systolic: item.blood_pressure?.systolic?.value || null,
            diastolic: item.blood_pressure?.diastolic?.value || null,
        };
    });


    return readings.filter(r => r.systolic !== null && r.diastolic !== null);
};

function Dashboard() {
    const { data, error } = PatientData();

    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
    if (!data) return <div>Loading...</div>;

    const bpReadings = extractBloodPressureReadings(data.diagnosis_history);

    return (
        <div style={{ maxWidth: 900, margin: '2rem auto', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <div style={{
                display: 'flex', alignItems: 'center', gap: '1.5rem', backgroundColor: '#f0f4f8', padding: '1.5rem 2rem',
                borderRadius: 10, boxShadow: '0 4px 12px rgba(74, 144, 226, 0.15)'
            }}>
                <img
                    src={data.profile_picture || 'https://randomuser.me/api/portraits/women/65.jpg'}
                    alt={data.name || 'Jessica Taylor'}
                    style={{ width: 140, height: 140, borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                />
                <div>
                    <h1 style={{ marginBottom: 6, color: '#4a90e2' }}>{data.name || 'Jessica Taylor'}</h1>
                    <p style={{ marginBottom: 4, fontWeight: '600' }}>
                        Gender: <span style={{ fontWeight: 'normal' }}>{data.gender || 'Female'}</span>
                    </p>
                    <p style={{ marginBottom: 4, fontWeight: '600' }}>
                        Date of Birth: <span style={{ fontWeight: 'normal' }}>{data.date_of_birth || '1998-03-23'}</span>
                    </p>
                    <p style={{ marginBottom: 4, fontWeight: '600' }}>
                        Age: <span style={{ fontWeight: 'normal' }}>{data.age || 27}</span>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <FaPhoneAlt color="#4a90e2" />
                        <span>{data.phone_number || '+1 (310) 555-0198'}</span>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <FaUserShield color="#4a90e2" />
                        <span>Emergency Contact: {data.emergency_contact || '+1 (213) 555-0247'}</span>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <FaFileMedical color="#4a90e2" />
                        <span>Insurance Type: {data.insurance_type || 'N/A'}</span>
                    </p>
                </div>
            </div>

            <section style={{ marginTop: '2rem', backgroundColor: '#fff', padding: '1.5rem 2rem', borderRadius: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <h2 style={{ color: '#4a90e2', marginBottom: '1rem' }}>Blood Pressure History</h2>
                {bpReadings.length > 0 ? (
                    <BloodPressureChart readings={bpReadings} />
                ) : (
                    <p>No blood pressure readings found.</p>
                )}
            </section>
        </div>
    );
}

export default Dashboard;
