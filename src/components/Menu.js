import React from 'react';
import Ratio from 'react-bootstrap/Ratio';

function Menu() {


  
  return (
    <div style={{ 
      width: 'auto', 
      height: 'auto', 
      position: 'relative', 
      overflow: 'hidden',
      }}>
        <h1 className="cool-heading">Healthcare Application Development!</h1>
      <Ratio aspectRatio="16x9">
        <embed 
          type="image/svg+xml" 
          src="/logo1024.png" 
          style={{ 
            position: 'absolute', 
            top: 100, 
            right: 0, 
            bottom: 0, 
            left: 350, 
            margin: 'auto', 
            maxWidth: '100%', 
            maxHeight: '100%',
          }} 
        />
      </Ratio>
    </div>
  );
}

export default Menu;
