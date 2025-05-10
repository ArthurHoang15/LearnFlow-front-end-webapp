import { useState, useEffect } from 'react';
import { LearningModule } from '../../components/LearningModule/LearningModule.tsx';
import { FeatureHeader } from '../../components/FeatureHeader/FeatureHeader';
import { Chapters, Mistakes, Stories, Vocab } from '../../assets/images/index.ts';
import moduleData from '../../mocks/data/learning-module-content.json';
import { AboutUs } from '../../components/AboutUs';

interface ModuleData {
  id: number;
  header: string;
  subheader: string;
  description: string;
  buttonText: string;
  imageKey: string;
}

export const LearningHub = () => {
  const [modules, setModules] = useState<ModuleData[]>([]);
  
  const imageMap = {
    Chapters,
    Mistakes,
    Stories,
    Vocab
  };

  useEffect(() => {
    // Trong môi trường thực tế, bạn có thể fetch từ API
    // fetch('/api/learning-modules')
    //   .then(response => response.json())
    //   .then(data => setModules(data.modules));
    
    // Sử dụng dữ liệu từ file JSON
    setModules(moduleData.modules);
  }, []);

  return (
    <div className="learning-hub-container">
      <FeatureHeader headerName="Learning Hub" />
      
      {modules.map((module) => (
        <LearningModule
          key={module.id}
          header={module.header}
          subheader={module.subheader}
          description={module.description}
          buttonText={module.buttonText}
          imageUrl={imageMap[module.imageKey as keyof typeof imageMap]}
        />
      ))}
    </div>
  );
};