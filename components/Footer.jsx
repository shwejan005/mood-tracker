function Footer() {
  return (
    <footer className="bg-[#dffdd1] text-green-700 py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p className="text-xl font-semibold">
          "Track your mood, reflect on your journey, and grow with Zen. 🌱"
        </p>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 hover:text-green-600 transition"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.825.775A4.932 4.932 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.384 4.482 13.944 13.944 0 0 1-10.125-5.134 4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.215 2.188 4.099A4.904 4.904 0 0 1 .96 8.136v.061a4.923 4.923 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.212.084 4.93 4.93 0 0 0 4.604 3.419A9.867 9.867 0 0 1 0 20.407a13.9 13.9 0 0 0 7.548 2.209c9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.637A10.025 10.025 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 hover:text-green-600 transition"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297a12.014 12.014 0 0 0-3.797 23.403c.6.11.82-.258.82-.576v-2.014c-3.338.726-4.043-1.413-4.043-1.413-.546-1.387-1.334-1.756-1.334-1.756-1.091-.745.082-.729.082-.729 1.206.084 1.838 1.236 1.838 1.236 1.071 1.831 2.809 1.303 3.496.997.107-.774.418-1.304.762-1.604-2.665-.3-5.467-1.332-5.467-5.93 0-1.309.467-2.381 1.235-3.221-.125-.303-.536-1.522.118-3.176 0 0 1.007-.323 3.3 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.291-1.553 3.3-1.23 3.3-1.23.655 1.654.244 2.873.118 3.176.768.84 1.235 1.912 1.235 3.221 0 4.61-2.807 5.625-5.48 5.92.43.372.813 1.103.813 2.222v3.293c0 .322.216.694.826.576A12.014 12.014 0 0 0 12 .297z" />
            </svg>
          </a>
        </div>
        <p className="text-sm text-green-600">
          &copy; {new Date().getFullYear()} Zen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
