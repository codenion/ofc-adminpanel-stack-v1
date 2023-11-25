import React from 'react'
import NavbarPart from '../components/NavbarPart'
import { FaHome } from 'react-icons/fa';

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <NavbarPart/>
        <div class="p-4 sm:ml-64">
            <div class=" mt-14">
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
