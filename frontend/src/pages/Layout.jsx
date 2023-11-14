import React from 'react'
import Navbar from '../components/Navbar'
import { FaAngleRight, FaHome } from 'react-icons/fa';

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar/>
        <div class="p-4 sm:ml-64">
            <div class=" mt-14">
              <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li class="inline-flex items-center">
                  <a href="!#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                      <FaHome/>&nbsp; Dashboard
                  </a>
                  </li>
                  {/* <li>
                  <div class="flex items-center">
                      <FaAngleRight/>
                      <a href="!#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Dashboard</a>
                  </div>
                  </li> */}
              </ol>
              </nav>
              <div class="mt-4 container mx-auto">
                <main>
                  {children}
                </main>
              </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Layout
