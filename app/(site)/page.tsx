import Image from 'next/image';
import sortBy from 'lodash/sortBy';
import Link from 'next/link';
import { getProjects } from '@/sanity/sanity-utils';

export default async function Home() {
  const projects = await getProjects();
  const sortedObjects = sortBy(projects, ['user', '_createdAt']);

  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hello, I&apos;m Julian!</h1>
      <p className="mt-3 text-xl text-gray-600">
        Hi everyone! Check out some of the projects I&apos;ve worked on during my professional career
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedObjects?.map((project) => (
          <Link
            href={`/projects/${project?.slug}`}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            key={project?._id}
          >
            {project?.image && (
              <Image
                className="object-cover rounded-lg border border-gray-500"
                src={project?.image}
                alt={project?.name}
                height={300}
                width={750}
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project?.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
