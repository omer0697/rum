"use client"

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Slide } from '@mui/material'
import SliderPicture from './SliderPicture'
import FavoriteIcon from '@mui/icons-material/Favorite';

const PICTURES = [
    {
        id: 1,
        src: 'nisan/1.jpeg',
        alt: 'nisan'
    },
    {
        id: 2,
        src: 'nisan/2.jpeg',
        alt: 'nisan'
    },
    {
        id: 3,
        src: 'nisan/3.jpeg',
        alt: 'nisan'
    },
    {
        id: 4,
        src: 'nisan/4.jpeg',
        alt: 'nisan'
    },
    {
        id: 5,
        src: 'nisan/5.jpeg',
        alt: 'nisan'
    },
    {
        id: 6,
        src: 'nisan/6.jpeg',
        alt: 'nisan'
    },
    {
        id: 7,
        src: 'nisan/7.jpeg',
        alt: 'nisan'
    }
];

const ozelAnlar = [
    {
        id: 1,
        src: 'ozel/1.jpeg',
        alt: 'ozel'
    },
    {
        id: 2,
        src: 'ozel/2.jpeg',
        alt: 'ozel'
    },
    {
        id: 3,
        src: 'ozel/3.jpeg',
        alt: 'ozel'
    },
    {
        id: 4,
        src: 'ozel/4.jpeg',
        alt: 'ozel'
    },
    {
        id: 5,
        src: 'ozel/5.jpeg',
        alt: 'ozel'
    },
    {
        id: 6,
        src: 'ozel/6.jpeg',
        alt: 'ozel'
    },
    {
        id: 7,
        src: 'ozel/7.jpeg',
        alt: 'ozel'
    
    }
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">

                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900"> Her Şeyim, </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 px-6 text-center sm:px-6 lg:px-8">
            <p> Seni sevmek, hayatımın en güzel parçası. Her anında seni düşünmek, kalbimi dolduruyor. Seninle geçirdiğim her an, bana mutluluk veriyor. Seni çok seviyorum.</p>
            <h1 className=" py-5 text-3xl font-bold tracking-tight text-gray-900"> Nişan Fotoğraflarımız. </h1>
            <SliderPicture PICTURES={PICTURES} />
            <h1 className='py-5 text-3xl font-bold tracking-tight text-gray-900'>
                En Özel Anlarımız.
            </h1>

            <SliderPicture PICTURES={ozelAnlar} />
            <h1>
                <p className='py-5 text-3xl font-bold tracking-tight text-gray-900'> Seni Seviyorum. </p>
                <FavoriteIcon className='h-10 w-10 text-red-500' />
            </h1>
            <h1 className='py-5 text-3xl font-bold tracking-tight text-gray-900'>
                İlk aşkım, ilk sevgilim, ilk ve son aşkım. Seni çok seviyorum.
            </h1>

          </div>
        </main>
      </div>
    </>
  )
}
