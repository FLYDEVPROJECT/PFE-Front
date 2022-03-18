import * as React from 'react';
import  { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

import { Link } from "react-router-dom";

const handleClick = ()=> {
   console.log('hekooe')
}
function handle_form_submission()
{
  alert(' voulez vous ajouter cet patient ? ');
  return false; //do not submit the form
}


const Root = styled('div')(
  ({ theme }) => `
  color: ${
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
  };
  font-size: 14px;
`,
);

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')(
  ({ theme }) => `
  width: 300px;
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
  }

  &.focused {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: ${
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`,
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#fafafa'
  };
  border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`,
);

const Listbox = styled('ul')(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`,
);

export default function CustomizedHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [top100Films[1]],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  return (
    <Root>
       <Fragment>
       

       <div className="row">
          <div className="col-lg-12">
             <div className="card">
                <div className="card-header">
                   <h4 className="card-title">Ajouter un patient</h4>
                </div>
                <div className="card-body">
                   <div className="form-validation">
                      <form
                         className="form-valide"
                         action="#"
                         method="post"
                         onSubmit={(e) => e.preventDefault()}
                      >
                         <div className="row">
                            <div className="col-xl-6">
                               <div className="form-group row">
                                  <label
                                     className="col-lg-4 col-form-label"
                                     htmlFor="val-username"
                                  >
                                    Identifiant
                                     <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-lg-6">
                                     <input
                                        type="text"
                                        className="form-control"
                                        id="val-username"
                                        name="val-username"
                                        placeholder="Enter a username.."
                                     />
                                  </div>
                               </div>
                               <div className="form-group row">
                                  <label
                                     className="col-lg-4 col-form-label"
                                     htmlFor="val-email"
                                  >
                                    Date D'adhésion{" "}
                                     <span className="text-danger">*</span>
                                  
                                  </label>
                                  <div className="col-lg-6">
                                     <input
                                        type="text"
                                        className="form-control"
                                        id="val-email"
                                        name="val-email"
                                        placeholder="Your valid email.."
                                     />
                                  </div>
                               </div>
                               <div className="form-group row">
                                  <label
                                     className="col-lg-4 col-form-label"
                                     htmlFor="val-password"
                                  >
                                     Nom Du Patient
                                     <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-lg-6">
                                     <input
                                        type="password"
                                        className="form-control"
                                        id="val-password"
                                        name="val-password"
                                        placeholder="Choose a safe one.."
                                     />
                                  </div>
                               </div>
                          
                               <div className="form-group row">
                               <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Liste des professionnels de santé</Label>
        <span className="text-danger">*</span>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option, index) => (
            <StyledTag label={option.title} {...getTagProps({ index })} />
          ))}

          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.title}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
                                 
                               </div>
                            </div>
                            <div className="col-xl-6">
                               <div className="form-group row">
                                  <label
                                     className="col-lg-4 col-form-label"
                                     htmlFor="val-skill"
                                  >
                                 Antécedents Médicaux	
                                     <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-lg-6">
                                     <textarea
                                        className="form-control"
                                        id="val-suggestions"
                                        name="val-suggestions"
                                        rows="5"
                                        placeholder="What would you like to see?"
                                     ></textarea>
                                  </div>
                               </div>
                               <div className="form-group row">
                            
                                 
                               </div>
                               <div className="form-group row">
                                
                                 
                               </div>
                               <div className="form-group row">
                              
                                
                               </div>
                               <div className="form-group row">
                                  
                               
                               </div>
                               <div className="form-group row">
                           
                                 
                               </div>
                               <div className="form-group row">
                              
                               </div>
                               <div className="form-group row">
                                  <label className="col-lg-4 col-form-label">
                                     <Link to="/orm-validation-jquery">
                                        Termes &amp; Conditions
                                     </Link>{" "}
                                     <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-lg-8">
                                     <label
                                        className="css-control css-control-primary css-checkbox"
                                        htmlFor="val-terms"
                                     >
                                        <input
                                           type="checkbox"
                                           className="css-control-input mr-2"
                                           id="val-terms"
                                           name="val-terms"
                                           value="1"
                                        />
                                        <span className="css-control-indicator"></span>{" "}
                                      Enregistrer les changements
                                     </label>
                                  </div>
                               </div>
                               <div className="form-group row">
                                  <div className="col-lg-8 ml-auto">
                                     <button onClick={handle_form_submission}
                                        type="submit"
                                       
                                        className="btn btn-primary"
                                     >
                                        Ajouter
                                     </button>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </form>
                   </div>
                </div>
             </div>
          </div>
          <div className="col-lg-12">
             <div className="card">
             
                <div className="card-body">
                   <div className="basic-form">
                    
                   </div>
                </div>
             </div>
          </div>
       </div>
    </Fragment>
     
    </Root>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Dr Mehdi Moussa', year: 1994 },
  { title: 'Dr Bahri Mohamed Ali', year: 1972 },
  { title: 'Dr Souha Nasri', year: 1974 },
  { title: 'Dr Mondher CHEOUR', year: 2008 },
  { title: 'Dr Rachid Boujnah', year: 1957 },
  { title: "Dr syrine abid", year: 1993 },

  {
    title: 'Dr Hanen Haj Taieb MEHDI',
    year: 2003,
  },
  { title: 'Dr.Asma Sioud Dhrif', year: 1966 },
  { title: 'Dr Zribi El Mufti Hela', year: 1999 },
  {
    title: 'Dr Kaouther Othmani',
    year: 2001,
  },
  {
    title: 'Dr Mounir DAMAK',
    year: 1980,
  },
  { title: 'Dr Tarak Mouelhi', year: 1994 },
  { title: 'Dr MANEL KAABI', year: 2010 },
  {
    title: 'Dr Zarrouk Mourad',
    year: 2002,
  },
  { title: "Dr Walid AKROUT", year: 1975 },
  { title: 'Dr Monia Ben Arab', year: 1990 },
  { title: 'Dr Ilyes Ben Salah', year: 1999 },
  { title: 'Dr Wassim Farhat', year: 1954 },
  {
    title: 'DR SAKOUHI AMIRA',
    year: 1977,
  },
  { title: 'Dr Bechir Bey', year: 2002 },
  { title: 'Dr Zayani ZIED', year: 1995 },
  { title: 'Dr MANEL KAABI', year: 1991 },
  { title: "Dr Zarrouk Mourad", year: 1946 },
  { title: 'Dr Walid AKROUT', year: 1997 },
  { title: 'Dr Siwar CHEOURs', year: 1995 },
  { title: 'Dr Abdelmoula Ben Mustapha', year: 1994 },
  { title: 'Dr. Rim YOUNES', year: 2001 },
  { title: 'Dr Walid KERKENI', year: 1998 },
  { title: 'Dr Abderrazek Mnif', year: 1968 },
  { title: 'Dr Kallel yousri', year: 1998 },
  { title: 'Dr Zarrouk Mourad', year: 2014 },
  { title: 'Dr KRID Ghanema', year: 1942 },
];