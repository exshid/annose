import image1 from '../public/images/cover.jpg'
import image2 from '../public/images/cover-ii.jpg'

export const images: string[] = [image1, image2]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
