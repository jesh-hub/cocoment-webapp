import React from 'react';

type AvatarProps = {
  dataUrl?: string;
  name: string;
};

const Avatar = ({ dataUrl, name }: React.PropsWithChildren<AvatarProps>) => {
  const char = name !== '' ? name.slice(0, 1).toLocaleUpperCase() : '?';

  return (
    <>
      {dataUrl && (
        <img
          className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
          src={dataUrl}
          alt={name}
        />
      )}
      {!dataUrl && (
        <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-ccmt-neutral-200">
          <span className="text-4xl font-medium leading-none text-white">
            {char}
          </span>
        </span>
      )}
    </>
  );
};

export default Avatar;
