export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#8fa895] to-[#628068] text-[#47644c]"
    >
      <div className="text-center bg-white w-full py-16">
        <img src="/logo.png" alt="logo" className="w-24 mx-auto mb-8" />
        <h1 className="text-4xl font-bold mb-2">Oops!</h1>
        <p className="text-lg mb-4">Sorry, path not found.</p>
        <p className="text-md text-gray-700">
          <a href={`/`} className="underline">
            Go to Home
          </a>
        </p>
      </div>
    </div>
  );
}
