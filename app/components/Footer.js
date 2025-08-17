import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Developer Info */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <p className="font-semibold text-white text-xl md:text-2xl">Developed by Ayush Rai</p>
          <p className="text-sm md:text-base text-gray-400 mt-1">AI Meeting Notes Summarizer</p>
          <p className="text-sm md:text-base mt-3 flex items-center">
            <FaEnvelope className="inline mr-2 text-gray-400" /> ayushrai3108@gmail.com
          </p>
          <p className="text-sm md:text-base mt-1 flex items-center">
            <span className="mr-2 text-gray-400">📞</span> +91-8318542040
          </p>
        </div>

        {/* Social Links */}
        <div className="md:w-1/2 flex flex-col md:flex-row justify-start md:justify-end items-start md:items-center space-y-3 md:space-y-0 md:space-x-8 text-sm">
          <a
            href="https://github.com/ayush123-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition-colors"
          >
            <FaGithub /> <span>GitHub</span>
          </a>

          <a
            href="https://ayushrai-jan-2004.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition-colors"
          >
            <FaGlobe /> <span>Portfolio</span>
          </a>

          <a
            href="https://linkedin.com/in/ayush-rai-7109202b6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition-colors"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs md:text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Ayush Rai. All rights reserved.
      </div>
    </footer>
  );
}
