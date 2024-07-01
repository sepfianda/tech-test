'use client';


import Dropzone from '@/components/Dropzone';
import FormInput from '@/components/FormInput';
import PreviewImages from '@/components/PreviewImages';
import { Button } from '@/components/ui/button';
import useAbout from '@/hooks/api/about/useAbout';
import { useAppSelector } from '@/redux/hooks';
import { IFormAbout } from '@/types/about.type';
import { useFormik } from 'formik';
import 'react-quill/dist/quill.snow.css';
import { validationSchema } from './validationSchema';

const Write = () => {
  const { createAbout } = useAbout();
  const { id } = useAppSelector((state) => state.user);
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<IFormAbout>({
    initialValues: {
        thumbnail: [],
        displayName: '',
        gender: '',
        birthday: '',
        horoscope: '',
        zodiac: '',
        height: "",
        weight: "",
    },
    validationSchema,
    onSubmit: (values) => {
      createAbout({ ...values});
    },
  });
  return (
    <main className="container mx-auto px-4">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <PreviewImages
            fileImages={values.thumbnail}
            onRemoveImage={(idx: number) =>
              setFieldValue('thumbnail', values.thumbnail?.toSpliced(idx, 1))
            }
          />
          <Dropzone
            isError={Boolean(errors.thumbnail)}
            label="Thumbnail"
            onDrop={(files) =>
              setFieldValue('thumbnail', [
                ...values.thumbnail,
                ...files.map((file) => file),
              ])
            }
          />
          <FormInput
            name="displayName"
            type="text"
            label="Display Name"
            placeholder="Enter Name"
            value={values.displayName}
            error={errors.displayName}
            isError={!!touched.displayName && !!errors.displayName}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            name="gender"
            type="text"
            label="Gender"
            placeholder="Gender"
            value={values.gender}
            error={errors.gender}
            isError={!!touched.gender && !!errors.gender}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            name="birthday"
            type="text"
            label="Birthday"
            placeholder="DD/MM/YYYY"
            value={values.birthday}
            error={errors.birthday}
            isError={!!touched.birthday && !!errors.birthday}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            name="horoscope"
            type="text"
            label="Horoscope"
            placeholder="Horoscope"
            value={values.horoscope}
            error={errors.horoscope}
            isError={!!touched.horoscope && !!errors.horoscope}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            name="zodiac"
            type="text"
            label="Zodiac"
            placeholder="Zodiac"
            value={values.zodiac}
            error={errors.zodiac}
            isError={!!touched.zodiac && !!errors.zodiac}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            name="height"
            type="number"
            label="Height"
            placeholder="Height"
            value={values.height}
            error={errors.height}
            isError={!!touched.height && !!errors.height}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            name="weight"
            type="number"
            label="Weight"
            placeholder="Weight"
            value={values.weight}
            error={errors.weight}
            isError={!!touched.weight && !!errors.weight}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <div className="mb-4 flex justify-end">
            <Button type="submit">Save & Update</Button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Write;