import { Attachment } from 'ai';
import Image from 'next/image';

import { LoaderIcon } from './icons';

export const PreviewAttachment = ({
  attachment,
  isUploading = false,
}: {
  attachment: Attachment;
  isUploading?: boolean;
}) => {
  const { name, url, contentType } = attachment;

  return (
    <div className="flex flex-col gap-2">
      <div className="w-20 aspect-video bg-muted rounded-md relative flex flex-col items-center justify-center">
        {contentType ? (
          contentType.startsWith('image') ? (
            // NOTE: it is recommended to use next/image for images
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={url}
              src={url}
              alt={name ?? 'An image attachment'}
              className="rounded-md size-full object-cover"
            />
          ) : (
            <div className=""></div>
          )
        ) : (
          <div className=""></div>
        )}

        {isUploading && (
          <div className="animate-spin absolute text-zinc-500">
            <LoaderIcon />
          </div>
        )}
      </div>
      <div className="text-xs text-zinc-500 max-w-16 truncate">{name}</div>
    </div>
  );
};

export const EmptyState = () => (
  <div className="flex flex-col items-center justify-center p-8 text-center">
    <Image
      src="/images/empty-state.png"
      alt="No messages"
      width={300}
      height={300}
      priority
      className="mb-8"
    />
    <h3 className="mb-2 text-lg font-semibold">No messages yet</h3>
    <p className="text-muted-foreground">Start a conversation to see messages here.</p>
  </div>
);
