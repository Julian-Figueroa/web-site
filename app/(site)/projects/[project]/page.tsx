import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { getProject } from '@/sanity/sanity-utils';

type ProjectProps = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: ProjectProps) {
  const slug = params?.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl text-orange-500 drop-shadow font-extrabold">{project?.name}</h1>
        <a
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-orange-500 hover:text-orange-100 transition"
          href={project?.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </header>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project?.content} />
      </div>
      {project?.image && (
        <Image
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
          src={project?.image}
          alt={project?.name}
          height={1080}
          width={1920}
        />
      )}
    </div>
  );
}
