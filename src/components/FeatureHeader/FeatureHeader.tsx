import React, { useState, useEffect } from 'react';
import './FeatureHeader.css';
import featureHeadersData from '../../mocks/data/feature-headers.json';

interface FeatureHeaderProps {
  headerId?: number; 
  headerName?: string; 
}

interface FeatureHeaderData {
  id: number;
  headerName: string;
  headerDescription: string;
}

export const FeatureHeader: React.FC<FeatureHeaderProps> = ({ headerId, headerName }) => {
  const [headerData, setHeaderData] = useState<FeatureHeaderData | null>(null);
  
  useEffect(() => {
    let selectedHeader;
    
    if (headerName) {
      selectedHeader = featureHeadersData.featureHeaders.find(
        header => header.headerName.toLowerCase() === headerName.toLowerCase()
      );
    }
    
    if (!selectedHeader && headerId) {
      selectedHeader = featureHeadersData.featureHeaders.find(
        header => header.id === headerId
      );
    }
    
    if (selectedHeader) {
      setHeaderData(selectedHeader);
    } else {
      setHeaderData(featureHeadersData.featureHeaders[0]);
    }
  }, [headerId, headerName]);
  
  if (!headerData) return null;
  
  return (
    <div className="feature-header">
      <h1 className="header-name">{headerData.headerName}</h1>
      <p className="header-description">{headerData.headerDescription}</p>
    </div>
  );
};