import React from 'react'

const Avatar = ({ src, alt }) => (
  <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);


export default Avatar