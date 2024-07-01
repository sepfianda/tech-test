'use client';

import { axiosInstance } from '@/lib/axios';
import { About, IFormAbout } from '@/types/about.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FileWithPath } from 'react-dropzone';


const useAbout = () => {
  const router = useRouter();
  const createAbout = async (payload: IFormAbout) => {
    try {
      const { thumbnail, birthday, displayName, gender, height, horoscope, weight, zodiac} =
        payload;

      const createAboutForm = new FormData();

      for (const [key, value] of Object.entries(payload)) {
        console.log('key', key);
        console.log('value', value);
      }

      createAboutForm.append('displayName', displayName);
      createAboutForm.append('birthday', birthday);
      createAboutForm.append('gender', gender);
      createAboutForm.append('height', height);
      createAboutForm.append('weight', weight);
      createAboutForm.append('horoscope', horoscope);
      createAboutForm.append('zodiac', zodiac);
     

      thumbnail.forEach((file: FileWithPath) => {
        createAboutForm.append('thumbnail', file);
      });

      await axiosInstance.post<About>('/abouts', createAboutForm);
      // toast success here 👇👇👇
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO: replace log with toast
        console.log(error);
      }
    }
  };
  return { createAbout };
};

export default useAbout;