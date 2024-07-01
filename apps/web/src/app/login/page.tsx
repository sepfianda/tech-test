'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import useLogin from '@/hooks/api/auth/useLogin';

const Login = () => {
  const { login } = useLogin();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        userName: '',
        email: '',
        password: '',
      },
       validationSchema,
      onSubmit: (values) => {
         login(values);
      },
    });

return (
  <main className="container bg-[#163136] pt-56 pb-56">
    <div className="flex justify-center">
      <Card className="w-[450px] bg-[#142C31]">
        <CardHeader>
          <CardTitle className="text-left text-3xl text-white">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <FormInput
                name="email"
                type="text"
                label=""
                placeholder="Enter Email"
                value={values.email}
                error={errors.email}
                isError={!!touched.email && !!errors.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <FormInput
                name="password"
                type="password"
                label=""
                placeholder="Enter Password"
                value={values.password}
                error={errors.password}
                isError={!!touched.password && !!errors.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <Button className="mt-6 w-full bg-[#53B3D3]">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </main>
);
}


export default Login;
