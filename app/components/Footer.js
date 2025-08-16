import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Developer Info */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-white text-lg">Developed by Ayush Rai</p>
          <p className="text-sm text-gray-400">AI Meeting Notes Summarizer</p>
          <p className="text-sm mt-2">
            <FaEnvelope className="inline mr-1" /> ayushrai3108@gmail.com
          </p>
          <p className="text-sm">
            <span className="mr-1">📞</span> +91-8318542040
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 text-sm">
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

      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Ayush Rai. All rights reserved.
      </div>
    </footer>
  );
}
