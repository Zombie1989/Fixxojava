import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Contact from '../sections/ContactForm'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import Map from '../sections/Map'

const ContactsView = () => {

  window.top.document.title = 'Contacts | Fixxo.'

  return (
    <>
      <MainMenu />
      <Breadcrumb currentPage="Contacts"/>
      <Map />
      <Contact title="Come in Contact with Us" />
      <Footer />
    </>
  )
}

export default ContactsView