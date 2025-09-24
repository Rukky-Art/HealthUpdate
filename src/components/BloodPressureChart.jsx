import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const shortMonths = {
    January: 'Jan', February: 'Feb', March: 'Mar', April: 'Apr',
    May: 'May', June: 'Jun', July: 'Jul', August: 'Aug',
    September: 'Sep', October: 'Oct', November: 'Nov', December: 'Dec'
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: 10, borderRadius: 5 }}>
                <p><strong>Date:</strong> {label}</p>
                <p><strong>BP:</strong> {payload[0].value} mmHg</p>
            </div>
        );
    }
    return null;
};

const BloodPressureChart = ({ readings }) => {
    if (!readings || !Array.isArray(readings)) return null;

    const data = readings.map(r => ({
        date: r.date || 'Unknown',
        bp: r.value ?? r.systolic ?? 0,
    }));

    return (
        <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data} margin={{ top: 30, right: 40, left: 10, bottom: 10 }}>
                <defs>
                    <linearGradient id="colorBp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4a90e2" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#4a90e2" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis

                    dataKey="date"
                    tick={{ dy: 10 }}
                    tickFormatter={(dateStr) => {
                        const [month, year] = dateStr.split(' ');
                        const shortMonth = shortMonths[month] || month;
                        return year ? `${shortMonth} ${year}` : dateStr;
                    }}
                />
                <YAxis
                    domain={['dataMin - 10', 'dataMax + 10']}
                    tickFormatter={value => value} // no unit here
                    label={{ value: 'mmHg', angle: -90, position: 'insideLeft', dy: 20 }}
                />

                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="bp"
                    stroke="#4a90e2"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorBp)"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default BloodPressureChart;
