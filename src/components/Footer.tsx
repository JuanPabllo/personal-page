import React from 'react';

function Footer() {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4">
        Made with{' '}
        <span role="img" aria-label="heart">
          💙
        </span>{' '}
        by{' '}
        <a
          target="_blank"
          className="text-blue-500 hover:underline"
          href="https://www.linkedin.com/in/juanpablodev/"
        >
          Juan Pablo
        </a>
      </p>
    </div>
  );
}

export default Footer;
