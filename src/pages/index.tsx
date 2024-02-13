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
            <a href="dominicksummer.pdf" className="whitespace-nowrap border border-blue-200 bg-blue-200 px-6 py-3 font-bold text-gray-900 transition hover:bg-gray-900 hover:text-blue-200"
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
              outside of the classroom, and I do this by creating various personal projects.

            </p>
            <p className="mb-4">Here are my favorite technologies that I&apos;ve been using:</p>
            <ul className="mb-4 grid grid-cols-2 whitespace-nowrap">
              <li className="list-inside list-disc">Python</li>
              <li className="list-inside list-disc">Flask</li>
              <li className="list-inside list-disc">MERN Stack</li>
              <li className="list-inside list-disc">Javascript</li>
              <li className="list-inside list-disc">TypeScript</li>
              <li className="list-inside list-disc">HTML/CSS</li>
            </ul>
            <p>
              Currently, I&apos;m a Valet Attendant at Universal's Orlando Resorts,
              where I demonstrate my skills in communication, leadership, and the ability to
              work in fast-paced environments. I am continuing to seek involvement in coding practices while at UCF 
              only to enhance my programming skills and soon acquire a Software Developer position.
            </p>
          </div>
        </div>
        <div className="mb-24 px-8">
          <div id="projects" className="mb-8 pt-24 text-2x1 font-bold">
            Projects
          </div>
          <ul className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            
            <li className="flex flex-col bg-gray-800 p-7 transition-transform hover:-translate-y-2">
              <a href="https://github.com/dazzo5/supticketproject.github.io" target="_blank">
                <div className="mb-4 text-lg font-bold">Support Ticket System</div>
                <p className="mb-6 text-sm">
                  Created a MERN stack application with MongoDB integration via Mongoose, enabling user registration, login/logout, and support ticket submission for an efficient and user-friendly experience.
                  Developed a RESTful API system, proficiently handling request types, error handling, database integration, secure route management, JWT token-based authorization using tools like POSTman and Rest Client.
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>MongoDB, Express.js, React.js, Node.js, APIs, Bootstrap, CSS</li>
                </ul>
              </a>
            </li>
            
            <li className="flex flex-col bg-gray-800 p-7 transition-transform hover:-translate-y-2">
              <a href="https://github.com/dazzo5/socialblog.github.io" target="_blank">
                <div className="mb-4 text-lg font-bold">Social Company Blog App</div>
                <p className="mb-6 text-sm">
                  Developed a fully functional Social Blog Platform enabling users to register, create, edit, and delete blog posts, manage their accounts, and interact with other users’ content. 
                  Demonstrated proficiency in handling errors, user authentication, connecting the backend to a database, utilizing Python OOP principles, Functions/Decorators, Flask Blueprints, CRUD, and HTML templates.
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>Python, Flask, SQlite, HTML, Bootstrap</li>
                </ul>
              </a>
            </li>

            <li className="flex flex-col bg-gray-800 p-7 transition-transform hover:-translate-y-2">
              <a href="https://github.com/dazzo5/pythonsortvisual.github.io" target="_blank">
                <div className="mb-4 text-lg font-bold">Sorting Algorithm Visualizer</div>
                <p className="mb-6 text-sm">
                  Designed and implemented a sorting algorithm visualizer utilizing Python and Pygame, providing real-time visualization and analysis of sorting algorithms, including Bubble, Insertion, Select and Shell Sorts.
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>Python, Pygame, Algorithms</li>
                </ul>
              </a>
            </li>
            
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
                  My portfolio website is designed to showcase my projects and skills, featuring sections for an introduction, about me, and a dedicated project showcase. It utilizes technologies like React, Next.js, TypeScript, is hosted on Vercel, 
                  and styled with Tailwind CSS to create an engaging and visually appealing presentation of my work



                </p>
                <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                  <li>React, Next.js, TypeScript, Vercel, Tailwind CSS</li>
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
