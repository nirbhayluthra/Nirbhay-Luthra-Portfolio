import React from 'react';

const Skill = () => {
  return (
    <section className='my-28  px-5' id='skills'>
      <header className='text-2xl font-bold pt-10'>
        <h2>Skills & Tools</h2>
      </header>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/javascript-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Javascript
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='React Js'>
          <img src='./images/icons/react-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          React JS
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/C++.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          C++
        </div>
          <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/java.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Java
        </div>
          <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/git.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Git
        </div>
          <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/vsc.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Visual Studio Code
        </div>
          <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/mysql.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          SQL
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='MongoDB'>
          <img src='./images/icons/c.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          C
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='HTML 5'>
          <img src='./images/icons/html5-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          HTML 5
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/css3-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          CSS 3
        </div>
          <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='HTML 5'>
          <img src='./images/icons/bootstrap.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Bootstrap
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/ms.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          MS Office
        </div>
      </div>
    </section>
  );
};

export default Skill;
