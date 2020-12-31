import React, { useState, useEffect} from 'react';

export const useHasJs = () => {
  const [hasJS, setHasJS] = useState(false);

  useEffect(() => {
    addBodyClass();
  }, [])

  const addBodyClass = () => {
    if(typeof window !== 'undefined'){
      const body = document.body;
      body.classList.add('js');
      setHasJS(true);
    }
  }
}
