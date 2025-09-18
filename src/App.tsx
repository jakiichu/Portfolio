import './App.css'

const App = ()=> {

  return (
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <div className="flex h-full grow flex-col items-center">
              <div className="w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                  <div className="flex flex-col items-center space-y-12">
                      <header className="text-center">
                          <div
                              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-32 h-32 mx-auto mb-6"
                              style={{backgroundImage: ("https://lh3.googleusercontent.com/aida-public/AB6AXuD7K8CjVKMjozatvtJAjGaTL8KcgeiaiPkOrg2ghw7J040Ng4Mz7_EzCouA0k76jdd1ymIzSZVa4uRtO93H0vAd7WvDbQAA57e-3N1LvKRZJijjqG9WMtJSnhl_U38J9Ax9yiKYueAQMceu3jdhygGaT82sPGkYZMsNzANvlTm7e96ikr46MfXBf5X75A8My6N6jifJeLMpegv-Dr4E8oDXXCzT5gggbY5PnCorQ_W9R-uTVsQBFOErDAE1bXbfKs9lG4IqKtOB_g")}}></div>
                          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Ethan Carter</h1>
                          <p className="text-xl text-primary mt-1">Software Developer</p>
                      </header>
                      <section className="w-full text-center">
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                              I'm a software developer with a passion for creating innovative solutions. I specialize in
                              building scalable and efficient applications using modern technologies. My goal is to
                              contribute to projects that make a positive impact.
                          </p>
                      </section>
                      <section className="flex space-x-6">
                          <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                             href="#">
                              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                              </svg>
                          </a>
                          <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                             href="#">
                              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                              </svg>
                          </a>
                          <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                             href="#">
                              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19Zm-61.14,36L86.15,126.35l-49.6-9.73ZM96,200V152.52l24.79,21.74Zm87.53,8L100.85,135.5l119-85.29Z"></path>
                              </svg>
                          </a>
                          <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                             href="#">
                              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                              </svg>
                          </a>
                      </section>
                      <section className="w-full">
                          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Skills</h2>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                              <div className="flex flex-col items-center space-y-2">
                                  <div
                                      className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                      <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px"
                                           xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M176,156a12,12,0,1,1-12-12A12,12,0,0,1,176,156ZM92,144a12,12,0,1,0,12,12A12,12,0,0,0,92,144Zm148,24v24a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V169.13A113.38,113.38,0,0,1,51.4,86.72L26.34,61.66A8,8,0,0,1,37.66,50.34L63.82,76.5a111.43,111.43,0,0,1,128.55-.19l26-26a8,8,0,0,1,11.32,11.32L204.82,86.5c.75.71,1.5,1.43,2.24,2.17A111.25,111.25,0,0,1,240,168Zm-16,0a96,96,0,0,0-96-96h-.34C74.91,72.18,32,115.75,32,169.13V192H224Z"></path>
                                      </svg>
                                  </div>
                                  <p className="font-semibold text-gray-700 dark:text-gray-300">Java</p>
                              </div>
                              <div className="flex flex-col items-center space-y-2">
                                  <div
                                      className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                      <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px"
                                           xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"></path>
                                      </svg>
                                  </div>
                                  <p className="font-semibold text-gray-700 dark:text-gray-300">React</p>
                              </div>
                              <div className="flex flex-col items-center space-y-2">
                                  <div
                                      className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                      <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px"
                                           xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M216,152.09V216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152.09a8,8,0,0,1,16,0V208H200V152.09a8,8,0,0,1,16,0Zm-128,32h80a8,8,0,1,0,0-16H88a8,8,0,1,0,0,16Zm4.88-53,77.27,20.68a7.89,7.89,0,0,0,2.08.28,8,8,0,0,0,2.07-15.71L97,115.61A8,8,0,1,0,92.88,131Zm18.45-49.93,69.28,40a8,8,0,0,0,10.93-2.93,8,8,0,0,0-2.93-10.91L119.33,67.27a8,8,0,1,0-8,13.84Zm87.33,13A8,8,0,1,0,210,82.84l-56.57-56.5a8,8,0,0,0-11.32,11.3Z"></path>
                                      </svg>
                                  </div>
                                  <p className="font-semibold text-gray-700 dark:text-gray-300">Spring</p>
                              </div>
                              <div className="flex flex-col items-center space-y-2">
                                  <div
                                      className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                      <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px"
                                           xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>
                                      </svg>
                                  </div>
                                  <p className="font-semibold text-gray-700 dark:text-gray-300">SQL</p>
                              </div>
                          </div>
                      </section>
                      <section className="w-full">
                          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Portfolio
                              Preview</h2>
                          <div className="space-y-8">
                              <div
                                  className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-gray-800/20 p-6 rounded-lg">
                                  <div className="flex-1">
                                      <p className="text-sm font-medium text-primary mb-1">Featured Project</p>
                                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">E-commerce
                                          Platform</h3>
                                      <p className="text-gray-600 dark:text-gray-400">
                                          A robust e-commerce platform with user authentication, product management, and
                                          payment gateway integration.
                                      </p>
                                  </div>
                                  <div
                                      className="w-full md:w-64 h-48 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
                                      style={{backgroundImage: ("https://lh3.googleusercontent.com/aida-public/AB6AXuCu9rYdH_VcRml7htPLCHI3xj4XbEMeNDTGsZIftqIrmmeLQyaayGGVuwDayvr_8ZTtgxsW3I91g8UXuCEoPZFFBa8LrAfTZQlHTfcvth_wxYHOnc-KaQPACFXNJE3j-ZJxi8ov6WulQHezG32oJIrDc9i4w63g2dA1fqmCjLQDC6fV5QQMex5xSnVlpjhP0Tm3A102NpT63en7-7ET_AkoZ_nzFixrJrj9TylCeoOG2fRl86SACaKcodY2EaTXHw2X63_fYElsDg")}}></div>
                              </div>
                              <div
                                  className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-gray-800/20 p-6 rounded-lg">
                                  <div className="flex-1">
                                      <p className="text-sm font-medium text-primary mb-1">Featured Project</p>
                                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Task
                                          Management App</h3>
                                      <p className="text-gray-600 dark:text-gray-400">
                                          A task management application with real-time collaboration features, built
                                          using React and Firebase.
                                      </p>
                                  </div>
                                  <div
                                      className="w-full md:w-64 h-48 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
                                      style={{backgroundImage: ("https://lh3.googleusercontent.com/aida-public/AB6AXuD88fL5cku9NT1zDXVV6OCg3y728siQpAQcLjJSoZFu6Ca4ua-SKSXOngt3ZSDCMCPeQjYnx38hrqf3fy7Wc0NR5BOz4oS_EBsw864e2sxZm9N1sJQGDlnC-W-53lYlQSKRv2tplTNvg_1AOXlElXqgaL9Bto-qv6wl386jnnDGNV7u1NIXx3fOVq0mVf36vIVwwq6YJuPpFBKh6ZSfD_2MVFc7dope2FsazEcAuuSLBkl5s52aV8DEE2-Bz-mE9Jwr_i_NDupN6g")}}></div>
                              </div>
                          </div>
                      </section>
                      <div className="pt-8">
                          <button
                              className="bg-primary text-white font-bold h-12 px-8 rounded-full transition-transform hover:scale-105">
                              Contact Me
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default App
