import Image from "next/image";
import Link from "next/link";
import imageList from '@/imageList.json';

export default function Home() {
  return (
      <>
          <header>
            <h1 className="text-3xl font-bold text-center p-4">Image Gallery</h1>
          </header>
          <main className="flex flex-wrap gap-4 justify-center p-4">
              {imageList.map((imageName, index) => (
                  <Link
                      key={index}
                      href={`/image/${encodeURIComponent(imageName)}`}
                      className="w-64 h-64 relative overflow-hidden rounded-sm cursor-pointer"
                  >
                      <Image
                          src={`/images/${imageName}`}
                          alt={`Image ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 256px, (max-width: 1200px) 224px, 192px"
                          className="object-cover"
                          quality={75}
                      />
                  </Link>
              ))}
          </main>
      </>
  );
}
