// components/forms/LoginForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      // Handle form submission
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
