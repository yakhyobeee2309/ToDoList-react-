import React from 'react';

export const MySelect = ({options, dufaultValue, onChange, value}) => {
    return (
    <select 
        className="form-select"
        value={value}
        onChange={e => onChange(e.target.value)}
    >
        <option disabled value=''>{dufaultValue}</option>
        {options.map(opt => (
            <option value={opt.value} key={opt.value}>
                {opt.name}
            </option>
        ))}
    </select>
    )
};
