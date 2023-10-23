import { Google } from 'src/components/Icons';

function LoginApp() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 text-center lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Continue with your account
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                가지고 있는 계정으로 로그인하세요!
              </p>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <button
                type="button"
                className="font-roboto text-md inline-flex items-center gap-3.5 rounded-md bg-white py-2.5 pl-3.5 pr-6 text-gray-900 shadow-sm shadow-black/5 ring-1 ring-inset ring-gray-300 ring-offset-0 hover:bg-gray-50"
              >
                <Google />
                Google 계정으로 로그인
              </button>
            </div>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginApp;
