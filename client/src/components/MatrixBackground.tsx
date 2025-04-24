import { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundRef.current) return;
    
    const createMatrixBackground = () => {
      const matrixBg = backgroundRef.current;
      if (!matrixBg) return;
      
      // Clear existing columns before creating new ones
      while (matrixBg.firstChild) {
        matrixBg.removeChild(matrixBg.firstChild);
      }
      
      const width = window.innerWidth;
      const charCount = Math.floor(width / 20); // Adjust density
      
      for (let i = 0; i < charCount; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDuration = `${Math.random() * 10 + 15}s`;
        column.style.animationDelay = `${Math.random() * 5}s`;
        
        // Generate random matrix characters
        let columnContent = '';
        const length = Math.floor(Math.random() * 15) + 15;
        for (let j = 0; j < length; j++) {
          // Random character from a set of Matrix-like characters
          const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
          const char = chars.charAt(Math.floor(Math.random() * chars.length));
          columnContent += `<span class="matrix-char">${char}</span><br>`;
        }
        
        column.innerHTML = columnContent;
        matrixBg.appendChild(column);
      }
    };
    
    // Create matrix effect initially
    createMatrixBackground();
    
    // Recreate on window resize
    const handleResize = () => {
      createMatrixBackground();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={backgroundRef} className="matrix-background" />;
};

export default MatrixBackground;
