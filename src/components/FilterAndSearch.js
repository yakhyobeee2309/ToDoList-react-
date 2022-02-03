import React from 'react';
import { MyInput } from './UI/Input/MyInput';
import { MySelect } from './UI/Select/MySelect';

export const FilterAndSearch = ({filter, setFilter}) => {
    return (
        <div className="d-flex flex-row-reverse my-3">
            <MyInput 
                className="form-control mx-2"
                placeholder="Search..."
                onChange={e => setFilter({...filter, query: e.target.value})}
                value={filter.query}
            />
            <MySelect
                value={filter.sort}
                onChange={selected => setFilter({...filter, sort: selected})}
                dufaultValue='Sorted by'
                options={[
                    {value: "title", name: "Programming"},
                    {value: "stack", name: "Jobs"}
                ]}
            />
        </div>
    )
};
