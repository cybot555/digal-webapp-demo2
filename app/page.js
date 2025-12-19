import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="text-center -mt-5">
          <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter text-balance text-white">
            How To Use Tailwind CSS
          </h1>
          <p className="text-base sm:text-lg font-light tracking-loose text-white -mt-1 uppercase">
            Module 1 Formative Assessment 4 by Cyrus Glenn L. Digal
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 mt-16 lg:mt-20 text-center lg:text-left">
          {/* LEFT: Text */}
          <div className="max-w-2xl">
            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-7xl tracking-tighter text-balance text-white">
              But What is Tailwind CSS?
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-light tracking-loose text-white mt-3 sm:mt-2 leading-relaxed">
              Tailwind CSS is a utility-first CSS framework that lets you style
              your website directly in HTML using predefined classes.
            </p>
          </div>

          {/* RIGHT: Image */}
          <img
            src="/tailwind.png"
            className="w-48 sm:w-60 md:w-72 lg:w-80 h-auto object-contain drop-shadow-lg"
            alt="Tailwind Logo"
          />
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-4xl shadow-lg mt-10">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* LEFT: Text + Code Box */}
            <div className="w-full lg:w-1/2 text-left">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-fuchsia-500 uppercase">
                STEP 1: Plug-in Tailwind CSS
              </p>

              <div className="bg-neutral-700 p-7 sm:p-8 rounded-2xl shadow-lg mt-5 w-full">
                <p className="text-white font-mono text-xs sm:text-sm uppercase font-extrabold">
                  Add this inside your head tag:
                </p>

                <pre className="text-white font-mono text-xs sm:text-sm mt-4 whitespace-pre-wrap break-words leading-relaxed">
                  &lt;script
                  src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
                </pre>

                <p className="text-white font-mono text-xs sm:text-sm mt-6 uppercase font-extrabold">
                  Your full basic setup:
                </p>

                <pre className="text-white font-mono text-xs sm:text-sm mt-4 whitespace-pre-wrap break-words leading-relaxed">
                  {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tailwind Tutorial</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
</body>
</html>`}
                </pre>
              </div>
            </div>

            {/* RIGHT: Explanation */}
            <div className="w-full lg:w-1/2 mt-2">
              <p className="text-2xl font-extrabold tracking-tighter text-fuchsia-500 mt-10 lg:mt-20">
                This setup allows you to start using Tailwind CSS instantly
                without installing anything.
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tighter text-fuchsia-500 mt-6 lg:mt-5 leading-tight">
                Simply include the CDN script inside your HTML file’s head tag,
                and you can immediately apply Tailwind utility classes to style
                your website.
              </p>
            </div>


          </div>
        </div>

{/* {first tailwind styling} */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          <div className="w-full lg:w-1/2 text-left mt-10">
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">STEP 2: STYLE YOUR FIRST!</p>
          <section className="bg-neutral-700 p-7 sm:p-8 rounded-2xl shadow-lg mt-5 w-full">
            <pre className="text-white font-normal text-xs sm:text-sm mt-4 whitespace-pre-wrap wrap-break-word leading-relaxed">
            {`<h1 class="text-3xl font-bold text-purple-600">
              Hello Tailwind CSS
            </h1>`}
            </pre>
          </section>
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase mt-5">RESULT:</p>
                <h1 class="text-3xl font-bold text-blue-600">
                  Hello Tailwind CSS
                </h1>
          </div>

          <div className="w-full lg:w-1/2 text-left mt-10">
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">WHAT HAPPENED?</p>
          <div className="mt-5">
            <p className="lg:text-4xl  sm:text-2xl font-bold tracking-tight text-white lowercase ">text-3xl → makes the text large</p>
            <p className="lg:text-4xl sm:text-2xl font-bold tracking-tight text-white lowercase ">font-bold → makes the text bold</p>
            <p className="lg:text-4xl sm:text-2xl font-bold tracking-tight text-white lowercase  ">text-purple-600 → makes the text purple</p>
          </div>
            
          </div>
        </div>





      </div>
    </div>
  );
}
