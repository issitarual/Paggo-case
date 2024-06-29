type CreateImage = {
  uploadedImage: string;
  description: string;
  userId: string;
};

type GetImages = {
  userId: string;
};

type Image = {
  id: string;
  uploadedImage: string;
  description: string;
  userId: string;
  uploadedAt: string;
  textRecognition: string;
};

export type { CreateImage, GetImages, Image };
