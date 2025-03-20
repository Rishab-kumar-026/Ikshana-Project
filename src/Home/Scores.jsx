import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Scores() {
  const scores_data = [
    { value: "300+", category: "Employees" },
    { value: "50+", category: "Happy Clients" },
    { value: "10+", category: "Years of Experience" },
    { value: "4.5+", category: "Ratings" },
  ];

  const extractNumber = (str) => parseFloat(str.replace(/[^0-9.]/g, ''));

  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only once
    threshold: 0.3,    // Starts animation when 30% of section is visible
  });

  return (
    <div ref={ref} className='w-screen h-fit mb-10 flex items-center justify-center lg:px-16 xl:px-24 2xl:px-36'>
      <div className='w-[80%] h-[90%] pt-10 mx-auto bg-[#FBFBFD] rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:p-10'>
        {scores_data.map((item, index) => (
          <div key={index} className='mb-4'>
            <h1 className='text-center font-bold text-2xl leading-none text-blue-600'>
              {inView ? (
                <CountUp 
                  start={0} 
                  end={extractNumber(item.value)} 
                  duration={2} 
                  decimals={item.value.includes('.') ? 1 : 0}
                />
              ) : (
                '0'
              )}
              {item.value.includes('+') && '+'}
            </h1>
            <p className='text-center font-bold text-xl opacity-[0.7] leading-none mt-2 mb-6 xl:mb-0'>
              {item.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scores;
