import { useState } from 'react';
import Avatar from 'src/components/Avatar';
import Button from 'src/components/Button';
import FormControl from 'src/components/FormControl';
import useErrorHandler from 'src/hooks/useErrorHandler';
import useOpener, { close, postMessage } from 'src/hooks/useOpener';
import useResizeHandler from 'src/hooks/useResizeHandler';
import { alwaysResolver } from 'src/utils/resolver';
import type { ChangeEvent } from 'react';

function UserProfile() {
  const [_, outerHeight] = useResizeHandler();

  const [avatar, setAvatar] = useState<File>();
  const [avatarDataUrl, setAvatarDataURL] = useState('');
  const [nickname, setNickname] = useState('');

  const avatarInvalid = useErrorHandler();
  const nicknameInvalid = useErrorHandler();

  useOpener<{
    url: string;
    name: string;
  }>(({ url, name }) => {
    setAvatarDataURL(url);
    setNickname(name);
  });

  const handleChangeAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const [_, error] = await alwaysResolver(async () => {
      const [file] = e.target.files || [];

      if (file === undefined) throw new Error('파일을 다시 확인해주세요.');
      if (!file.type.startsWith('image/'))
        throw new Error('이미지 파일만 첨부할 수 있어요.');

      const reader = new FileReader();
      await new Promise<void>((resolve, reject) => {
        reader.onload = () => resolve();
        reader.onerror = (event: ProgressEvent<FileReader>) => {
          if (event.target?.error) reject(event.target.error);
          else reject(new Error('첨부하신 이미지 파일을 처리할 수 없습니다.'));
        };
        reader.readAsDataURL(file);
      });

      if (reader.result !== null) setAvatarDataURL(reader.result as string);
      setAvatar(file);
    });

    if (error !== undefined) avatarInvalid.set(error.message);
  };

  return (
    <div
      className="flex w-full items-center justify-center bg-gray-50"
      style={{ height: outerHeight + 'px' }}
    >
      <div className="w-4/5 bg-white px-6 py-12 shadow sm:mx-auto sm:h-auto sm:w-[480px] sm:rounded-lg sm:px-12">
        <form
          className="space-y-6"
          onSubmit={e => {
            e.preventDefault();
            if (nickname !== '') {
              avatarInvalid.reset();
              nicknameInvalid.reset();
              postMessage({ avatar, nickname });
              close();
            } else nicknameInvalid.set('닉네임은 빈 값일 수 없습니다.');
          }}
        >
          <div className="text-center">
            <Avatar dataUrl={avatarDataUrl} name={nickname} />
            <FormControl
              outer={children => <div className="mt-2">{children}</div>}
              id="avatar"
              type="file"
              accept="image/*"
              hidden
              label="사진 변경"
              invalid={avatarInvalid.invalid}
              invalidMessage={avatarInvalid.message}
              onChange={handleChangeAvatar}
            />
          </div>
          <FormControl
            outer={children => <div className="space-y-2">{children}</div>}
            id="nickname"
            type="text"
            label="닉네임"
            value={nickname}
            invalid={nicknameInvalid.invalid}
            invalidMessage={nicknameInvalid.message}
            onChange={({ target: { value } }) => setNickname(value)}
          />
          <div className="space-y-2">
            <Button type="submit" variant="primary" fullWidth>
              프로필 저장하기
            </Button>
            <Button variant="secondary" fullWidth onClick={close}>
              저장하지 않고 닫기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
