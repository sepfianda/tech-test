import prisma from '@/prisma';
import { About} from '@prisma/client';

interface CreateAboutBody
  extends Omit<
    About,
    'id'  | 'thumbnail'
  > {}

export const createAboutService = async (
  body: CreateAboutBody,
  file: Express.Multer.File
) => {
  try {
    const { displayName } = body;

    const existingTitle = await prisma.about.findFirst({
      where: { displayName },
    });

    if (existingTitle) {
      throw new Error('displayName already in use');
    }

    return await prisma.about.create({
      data: {
        ...body,
        thumbnail: `/images/${file.filename}`,

      },
    });
  } catch (error) {
    throw error;
  }
};
