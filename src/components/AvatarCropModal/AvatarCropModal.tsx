import React, { useState, useRef } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface AvatarCropModalProps {
  open: boolean;
  onClose: () => void;
  imageUrl: string;
  onCropComplete: (croppedImageUrl: string) => void;
}

export const AvatarCropModal: React.FC<AvatarCropModalProps> = ({
  open,
  onClose,
  imageUrl,
  onCropComplete
}) => {
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 100,
    height: 100, 
    x: 0,
    y: 0
  });
  const imageRef = useRef<HTMLImageElement>(null);
  
  const handleCropComplete = () => {
    if (!imageRef.current || !crop.width || !crop.height) return;
    
    const canvas = document.createElement('canvas');
    const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
    const scaleY = imageRef.current.naturalHeight / imageRef.current.height;
    const pixelRatio = window.devicePixelRatio || 1;
    
    // Calculate actual crop dimensions
    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;
    const cropWidth = crop.width * scaleX;
    const cropHeight = crop.height * scaleY;
    
    // Set canvas dimensions
    canvas.width = cropWidth * pixelRatio;
    canvas.height = cropHeight * pixelRatio;
    
    // Draw cropped image on canvas
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(pixelRatio, pixelRatio);
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(
        imageRef.current,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        cropWidth,
        cropHeight
      );
      
      // Convert canvas to data URL
      const croppedImageUrl = canvas.toDataURL('image/jpeg');
      onCropComplete(croppedImageUrl);
      onClose();
    }
  };
  
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
    >
      <DialogTitle>Crop Your Avatar</DialogTitle>
      <DialogContent>
        <ReactCrop
          crop={crop}
          onChange={c => setCrop(c)}
          circularCrop
          aspect={1}
        >
          <img
            ref={imageRef}
            src={imageUrl}
            alt="Crop preview"
            style={{ maxHeight: '70vh', maxWidth: '100%' }}
          />
        </ReactCrop>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={onClose}
          variant="outlined"
          sx={{
            backgroundColor: '#d1e7ff',
            color: '#333',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.75rem 2.25rem',
            textTransform: 'none',
            width: '10rem',
            fontWeight: 700
          }}
        >Cancel</Button>
        <Button 
          onClick={handleCropComplete} 
          variant="contained" 
          sx={{
            backgroundColor: '#00b1fe',
            borderRadius: '0.5rem',
            padding: '0.75rem 2rem',
            textTransform: 'none',
            width: '10rem',
            fontWeight: 700
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};