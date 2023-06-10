import { useEffect, useState } from "react";

const useMedia = (media) => {
  const [macth, setMatch] = useState(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }

    changeMatch();
    
    window.addEventListener("resize", changeMatch);

    return () => window.removeEventListener("resize", changeMatch);
  }, [media]);

  return macth;
};

export default useMedia;
