export default function getBase64Image(img: any): string {
  const canvas = document.createElement('canvas');
  const image = new Image();
  const ctx = canvas.getContext('2d');

  let imageBase64: any;

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;

    ctx?.drawImage(image, 0, 0);

    console.log(canvas.toDataURL('image/jpeg'));
  };

  return imageBase64;
}
