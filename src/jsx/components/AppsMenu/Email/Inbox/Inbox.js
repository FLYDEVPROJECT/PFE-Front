import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import InboxMessage from './InboxMessage'
import { Dropdown } from 'react-bootstrap'
import PageTitle from '../../../../layouts/PageTitle'

const Inbox = () => {
  

  return (
    <Fragment>
      <PageTitle activeMenu='Inbox' motherMenu='Email' />

      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <div className='email-left-box px-0 mb-3'>
                <div className='p-0'>
                  <Link
                    to='/accee'
                    className='btn btn-primary btn-block'
                  >
                    Compose
                  </Link>
                </div>
                <div className='mail-list mt-4'>
                  <Link to='/email-inbox' className='list-group-item active'>
                    <i className='fa fa-inbox font-18 align-middle mr-2'></i>
                    Inbox
                    <span className='badge badge-primary badge-sm float-right'>
                      198
                    </span>
                  </Link>
                  <Link to='/email-inbox' className='list-group-item'>
                    <i className='fa fa-paper-plane font-18 align-middle mr-2'></i>
                    Sent
                  </Link>
                  <Link to='/email-inbox' className='list-group-item'>
                    <i className='fa fa-star font-18 align-middle mr-2'></i>
                    Important
                    <span className='badge badge-danger text-white badge-sm float-right'>
                      47
                    </span>
                  </Link>
                  <Link to='/email-inbox' className='list-group-item'>
                    <i className='mdi mdi-file-document-box font-18 align-middle mr-2'></i>
                    Draft
                  </Link>
                  <Link to='/email-inbox' className='list-group-item'>
                    <i className='fa fa-trash font-18 align-middle mr-2'></i>
                    Trash
                  </Link>
                </div>
              
               
              </div>
              <div className='email-right-box ml-0 ml-sm-4 ml-sm-0'>
                <div role='toolbar' className='toolbar ml-1 ml-sm-0'>
                  <div className='btn-group mb-1 mr-1 ml-1'>
                    <div className='custom-control custom-checkbox pl-2'>
                      <input
                        type='checkbox'
                        className='custom-control-input'
                        id='checkbox1'
                      />
                      <label
                        className='custom-control-label'
                        htmlFor='checkbox1'
                      ></label>
                    </div>
                  </div>
                  <div className='btn-group mb-1'>
                    <button
                      className='btn btn-primary light px-3'
                      type='button'
                    >
                      <i className='ti-reload'></i>
                    </button>
                  </div>
                
                </div>
             
                <div className='row mt-4'>
                  <div className='col-12 pl-3'>
                    <nav>
                      <ul className='pagination pagination-gutter pagination-primary pagination-sm no-bg'>
                        <li className='page-item page-indicator'>
                          <Link className='page-link' to='/email-inbox'>
                            <i className='la la-angle-left'></i>
                          </Link>
                        </li>
                        <li className='page-item '>
                          <Link className='page-link' to='/email-inbox'>
                            1
                          </Link>
                        </li>
                        <li className='page-item active'>
                          <Link className='page-link' to='/email-inbox'>
                            2
                          </Link>
                        </li>
                        <li className='page-item'>
                          <Link className='page-link' to='/email-inbox'>
                            3
                          </Link>
                        </li>
                        <li className='page-item'>
                          <Link className='page-link' to='/email-inbox'>
                            4
                          </Link>
                        </li>
                        <li className='page-item page-indicator'>
                          <Link className='page-link' to='/email-inbox'>
                            <i className='la la-angle-right'></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Inbox
