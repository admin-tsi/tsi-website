import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imgSrc: string;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
  member,
  onClose,
}) => {
  useEffect(() => {
    // Add event listener when the component mounts
    document.body.style.overflow = "hidden";

    // Remove event listener when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {member && (
        <motion.div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-end items-center font-clash overflow-y-auto">
          <motion.div
            className="bg-base h-full w-full lg:w-1/2 shadow-lg p-6"
            initial={{ opacity: 0, translateX: "100%" }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={onClose}
                className="absolute top-5 right-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none ring-4 ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
              >
                Close
              </button>
              <div className="container mx-auto p-2 md:p-6">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  fill
                />
                <h2 className="text-2xl font-semibold mb-2 text-center font-cinzel">
                  {member.name}
                </h2>
                <p className="text-lg text-gray-600 mb-2 text-center">
                  {member.role}
                </p>
                <p className="text-lg font-thin">{member.description}</p>
                <div className="flex justify-center mt-4 space-x-16 absolute bottom-10 font-cinzel">
                  <a href="#" className="">
                    LinkedIn
                  </a>
                  <a href="#" className="">
                    Twitter/X
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default TeamMemberModal;
