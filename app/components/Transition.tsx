import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface TransitionProps {
  className?: string; // Make className optional
}
export const TailoringServices = ({
  currentService,
}: {
  currentService?: string;
}) => {
  const getClassName = (id: string) => {
    return currentService === id ? 'text-secondary' : 'text-white';
  };
  const isServiceActive = (id: string) => {
    return currentService === id;
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      viewBox="0 0 500 500"
      className="h-52"
    >
      <motion.path
        d="M263.646 262.166V419.397H370.851C376.057 419.397 381.213 418.299 386.023 416.166C390.834 414.033 395.204 410.906 398.886 406.964C402.568 403.022 405.488 398.342 407.481 393.192C409.473 388.042 410.499 382.522 410.499 376.947V262.166H263.646ZM356.888 290.635C359.382 290.01 361.999 290.272 364.342 291.382C366.685 292.492 368.626 294.389 369.871 296.786C371.117 299.183 371.599 301.949 371.244 304.666C370.89 307.382 369.718 309.901 367.906 311.841C366.095 313.78 363.742 315.035 361.205 315.415C358.668 315.794 356.084 315.278 353.845 313.945C351.606 312.611 349.834 310.533 348.798 308.025C347.761 305.516 347.516 302.714 348.1 300.044C348.588 297.748 349.671 295.646 351.226 293.982C352.781 292.317 354.744 291.157 356.888 290.635ZM311.88 290.635C314.374 290.01 316.991 290.272 319.334 291.382C321.676 292.492 323.618 294.389 324.863 296.786C326.109 299.183 326.591 301.949 326.236 304.666C325.881 307.382 324.71 309.901 322.898 311.841C321.086 313.78 318.734 315.035 316.197 315.415C313.659 315.794 311.076 315.278 308.837 313.945C306.598 312.611 304.826 310.533 303.79 308.025C302.753 305.516 302.508 302.714 303.092 300.044C303.58 297.748 304.663 295.646 306.218 293.982C307.773 292.317 309.735 291.157 311.88 290.635ZM326.994 391.248H302.161C301.532 391.248 300.912 391.097 300.345 390.806C299.778 390.516 299.279 390.092 298.885 389.568C298.491 389.043 298.212 388.431 298.069 387.775C297.926 387.12 297.922 386.439 298.057 385.781L310.482 325.352C310.687 324.349 311.205 323.452 311.952 322.808C312.698 322.165 313.628 321.814 314.586 321.814C315.544 321.814 316.474 322.165 317.22 322.808C317.967 323.452 318.485 324.349 318.69 325.352L331.115 385.781C331.251 386.44 331.246 387.123 331.102 387.78C330.958 388.437 330.677 389.05 330.281 389.575C329.886 390.1 329.385 390.523 328.816 390.813C328.246 391.102 327.624 391.251 326.994 391.248ZM376.105 327.196L363.671 387.625C363.467 388.628 362.949 389.525 362.202 390.169C361.456 390.812 360.526 391.163 359.568 391.163C358.609 391.163 357.68 390.812 356.933 390.169C356.187 389.525 355.669 388.628 355.464 387.625L343.039 327.196C342.904 326.539 342.908 325.857 343.051 325.202C343.194 324.547 343.473 323.934 343.867 323.409C344.261 322.885 344.759 322.462 345.326 322.171C345.893 321.88 346.514 321.729 347.143 321.73H371.993C372.622 321.728 373.244 321.878 373.812 322.168C374.38 322.458 374.88 322.881 375.275 323.406C375.67 323.93 375.949 324.544 376.093 325.2C376.237 325.856 376.241 326.538 376.105 327.196Z"
        className={getClassName('workforces')}
        fill="currentColor"
        id="workforces"
        initial={{ scale: 0 }}
        animate={{
          scale: isServiceActive('workforces') ? 1.5 : 1.3,
          originX: -0.001,
          originY: -0.001,
        }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      <motion.path
        d="M263.646 66.3811V223.613H410.499V66.3811H263.646ZM384.225 153.596C384.22 155.638 383.459 157.594 382.108 159.036C380.757 160.477 378.926 161.285 377.019 161.283H352.248V187.748C352.25 189.79 351.496 191.75 350.149 193.196C348.803 194.643 346.976 195.458 345.069 195.463H329.041C327.134 195.458 325.306 194.643 323.96 193.196C322.614 191.75 321.86 189.79 321.862 187.748V161.283H297.135C295.227 161.285 293.397 160.477 292.046 159.036C290.695 157.594 289.934 155.638 289.929 153.596V136.426C289.929 134.38 290.688 132.417 292.04 130.971C293.391 129.524 295.224 128.711 297.135 128.711H321.862V102.227C321.866 100.19 322.625 98.2392 323.97 96.8003C325.316 95.3614 327.139 94.552 329.041 94.5495H345.104C347.001 94.557 348.818 95.3691 350.157 96.8081C351.496 98.247 352.248 100.195 352.248 102.227V128.711H376.984C378.895 128.711 380.728 129.524 382.079 130.971C383.43 132.417 384.19 134.38 384.19 136.426L384.225 153.596Z"
        fill="currentColor"
        className={getClassName('health')}
        id="health"
        initial={{ scale: 0 }}
        animate={{
          scale: isServiceActive('health') ? 1.5 : 1.3,
          originX: -0.001,
          originY: 1,
        }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <motion.path
        d="M82.9917 262.166V419.397H229.835V262.166H82.9917ZM201.979 354.847C199.941 373.033 183.526 386.835 166.76 390.25C128.316 398.266 98.633 356.38 115.267 318.747C117.977 312.741 121.776 307.371 126.442 302.95C131.108 298.529 136.548 295.146 142.446 292.997C150.723 289.972 159.63 289.512 168.14 291.67L169.309 291.999C177.569 291.491 186.136 292.837 193.491 297.127C193.738 297.272 193.947 297.481 194.1 297.734C194.253 297.987 194.344 298.278 194.366 298.578C194.388 298.879 194.339 299.18 194.225 299.456C194.11 299.732 193.934 299.972 193.711 300.156C189.563 303.517 184.853 305.998 179.836 307.467C181.138 312.877 181.451 318.506 180.758 324.044C180.718 324.342 180.609 324.624 180.442 324.865C180.274 325.107 180.054 325.301 179.8 325.429C179.546 325.557 179.267 325.617 178.986 325.602C178.706 325.587 178.433 325.498 178.192 325.342C174.678 322.956 171.533 319.998 168.869 316.574C167.404 314.723 166.063 312.764 164.853 310.713C164.537 310.214 164.203 309.621 163.852 308.972C156.764 307.89 149.543 309.423 143.378 313.319C128.061 323.056 124.046 345.109 134.511 360.482C142.349 372.083 156.804 376.542 169.423 371.923C187.876 365.083 194.212 344.074 189.941 324.825C189.416 322.486 188.75 320.185 187.946 317.938V317.872C187.829 317.558 187.819 317.21 187.919 316.889C188.019 316.568 188.222 316.296 188.491 316.12C188.761 315.944 189.08 315.876 189.392 315.928C189.704 315.98 189.989 316.149 190.196 316.405C195.872 323.461 203.983 336.943 201.979 354.847Z"
        fill="currentColor"
        className={getClassName('events')}
        id="events"
        initial={{ scale: 0 }}
        animate={{
          scale: isServiceActive('events') ? 1.5 : 1.3,
          originX: 1,
          originY: -0.001,
        }}
        transition={{ duration: 0.5, delay: 2 }}
      />
      <motion.path
        d="M156.418 137.433C133.747 137.433 115.373 143.699 115.373 151.423C115.373 159.147 133.747 165.422 156.418 165.422C179.089 165.422 197.454 159.156 197.454 151.423C197.454 143.689 179.08 137.433 156.418 137.433Z"
        fill="currentColor"
        className={getClassName('infrastructures')}
        id="infrastructures"
        initial={{ scale: 0 }}
        animate={{
          scale: isServiceActive('infrastructures') ? 1.4 : 1.3,
          originX: 1.4,
          originY: 2.5,
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <motion.path
        d="M82.9917 108.841V223.622H229.835V66.3811H122.631C117.424 66.3823 112.269 67.4816 107.459 69.616C102.649 71.7505 98.2789 74.8784 94.5981 78.8211C90.9173 82.7639 87.9978 87.4442 86.0064 92.595C84.0149 97.7458 82.9905 103.266 82.9917 108.841ZM205.653 150.115V176.458C205.653 186.939 183.605 195.444 156.444 195.444C129.283 195.444 107.236 186.977 107.236 176.458V150.115C107.236 144.649 113.255 139.709 122.868 136.247V112.425C122.834 110.808 123.372 109.237 124.374 108.026C125.376 106.815 126.769 106.054 128.272 105.896C129.056 105.85 129.84 105.975 130.577 106.265C131.314 106.554 131.987 107.001 132.557 107.579C133.127 108.157 133.581 108.853 133.892 109.624C134.202 110.396 134.362 111.228 134.362 112.068V133.124C139.748 132.126 145.191 131.516 150.653 131.298V100.947C150.629 99.4872 151.077 98.0631 151.921 96.9161C152.765 95.7691 153.953 94.9696 155.284 94.653C156.123 94.4719 156.99 94.4926 157.821 94.7137C158.652 94.9347 159.426 95.3506 160.089 95.9312C160.751 96.5118 161.285 97.2427 161.652 98.0711C162.018 98.8995 162.208 99.8047 162.209 100.721V131.298C167.669 131.535 173.109 132.164 178.491 133.18V112.303C178.469 110.843 178.917 109.42 179.761 108.274C180.604 107.127 181.792 106.327 183.122 106.009C183.961 105.829 184.826 105.851 185.656 106.073C186.486 106.295 187.259 106.711 187.921 107.291C188.582 107.872 189.115 108.602 189.481 109.43C189.847 110.257 190.037 111.161 190.038 112.077V136.228C199.704 139.691 205.67 144.63 205.67 150.096L205.653 150.115Z"
        fill="currentColor"
        className={getClassName('infrastructures')}
        id="infrastructures"
        initial={{ scale: 0 }}
        animate={{
          scale: isServiceActive('infrastructures') ? 1.4 : 1.3,
          originX: 1,
          originY: 1,
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </svg>
  );
};

const Transition: React.FC<TransitionProps> = ({ className = '' }) => {
  const router = useRouter(); // Use useRouter to handle routing

  const currentService = router.pathname.replace('/services/', '');
  const useMobileLogo = ['/', '/biography', '/career'].includes(
    router.pathname
  );

  return (
    <motion.div
      className={`z-50 top-0 left-0 w-[100%] h-[100%] bg-primary fixed ${className}`}
      initial={{ translateY: '0%' }}
      animate={{ translateY: '-200%' }}
      exit={{ translateY: '0%' }}
      transition={{ duration: 3, ease: [0.22, 1, 0.36, 1], delay: 3 }}
    >
      <div className="flex justify-center items-center min-h-screen bg-primary">
        {useMobileLogo ? (
          <div className="flex font-cinzel text-white font-medium items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="144"
              viewBox="0 0 100 144"
              className="text-white h-20"
            >
              <path
                d="M100 43.4923L74.8939 38.801C70.1112 37.9081 65.7267 35.8327 62.2673 32.8244C58.808 29.8161 56.421 26.0027 55.3933 21.8427L50 0L44.6117 21.8427C43.5824 26.0028 41.1943 29.816 37.7342 32.8243C34.2741 35.8325 29.8892 37.9078 25.1061 38.801L0 43.4923L25.1061 48.1794C29.8905 49.0732 34.2763 51.1498 37.7366 54.1597C41.1968 57.1695 43.5841 60.9845 44.6117 65.1462L50 100.771L55.3933 65.1462C56.4193 60.9846 58.8055 57.1695 62.265 54.1595C65.7245 51.1495 70.1099 49.0729 74.8939 48.1794L100 43.4923Z"
                fill="currentColor"
                className="rotate-vert-center"
              />
              <path
                d="M69.2539 86.1434C69.3194 87.5063 69.8689 88.818 70.8268 89.8979C71.7847 90.9779 73.1039 91.7731 74.6028 92.1739C83.2823 94.1697 88.8236 97.2 88.8236 100.595C88.8236 106.604 71.4398 111.484 50 111.484C28.5601 111.484 11.1764 106.608 11.1764 100.595C11.1764 97.2 16.7177 94.1569 25.3972 92.1739C26.8961 91.7731 28.2153 90.9779 29.1732 89.8979C30.1311 88.818 30.6806 87.5063 30.7461 86.1434C12.6912 88.5041 0 94.0839 0 100.595V127.915C0 131.902 4.77154 135.542 12.6123 138.306V136.589C12.6086 135.049 12.9947 133.527 13.7433 132.131C14.4919 130.735 15.5846 129.499 16.9438 128.512C18.303 127.525 19.8954 126.81 21.6079 126.418C23.3204 126.026 25.1111 125.967 26.8529 126.245L27.1094 126.288C29.8954 126.729 32.4154 128.006 34.2318 129.896C36.0482 131.785 37.0461 134.169 37.0522 136.632V143.036C41.1823 143.379 45.5196 143.568 50 143.568C54.4804 143.568 58.8177 143.379 62.9478 143.036V136.636C62.9538 134.173 63.9518 131.79 65.7682 129.9C67.5846 128.01 70.1046 126.734 72.8906 126.292L73.1471 126.249C74.8889 125.971 76.6796 126.031 78.3921 126.422C80.1046 126.814 81.697 127.529 83.0562 128.516C84.4154 129.504 85.5081 130.739 86.2567 132.135C87.0053 133.531 87.3914 135.053 87.3877 136.593V138.31C95.2285 135.546 100 131.906 100 127.919V100.595C100 94.0839 87.3088 88.5041 69.2539 86.1434Z"
                fill="currentColor"
              />
            </svg>
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 5 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="text-md font-semibold "
            >
              TAILORING <br /> SPORTS <br /> INVESTMENTS
            </motion.h3>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center font-cinzel text-white font-medium">
            <TailoringServices currentService={currentService} />
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 50 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="text-md lg:text-2xl font-semibold"
            >
              TAILORING SPORTS {currentService.toUpperCase()}
            </motion.h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Transition;
