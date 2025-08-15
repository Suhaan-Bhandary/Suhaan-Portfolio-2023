import { talks } from '@/constants/talks';
import { Calendar, MapPin } from 'lucide-react';

export default function ConferenceTalks() {
  return (
    <div
      className="container mx-auto max-w-[1100px] scroll-m-24 py-16"
      id="conference-talks"
    >
      <h2 className="mb-2 text-center text-4xl font-semibold">
        Conference Talks
      </h2>
      <p className="text-center text-textLight-400">
        Sharing my thoughts and perspectives with the world.
      </p>

      <div className="mx-auto my-10 grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {talks.map((talk, index) => (
          <div key={index} className="shadow-md rounded-md bg-bgBlack-400 p-6">
            <h3 className="text-lg font-semibold">{talk.title}</h3>

            {talk.youtube && (
              <div className="my-3 aspect-video w-full overflow-hidden rounded-md">
                <iframe
                  className="h-full w-full"
                  src={talk.youtube}
                  title={talk.title}
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <div className="mb-3 flex items-center gap-4 text-sm text-textLight-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-accent-400" /> {talk.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-accent-400" /> {talk.location}
              </span>
            </div>

            <p className="mb-4 text-textLight-400">{talk.description}</p>
            <p className="font-medium text-accent-400">{talk.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
