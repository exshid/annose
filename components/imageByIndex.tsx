import cover from '../public/images/cover.jpg'
import coverII from '../public/images/cover-ii.jpg'

export const images: string[] = [cover, coverII]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
