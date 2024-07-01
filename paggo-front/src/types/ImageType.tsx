type CreateImage = {
  uploadedImage: string;
  description: string;
  textRecognition: string;
};

type Image = {
  id: string;
  uploadedImage: string;
  description: string;
  userId: string;
  uploadedAt: string;
  textRecognition: string;
};

export type { CreateImage, Image };
