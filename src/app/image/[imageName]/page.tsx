"use client"
import {useParams} from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageDetail() {
    const { imageName } = useParams();

    if (!imageName) return null; // Return null if imageName is not available yet

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="relative w-full" style={{ height: '70vh' }}>
                <Image
                    src={`/images/${imageName}`}
                    alt={imageName[0]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    className="object-contain"
                    quality={100}
                    priority
                />
            </div>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-2">{imageName}</h1>
                <Link
                    href="/"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Back to Gallery
                </Link>
            </div>
        </div>
    );
}
