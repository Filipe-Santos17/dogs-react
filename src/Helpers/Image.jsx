import React, { useRef, useState } from "react";

const Image = ({ alt, ...props }) => {
  const elImage = useRef(null);
  const [loaded, setLoaded] = useState(true);

  function handleImageLoaded() {
    setLoaded(false);
    elImage.current.style.opacity = 1;
  }

  return (
    <div className="img-wrapper-load">
      {loaded && <div className="skeleton-img-load"></div>} {/* Esqueleto que apareçe antes do contéudo  */}
      <img onLoad={handleImageLoaded} ref={elImage} className="image-photo" src="" alt={alt} {...props} />
    </div>
  );
};

export default Image;
