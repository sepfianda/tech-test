import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  displayName: Yup.string().required('Display Name is required'),
  gender: Yup.string().required('Gender is required'),
  thumbnail: Yup.array().min(1),
  birthday: Yup.string().required('Birthday is required'),
  horoscope: Yup.string().required('Horoscope is required'),
  zodiac: Yup.string().required('Zodiac is required'),
  height: Yup.string().required('Height is required'),
  weight: Yup.string().required('weight is required'),
});



       
      
      
       
       
