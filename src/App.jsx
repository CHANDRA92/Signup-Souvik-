import React, { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
}

// Custom hook to validate required fields
function useRequiredValidator(values) {
  const validate = () => {
    for (const value of Object.values(values)) {
      if (!value.trim()) {
        return false;
      }
    }
    return true;
  };

  return validate;
}

export default function App() {
  // State for form inputs
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const experience = useFormInput('');
  const documents = useFormInput('');

  // Validation function for required fields
  const isRequiredValid = useRequiredValidator({
    firstName: firstName.value,
    lastName: lastName.value,
  });

  // Handle form submission
  const handleSubmit = () => {
    if (!isRequiredValid()) {
      alert('Please fill out all required fields.');
      return;
    }

    // Log form data to console
    console.log('First Name:', firstName.value);
    console.log('Last Name:', lastName.value);
    console.log('Experience:', experience.value);
    console.log('Documents:', documents.value);
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">Sign up to create account</h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?
            <a href="#" title="" className="font-medium text-black transition-all duration-200 hover:underline"> Sign In </a>
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="firstName" className="text-base font-medium text-gray-900">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input {...firstName} className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="First Name" id="firstName" />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="text-base font-medium text-gray-900">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input {...lastName} className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="Last Name" id="lastName" />
                </div>
              </div>
              <div>
                <label htmlFor="experience" className="text-base font-medium text-gray-900">Tell me about your experience</label>
                <div className="mt-2">
                  <textarea {...experience} className="flex h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your experience..." id="experience" />
                </div>
              </div>
              <div>
                <label htmlFor="documents" className="text-base font-medium text-gray-900">Upload supporting documents</label>
                <div className="mt-2">
                  <input {...documents} type="file" id="documents" name="documents" className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
              </div>
              <div>
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                  Create Account
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
