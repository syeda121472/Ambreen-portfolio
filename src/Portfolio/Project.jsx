
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) return;
    const video = document.querySelector("video");
    return () => video && video.pause();
  }, [activeVideo]);

  const allProjects = [
    
  {
    title: 'Rock Paper Scissors',
    description: 'A web-based implementation of  Stone Paper Scissors game.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQEs0NjicRPr2A/feedshare-shrink_800/feedshare-shrink_800/0/1726078195637?e=2147483647&v=beta&t=qyJ6SLvM_oZE9hHK7O_Opq0QS--G03dVauHwLg_jLiU',
    videoUrl: '/videos/stone-paper-scissors.mp4', 
    github: 'https://github.com/Ambreen731/Rock-paper-sessor',
  },

    {
      title: 'Portfolio',
      description: 'portfolio website built with React and Tailwind CSS.',
      imageUrl: 'https://cdn.dribbble.com/userupload/15684858/file/original-48f64cddaaf713a60e1c0195506611b9.jpg?resize=400x0',
      videoUrl: '/videos/portfolio.mp4',
      github: 'https://github.com/Ambreen731/portfolio',
    },
    {
      title: 'Tailwind Websites',
      description: 'Developed dynamic and reusable components using React.js.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HGYUqPSg_eEgS44tMB3LAnoIhlUfmMSfbg&s',
      videoUrl: '/videos/tailwind-website.mp4',
      github: 'https://github.com/Ambreen731/shoes',
    },
    {
  title: 'CRUD User Management',
  description: 'A MERN stack app to add, view, update, and delete users.',
  imageUrl: 'https://frontegg.com/wp-content/uploads/2022/03/rbac-2.png',
  videoUrl: '/videos/mern-crud-user-management.mp4',
  github: 'https://github.com/Ambreen731/user-management-form',
},


    {
      title: 'CRUD operations',
      description: 'Built a full-stack CRUD application using the MERN stack.',
      imageUrl: 'https://www.shutterstock.com/image-illustration/crud-acronym-create-read-update-600nw-2491959959.jpg',
      videoUrl: '/videos/crud-app.mp4',
      github: 'https://github.com/Ambreen731/CRUD',
    },
    {
      title: 'Tic Tac Toe',
      description: 'Created a React-based Tic Tac Toe game with win logic.',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*3Rv4KFuTU5IJxCvhY_-tsA.png',
      videoUrl: '/videos/Tic-Tac-Toe.mp4',
      github: 'https://github.com/Ambreen731/Tic-Tac-Toe',
    },
    {
      title: 'Tailwind Project',
      description: 'Designed a fully responsive UI with Tailwind CSS.',
      imageUrl: 'https://i.ytimg.com/vi/CQZxeoQeo5c/hq720.jpg',
      videoUrl: '/videos/tailwind-ui.mp4',
      github: 'https://github.com/Ambreen731/pararoz',
    },
  {
  title: 'Flavor Hub Website(full stack)',
  description: 'A MERN stack app to add, edit, and browse recipes images.',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnp37s654HHvuNb7vaab8zAMWo1-lTC_THA&s',
  videoUrl: '/videos/flavor-hub-demo.mp4',
  github: 'https://github.com/Ambreen731/Flavor-hub',
},


  ];

  return (
    <section id="project" className="min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-16 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Projects</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          A collection of projects I've worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative overflow-hidden bg-[#1e293b] p-4 rounded-xl border border-gray-700 shadow-lg transform hover:scale-105 transition-all duration-500 max-w-xs mx-auto"
          >
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg transition-all duration-300 transform hover:scale-110"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-cyan-400 opacity-10"></div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
              <p className="text-lg mt-2 text-gray-300">{project.description}</p>

              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-4">
                <motion.button
                  onClick={() => setActiveVideo(project.videoUrl)}
                  className="flex-1 py-2 px-4 bg-cyan-400 text-white font-semibold rounded-xl shadow-md hover:bg-cyan-500 hover:scale-105 transition-all duration-300"
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.button>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 px-4 bg-gray-900 text-white font-semibold rounded-xl shadow-md hover:bg-gray-700 hover:scale-105 transition-all duration-300"
                  whileTap={{ scale: 0.95 }}
                >
                  View on GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            className="bg-[#1e293b] p-4 rounded-xl max-w-3xl w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video controls className="w-full rounded-lg border border-cyan-400">
              <source src={activeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 bg-cyan-400 text-black font-bold px-3 py-1 rounded-full hover:bg-cyan-500 transition"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
