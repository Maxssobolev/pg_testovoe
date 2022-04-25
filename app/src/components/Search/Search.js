import { useState } from "react";
export default function Search({ update, data, searchField }) {
    const [term, setTerm] = useState('')

    function dataSearch(e) {
        const value = e.target.value.toLowerCase();

        const filter = data.filter(row => {
            return row[searchField].toLowerCase().includes(value);
        });
        setTerm(value)
        update({
            data: filter,
        });
    };
    return (

        <input
            placeholder="Начните вводить для поиска"
            value={term}
            type="text"
            className={`field field_search`}
            onChange={function (e) { dataSearch(e) }}
        />

    )
}


