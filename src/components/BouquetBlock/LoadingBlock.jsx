import ContentLoader from "react-content-loader"
import React from 'react';

function LoadingBlock() {
    return (
    <ContentLoader 
    className="bouquet-block"
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      
    >
      <rect x="5" y="5" rx="6" ry="6" width="260" height="260" /> 
      <rect x="0" y="420" rx="7" ry="7" width="109" height="27" /> 
      <rect x="178" y="413" rx="21" ry="21" width="97" height="42" /> 
      <rect x="0" y="277" rx="5" ry="5" width="280" height="25" /> 
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
    </ContentLoader>
  )}
export default LoadingBlock;