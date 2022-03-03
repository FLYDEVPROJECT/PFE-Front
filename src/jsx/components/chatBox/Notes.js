import React from 'react'
import { Link } from 'react-router-dom'

const Notes = ({ toggleTab, PerfectScrollbar, toggleChatBox }) => {
  return (
    <div
      className={`tab-pane fade  ${toggleTab === 'notes' ? 'active show' : ''}`}
      id='notes'
    >
      <div className='card mb-sm-3 mb-md-0 note_card'>
        <div className='card-header chat-list-header text-center'>
          <Link to='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='18px'
              height='18px'
              viewBox='0 0 24 24'
              version='1.1'
            >
              <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <rect
                  fill='#000000'
                  x='4'
                  y='11'
                  width='16'
                  height='2'
                  rx='1'
                />
                <rect
                  fill='#000000'
                  opacity='0.3'
                  transform='translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) '
                  x='4'
                  y='11'
                  width='16'
                  height='2'
                  rx='1'
                />
              </g>
            </svg>
          </Link>
       
        
        </div>
        <PerfectScrollbar
          className={`card-body contacts_body p-0 dz-scroll  ${
            toggleChatBox ? 'ps ps--active-y' : ''
          }`}
          id='DZ_W_Contacts_Body2'
        >
          <ul className='contacts'>
           
          
            <li>
              <div className='d-flex bd-highlight'>
                <div className='user_info'>
                  <span>john just buy your product..</span>
                  <p>10 Aug 2020</p>
                </div>
                <div className='ml-auto'>
                  <Link to='#' className='btn btn-primary btn-xs sharp mr-1'>
                    <i className='fa fa-pencil'></i>
                  </Link>
                  <Link to='#' className='btn btn-danger btn-xs sharp'>
                    <i className='fa fa-trash'></i>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className='d-flex bd-highlight'>
                <div className='user_info'>
                  <span>Athan Jacoby</span>
                  <p>10 Aug 2020</p>
                </div>
                <div className='ml-auto'>
                  <Link to='#' className='btn btn-primary btn-xs sharp mr-1'>
                    <i className='fa fa-pencil'></i>
                  </Link>
                  <Link to='#' className='btn btn-danger btn-xs sharp'>
                    <i className='fa fa-trash'></i>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </PerfectScrollbar>
      </div>
    </div>
  )
}

export default Notes
