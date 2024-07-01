import prisma from '@/prisma';

export const getAboutService = async (id: number) => {
  try {
    const abouts = await prisma.about.findFirst({
      where: { id },
    });
    if (!abouts) {
      throw new Error('about not found');
    }

    return abouts;
  } catch (error) {
    throw error;
  }
};
