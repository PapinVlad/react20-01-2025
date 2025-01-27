import React from "react";

const Register = () => {

    return (
      <>
      <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
      <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
      <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
        <div className="max-w-md space-y-12 mx-auto">
        <div>
          <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
          <p className="text-[13px] text-gray-200 mt-2">Welcome to our registration page! Get started by creating your account.</p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
          <p className="text-[13px] text-gray-200 mt-2">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold">Terms and Conditions Agreement</h4>
          <p className="text-[13px] text-gray-200 mt-2">Require users to accept the terms and conditions of your service during registration.</p>
        </div>
        </div>
      </div>

      <form className="sm:p-8 p-4 w-full">
        <div className="md:mb-12 mb-8">
        <h3 className="text-gray-800 text-3xl font-bold">Register</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <label className="text-gray-800 text-sm mb-2 block">First Name</label>
          <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2.5 rounded-md border focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter name" />
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
          <input name="lname" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2.5 rounded-md border focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter last name" />
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Date of Birth</label>
          <input name="dob" type="date" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2.5 rounded-md border focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter date of birth" />
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Gender</label>
          <select name="gender" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2.5 rounded-md border focus:bg-transparent focus:border-black outline-none transition-all">
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Hospital Number</label>
          <input name="hospitalNumber" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2.5 rounded-md border focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter hospital number" />
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
          <input name="email" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2.5 rounded-md border focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter email" />
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
          <input name="number" type="tel" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2.5 rounded-md border focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter mobile number" />
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Address</label>
          <input name="address" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2.5 rounded-md border focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter address" />
        </div>
        
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Emergency Contact</label>
          <input name="emergencyContact" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2.5 rounded-md border focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter emergency contact" />
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Password</label>
          <input name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2.5 rounded-md border focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter password" />
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
          <input name="cpassword" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2.5 rounded-md border focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter confirm password" />
        </div>
        </div>

        <div className="flex items-center mt-6">
        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
        <label for="remember-me" className="ml-3 block text-sm">
          I accept the <a href="javascript:void(0);" className="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
        </label>
        </div>

        <div className="mt-6">
        <button type="button" className="py-3 px-6 text-sm tracking-wide rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none transition-all">
          Sign up
        </button>
        </div>
      </form>
      </div>
    </div>
      
      
      
      </>
    )


}
export default Register;