'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import useRegister from '@/hooks/api/auth/useRegister';

const Register = () => {
  const { register } = useRegister();
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      register(values);
    },
  });

  return (
    <main className="container bg-[#163136] pt-56 pb-56">
      <div className="flex justify-center">
        <Card className="w-[450px] bg-[#142C31]">
          <CardHeader>
            <CardTitle className="text-left text-3xl text-white">
              Register
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid w-full items-center gap-4">
              <FormInput
                  name="email"
                  type="text"
                  label=""
                  placeholder="Enter Email"
                  value={formik.values.email}
                  error={formik.errors.email}
                  isError={!!formik.touched.email && !!formik.errors.email}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
                <FormInput
                  name="userName"
                  type="text"
                  label=""
                  placeholder="Create User Name"
                  value={formik.values.userName}
                  error={formik.errors.userName}
                  isError={
                    !!formik.touched.userName && !!formik.errors.userName
                  }
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
                <FormInput
                  name="password"
                  type="password"
                  label=""
                  placeholder="Create Password"
                  value={formik.values.password}
                  error={formik.errors.password}
                  isError={
                    !!formik.touched.password && !!formik.errors.password
                  }
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
                <FormInput
                  name="password"
                  type="password"
                  label=""
                  placeholder="Confirm Password"
                  value={formik.values.password}
                  error={formik.errors.password}
                  isError={
                    !!formik.touched.password && !!formik.errors.password
                  }
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
              </div>
              <Button className="mt-6 w-full bg-[#53B3D3]">Register</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Register;
