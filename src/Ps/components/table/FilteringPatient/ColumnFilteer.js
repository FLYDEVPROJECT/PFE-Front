import React from 'react';

export const ColumnFilteer = ( { column } ) => {
	
	const {filterValue, setFilter} = column
	return(
		<div>
		
			<input className="form-control input-search"
				value={filterValue || ''}  onChange={e => setFilter(e.target.value)} />
		</div>
	)
} 