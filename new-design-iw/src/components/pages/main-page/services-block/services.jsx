

// import React, { useEffect, useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import './services.css';
// import eyeIcon from '/eye.png';
// import worldIcon from '/world.png';
// import htmltIcon from '/html.png';

// const servicesData = [
//   {
//     icon: eyeIcon,
//     title: 'Custom Design',
//     description: 'We believe that top-tier web design should not be a luxury, but a standard available to all, ensuring that every business can have a professional and engaging online presence.',
//   },
//   {
//     icon: worldIcon,
//     title: 'Web Development',
//     description: 'We craft bespoke websites that truly reflect your brand’s essence and engage your audience by starting with an in-depth analysis of your brand’s history, mission, values, and target audience.',
//   },
//   {
//     icon: htmltIcon,
//     title: 'App Development',
//     description: 'We create cutting-edge applications to streamline operations and boost efficiency, allowing your business to run more smoothly and effectively while staying ahead in a competitive market.',
//   },
// ];

// function Services() {
//   const serviceRefs = useRef([]);
//   const controls = useAnimation(); 

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry, index) => {
//           if (entry.isIntersecting) {
//             controls.start({ opacity: 1, x: 0 }); 
//           }
//         });
//       },
//       {
//         threshold: 0.1, 
//       }
//     );

   
//     serviceRefs.current.forEach((ref) => {
//       if (ref) {
//         observer.observe(ref);
//       }
//     });

    
//     return () => {
//       serviceRefs.current.forEach((ref) => {
//         if (ref) {
//           observer.unobserve(ref);
//         }
//       });
//     };
//   }, [controls]);

//   const handleMouseMove = (e, index) => {
//     const card = serviceRefs.current[index];
//     const rect = card.getBoundingClientRect();

    
//     const cardCenterX = rect.left + rect.width / 2;
//     const cardCenterY = rect.top + rect.height / 2;

    
//     const rotateX = -(e.clientY - cardCenterY) / 15;
//     const rotateY = (e.clientX - cardCenterX) / 15;

    
//     card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   };

//   const handleMouseLeave = (index) => {
//     const card = serviceRefs.current[index];
//     card.style.transform = `rotateX(0deg) rotateY(0deg)`;
//   };

//   return (
//     <div className="container">
//       <div className="services-container">
//         {servicesData.map((service, index) => (
//           <motion.div
//             key={index}
//             className="service-card"
//             ref={(el) => (serviceRefs.current[index] = el)}
//             initial={{ opacity: 0, x: 200 }}  
//             animate={controls}
//             transition={{
//               type: 'spring',
//               stiffness: 80,
//               damping: 15,
//               duration: 0.8,
//               delay: index * 0.3,  
//             }}
//             onMouseMove={(e) => handleMouseMove(e, index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//           >
//             <div className="border-wrapper">
//               <div className="bottom-border"></div> 
//               <img
//                 src={service.icon}
//                 alt={`${service.title} icon`}
//                 className="service-icon"
//               />
//               <h3 className="service-title">{service.title}</h3>
//               <p className="service-description">{service.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Services;

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './services.css';
import eyeIcon from '/eye.png';
import worldIcon from '/world.png';
import htmltIcon from '/html.png';

const servicesData = [
  {
    icon: eyeIcon,
    title: 'Custom Design',
    description: 'We believe that top-tier web design should not be a luxury, but a standard available to all, ensuring that every business can have a professional and engaging online presence.',
  },
  {
    icon: worldIcon,
    title: 'Web Development',
    description: 'We craft bespoke websites that truly reflect your brand’s essence and engage your audience by starting with an in-depth analysis of your brand’s history, mission, values, and target audience.',
  },
  {
    icon: htmltIcon,
    title: 'App Development',
    description: 'We create cutting-edge applications to streamline operations and boost efficiency, allowing your business to run more smoothly and effectively while staying ahead in a competitive market.',
  },
];

function Services() {
  const serviceRefs = useRef([]);
  const controls = useAnimation(); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, x: 0 }); // Animate into position when visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the block is visible
      }
    );

    serviceRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [controls]);

  const handleMouseMove = (e, index) => {
    const card = serviceRefs.current[index];
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  const handleMouseLeave = (index) => {
    const card = serviceRefs.current[index];
    card.style.setProperty('--x', `50%`);
    card.style.setProperty('--y', `50%`);
  };

  return (
    <div className="container">
      <div className="services-container">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            ref={(el) => (serviceRefs.current[index] = el)}
            initial={{ opacity: 0, x: 200 }}  // Start from the right (200px off)
            animate={controls}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 15,
              duration: 0.8,
              delay: index * 0.3,  // Staggered delay for each block
            }}
            onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="border-wrapper">
              <div className="bottom-border"></div> 
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="service-icon"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;