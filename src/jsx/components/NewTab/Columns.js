import {format} from 'date-fns';
import { ColumnFilter } from './ColumnFilter';
export const COLUMNS = [
	{
		Header : 'Identifiant',
		Footer : 'Id',
		accessor: 'id',
		Filter: ColumnFilter,
		//disableFilters: true,
	},
	{
		Header : 'Prénom',
		Footer : 'First Name',
		accessor: 'first_name',
		Filter: ColumnFilter,
	},
	{
		Header : 'Nom ',
		Footer : 'Last Name',
		accessor: 'last_name',
		Filter: ColumnFilter,
	},
	{
		Header : 'liste des Professionnels de santé ',
		Footer : 'Email Id',
		accessor: 'email',
		Filter: ColumnFilter,
	},
	{
		Header : 'Date d adhésion',
		Footer : 'Date of  Birth',
		accessor: 'date_of_birth',
		Cell: ({ value }) => {return format(new Date(value), 'dd/mm/yyyy')},
		Filter: ColumnFilter,
	},
	{
		Header : 'Antécédents Médicaux',
		Footer : 'Country',
		accessor: 'country',
		Filter: ColumnFilter,
	},
	{
		Header : 'télephone',
		Footer : 'Phone',
		accessor: 'phone',
		Filter: ColumnFilter,
	},
]

export const GROUPED_COLUMNS = [
	{
		Header : 'Id',
		Footer : 'Id',
		accessor: 'id'
	},
	{
		Header : 'Name',
		Footer : 'Name',
		columns: [
			{
				Header : 'First Name',
				Footer : 'First Name',
				accessor: 'first_name'
			},
			{
				Header : 'Last Name',
				Footer : 'Last Name',
				accessor: 'last_name'
			},
		]
	},
	{
		Header: 'Info',
		Footer: 'Info',
		columns: [
			{
				Header : 'Date of  Birth',
				Footer : 'Date of  Birth',
				accessor: 'date_of_birth'
			},
			{
				Header : 'Country',
				Footer : 'Country',
				accessor: 'country',
			},
			{
				Header : 'Phone',
				Footer : 'Phone',
				accessor: 'phone'
			},
		]
	},
]