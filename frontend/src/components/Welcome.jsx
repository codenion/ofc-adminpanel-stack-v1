import React from 'react'
import { FaHome } from 'react-icons/fa';
import { useSelector } from 'react-redux'

const Welcome = () => {
  const {user} = useSelector((state) => state.auth);
  return (
    <div>
      <nav class="flex px-5 py-3 mb-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
            <span class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <FaHome/>&nbsp; Dashboard
            </span>
            </li>
            {/* <li>
            <div class="flex items-center">
                <FaAngleRight/>
                <a href="!#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Dashboard</a>
            </div>
            </li> */}
        </ol>
      </nav>
      <h2>Welcome Back, <b>{user && user.name}</b></h2>
    </div>
  )
}

export default Welcome
