import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <title>Dominick Randazzo</title>
      <div className="mx-auto max-w-screen-lg">
        <nav className="text-white p-0 flex items-center justify-between">
          <div className="flex-1 text-2xl font-bold">Randazzo.io</div>
          <ul className="px-2 flex space-x-4">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="px-2 flex space-x-4 border border-blue-200 px-6 py-3">
            <a
              href="https://github.com/dazzo5"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dominick-randazzo"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </nav>

        <div className="flex h-screen flex-col justify-center px-8">
          <div className="mb-5 text-base">Hi! My name is</div>
          <div className="mb-3 text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">
            Dominick Randazzo.
          </div>
          <div className="mb-6 text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">
            I&apos;m a Software Developer and Computer Science Student.
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" 
            className="border border-blue-200 px-6 py-3 font-bold transition hover:bg-blue-200 hover:text-gray-900">
              View My Projects
            </a>
            <a href="randazzoresume.pdf" className="whitespace-nowrap border border-blue-200 bg-blue-200 px-6 py-3 font-bold text-gray-900 transition hover:bg-gray-900 hover:text-blue-200"
            target="_blank"
            rel="noopener noreferrer"
            >
              Check Out My Resume
            </a>
          </div>
        </div>
        <div className="mb-24 px-8">
          <div id="about" className="mb-8 pt-24 text-2x1 font-bold">
            About Me
          </div>
          <div className="max-w-lg">
            <p className="mb-4">
              Hey! My name is Dominick, and I&apos;m a Computer Science student studying
              at the University of Central Florida.
            </p>
            <p className="mb-4">
              I have spent countless hours exposing myself to many different technologies and frameworks
              outside of the classroom. 

            </p>
            <p className="mb-4">Here are some that I&apos;ve been using:</p>
            <ul className="mb-4 grid grid-cols-2 whitespace-nowrap">
              <li className="list-inside list-disc">Python</li>
              <li className="list-inside list-disc">HTML</li>
              <li className="list-inside list-disc">CSS/Tailwind CSS</li>
              <li className="list-inside list-disc">Javascript</li>
              <li className="list-inside list-disc">ReactJS</li>
              <li className="list-inside list-disc">NextJS</li>
            </ul>
            <p>
              Currently, I&apos;m a Valet Attendant at Universal's Orlando Resorts,
              where I demonstrate my skills in communication, leadership, and the ability to
              work in fast-paced environments. I am continuing to seek involvement in coding practices while at UCF 
              to only enhance my programming skills and soon acquire a Software Developer position.
            </p>
          </div>
        </div>
        <div className="mb-24 px-8">
          <div id="projects" className="mb-8 pt-24 text-2x1 font-bold">
            Projects
          </div>
          <ul className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex flex-col bg-gray-800 p-7 transition-transform hover:-translate-y-2">
              <a href="https://github.com/dazzo5/file-automator.github.io" target="_blank">
                <div className="mb-4 text-lg font-bold">Python File Organizer</div>
                <p className="mb-6 text-sm">
                  Python Code that automates your desktop file management and declutters your downloads folder. This app will automatically organize and move your downloads into folders based on file type.
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>Python</li>
                </ul>
              </a>
            </li>
            <li className="flex flex-col bg-gray-800 p-7 transition-transform hover:-translate-y-2">
              <a href="https://github.com/dazzo5/main-portfolio" target="_blank">
                <div className="mb-4 text-lg font-bold">This Website!</div>
                <p className="mb-6 text-sm">
                  My Portfolio website that has an introduction, about me, project, and contact section.
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>Tailwind CSS, Git/GitHub, React, Next.js, Node.js, TypeScript, Vercel</li>
                </ul>
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-auto mb-48 max-w-2x1 flex-col px-8">
          <div id="contact" className="mb-8 pt-24 text-center text-5xl font-bold">
            Contact
          </div>
          <p className="mb-12 text-center">
            I&apos;m always open to learning and enhancing my programming skills, and the 
            best way to reach out is through my email. If you have a question or simply just want to say hi, I&apos;ll 
            get  back to you as soon as I can!
            </p>
          <a href="mailto:dominickrandazzo5@gmail.com" className="mx-auto block w-max border border-blue-200 px-6 py-3 font-bold transition hover:bg-blue-200 hover:text-gray-900">
            Send a message
          </a>
        </div>
      </div>
    </main>
  );
}
