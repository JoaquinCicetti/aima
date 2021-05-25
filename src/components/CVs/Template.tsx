import React from 'react'

import {
  FaUserGraduate as UniversityIcon,
  FaClock as TimezoneIcon,
  FaQuoteLeft as QuotesIcon,
  FaLinkedinIn as LinkedInIcon,
  FaWhatsapp as PhoneIcon,
  FaEnvelope as MailIcon,
} from 'react-icons/fa'
import { MdWork as WorkIcon, MdComputer as SoftwareIcon } from 'react-icons/md'
import { GoVerified as ServicesIcon } from 'react-icons/go'
import Aati from '../../resources/images/aati-logo.png'
import { Data } from '../../data/types'
import './CVs.scss'

interface TemplateProps {
  data: Data
}

const Template: React.FC<TemplateProps> = (props) => {
  const { data } = props

  const { ProfileImage, ...rest } = data
  return <div className='template'>
    <div className='header'>
      <div className='contact'>
        <div className='contact-icons'>
          <a
            href={`https://wa.me/${rest.phone.number}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <PhoneIcon />
          </a>
          <a
            href={`mailto:${rest.mail[0]}?subject=Contact!&body=Hi Paula.`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <MailIcon />
          </a>
          <a
            href={rest.linkedIn.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
          </a>
        </div>
        <span>
          <TimezoneIcon />
          <span>{rest.timezone}</span>
        </span>
      </div>

      <img className='image' alt='profile' src={ProfileImage} />
    </div>
    <div className='basic'>
      <p className='name'>{rest.name}</p>
      <span className='title'>{rest.title}</span>
    </div>
    <div className='col'>
      <div className='row align-items-center how-it-works'>
        <div className='col-2 text-center bottom' style={{ marginLeft: 2 }}>
          <div className='circle'>
            <QuotesIcon />
          </div>
        </div>

        <div className='col-8 pt-3'>
          <p className='abstract'>
            {rest.abstract}
          </p>
        </div>

      </div>
    </div>
    <div className='col'>
      <div className='row timeline'>
        <div className='col-2'>
          <div className='corner top-right' />
        </div>
        <div className='col-8 p-0'>
          <hr />
        </div>
        <div className='col-2'>
          <div className='corner left-bottom' />
        </div>
      </div>
      {/* <!--second section--> */}
      <div className='row align-items-center justify-content-end how-it-works'>
        <div className='col-8 p-0 m-0 d-flex justify-content-between'>
          <div className='col-6'>
            <h5>{rest.services.title}</h5>
            <ul className='pl-0'>
              {rest.services.data.map((service: any) => {
                return <li key={`service-${service}`}>{service}</li>
              })}
            </ul>
          </div>
          <div className='col-6'>
            <h5>{rest.specializations.title}</h5>
            <ul className='pl-0'>
              {rest.specializations.data.map((specialization: any) => {
                return (
                  <li key={`specialization-${specialization}`}>
                    {specialization}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='col-2 text-center full'>
          <div className='circle'>
            <ServicesIcon />
          </div>
        </div>
      </div>
      {/* <!--path between 2-3--> */}
      <div className='row timeline'>
        <div className='col-2'>
          <div className='corner right-bottom' />
        </div>
        <div className='col-8'>
          <hr />
        </div>
        <div className='col-2'>
          <div className='corner top-left' />
        </div>
      </div>
      <div className='row align-items-center how-it-works'>
        <div className='col-2 text-center full' style={{ marginLeft: 3, marginRight: 10 }}>
          <div className='circle'>
            <UniversityIcon />
          </div>
        </div>
        <div className='col-8 p-0'>
          <h5>{rest.education.title}</h5>
          <ul className='pl-0'>
            {rest.education.data.map(({ title, description }: any, i: number) => {
              return (
                <li key={`education-${i}`}>
                  <b>{title}</b>
                  <p>{description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='row timeline'>
        <div className='col-2'>
          <div className='corner top-right' />
        </div>
        <div className='col-8 p-0'>
          <hr />
        </div>
        <div className='col-2'>
          <div className='corner left-bottom' />
        </div>
      </div>
      {/* <!--fouth section--> */}
      <div className='row align-items-center justify-content-end how-it-works'>
        <div className='col-8  p-0 d-flex'>
          <div className='col-6'>
            <h5>{rest.experience.title}</h5>
            <ul className='pl-0'>
              {rest.experience.data.map(({ title, description }: any, i: number) => {
                return (
                  <li key={`experience-${i}`}>
                    <b>{title}</b>
                    <p>{description}</p>
                  </li>
                )
              })}
              <li>
                <b>
                  <a
                    href={rest.linkedIn.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {rest.linkedIn.description}
                  </a>
                </b>
              </li>
            </ul>
          </div>
          <div className='col-6'>
            <h5>{rest.membership.title}</h5>
            <img src={Aati} alt='aati' width={110} />
          </div>
        </div>
        <div className='col-2 text-center full'>
          <div className='circle'>
            <WorkIcon />
          </div>
        </div>
      </div>
      {/* <!--path between 4-5--> */}
      <div className='row timeline'>
        <div className='col-2'>
          <div className='corner right-bottom' />
        </div>
        <div className='col-8 p-0'>
          <hr />
        </div>
        <div className='col-2'>
          <div className='corner top-left' />
        </div>
      </div>
      {/* <!--fifth section--> */}
      <div className='row align-items-center how-it-works'>
        <div className='col-2 text-center full' style={{ marginLeft: 3, marginRight: 10 }}>
          <div className='circle'>
            <SoftwareIcon />
          </div>
        </div>
        <div className='col-8 p-0'>
          <h5>{rest.software.title}</h5>
          <ul className='pl-0'>
            {rest.software.data.map(({ title, description }: any, i: number) => {
              return (
                <li key={`software-${i}`}>
                  <b>{title}</b>
                  <p>{description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {/* <!-- end--> */}
      <div className='row timeline'>
        <div className='col-2'>
          <div className='corner top-right' />
        </div>
        <div className='col-8 p-0'>
          <hr />
        </div>
      </div>
    </div>
  </div>

}

export default Template