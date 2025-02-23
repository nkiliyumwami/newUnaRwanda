'use client'
import { PhoneIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { HiLocationMarker } from 'react-icons/hi'
import logo from '../../public/unarwanda16X16.png'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ContactUsSection = () => {
  const [contact, setContact] = useState<any>({})
  const pathname = usePathname()
  const isActive = (href: string) => {
    return pathname === href
  }

  useEffect(() => {
    fetchContact()
  }, [])

  const fetchContact = async () => {
    const res = await axios.get('/api/admin-contact')
    setContact(res.data.contact[0] || {})
  }

  return (
    <>
      {isActive('/signin') ||
      isActive('/admin') ||
      isActive('/admin/team') ||
      isActive('/admin/contact') ||
      isActive('/admin/blog') ? (
        ''
      ) : (
        <footer className="bg-[#111] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap -mx-4 justify-between">
              <div className="w-full md:w-1/4 px-4 mb-8">
                <Image
                  src={logo.src}
                  alt="UNA Rwanda Logo"
                  width={100}
                  height={30}
                  className="mb-4"
                />
                <p className="text-gray-600 mb-4 text-[15px]">
                  Promoting the Aims and Ideals of the United Nations.
                </p>
                <div className="flex space-x-4">
                  <a
                      href={contact?.facebook}
                    target="_blank"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a
                    href={contact?.twitter}
                    target="_blank"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTwitter className="h-6 w-6" />
                  </a>
                  <a href={contact?.linkedin} className="text-gray-500 hover:text-gray-700">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
                  <a href={contact?.instagram} className="text-gray-500 hover:text-gray-700">
                <FaInstagram className="h-6 w-6" />
              </a>
                </div>
              </div>
              <div className="w-full md:w-1/4 px-4 mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-600">
                  Explore
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-800">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/our-programs"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Our Programs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/our-team"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Our Team
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 px-4 mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-600">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/contact-us"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/donate"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Donate
                    </a>
                  </li>
                  <li>
                    <a
                      href="/signin"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Smart Admin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 px-4 mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-600">
                  Get in Touch
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <HiLocationMarker size={20} className="h-5 w-5 mr-2" /> {contact?.location}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <PhoneIcon className="h-5 w-5 mr-2" /> {contact?.phoneNumber}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FiMail className="h-5 w-5 mr-2" /> {contact?.email}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  )
}

export default ContactUsSection
