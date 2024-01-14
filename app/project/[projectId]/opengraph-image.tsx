/* eslint-disable @next/next/no-img-element */
import { BASE_URL } from '@/config/environment';
import { projects } from '@/constants/projects';
import getSlugFromString from '@/utils/getSlugFromString';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

type props = {
  params: {
    projectId: string;
  };
};

export default async function Image({ params }: props) {
  const projectId = params?.projectId;
  const project = projects.find(
    (project) => getSlugFromString(project.title) === projectId,
  );

  const backgroundImage = `${BASE_URL}/${project?.image.src}`;

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full items-center justify-center">
        {/* Background */}
        <div tw="absolute inset-0 flex">
          <img
            tw="flex flex-1 object-cover mx-auto my-auto"
            src={backgroundImage}
            alt={project?.title!!}
          />
          {/* Overlay */}
          <div tw="absolute inset-0 bg-black bg-opacity-70" />
        </div>

        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="flex flex-wrap mx-auto items-center text-7xl font-bold">
            {project?.title}
          </div>

          <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
            <div tw={`font-medium text-emerald-600`}>Suhaan Bhandary</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div tw="flex">
              {`${project?.startDate}${
                project?.endDate ? ` - ${project?.endDate}` : ''
              }`}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
