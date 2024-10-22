import React from 'react'

const Page1 = () => {
  return (
    <div >
     <div className='text-white'>
     <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-between items-center">
          
          {/* Column 1: About Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              We are a web development agency providing top-notch solutions for all your digital needs. Connect with us for more!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/home" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>Email: ujjwalsinghtyagi123@gmail.com</p>
            <p>LinkedIn: https://www.linkedin.com/in/ujjwal-singh-me/</p>
            <div className="mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-white mt-6 pt-4">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
     </div>
    </div>
  )
}

export default Page1
