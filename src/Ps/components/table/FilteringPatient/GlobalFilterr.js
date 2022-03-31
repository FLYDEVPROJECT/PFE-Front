import React from 'react';

export const GlobalFilter = ( {filter, setFilter} ) =>{
	return(
		<div>
			Trouver un Patient: {' '}
			<input className="ml-2 input-search form-control"
				value={filter || ''}  onChange={e => setFilter(e.target.value)} style={{width: "20%"}}
            />
		</div>
	)
} 