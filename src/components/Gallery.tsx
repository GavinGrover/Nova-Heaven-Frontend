import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Import all 8 uploaded images
import exteriorMain from '@/assets/images/exterior-main.jpg';
import pathway from '@/assets/images/pathway.jpg';
import well from '@/assets/images/well.jpg';
import livingRoom from '@/assets/images/living-room.jpg';
import bedroom from '@/assets/images/bedroom.jpg';
import bathroom1 from '@/assets/images/bathroom-1.jpg';
import bathroom2 from '@/assets/images/bathroom-2.jpg';
import exterior2 from '@/assets/images/exterior-2.jpg';

// Import all 7 uploaded videos
import video1 from '@/assets/videos/video-1.mp4';
import video2 from '@/assets/videos/video-2.mp4';
import video3 from '@/assets/videos/video-3.mp4';
import video4 from '@/assets/videos/video-4.mp4';
import video5 from '@/assets/videos/video-5.mp4';
import video6 from '@/assets/videos/video-6.mp4';
import video7 from '@/assets/videos/video-7.mp4';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
};

// Gallery with all 8 photos and 7 videos (15 items total)
const mediaItems: MediaItem[] = [
  { type: 'image', src: exteriorMain, alt: 'Main exterior with gazebo' },
  { type: 'video', src: video1 },
  { type: 'image', src: pathway, alt: 'Pathway view' },
  { type: 'video', src: video2 },
  { type: 'image', src: well, alt: 'Signature architectural detail' },
  { type: 'video', src: video3 },
  { type: 'image', src: livingRoom, alt: 'Living room' },
  { type: 'video', src: video4 },
  { type: 'image', src: bedroom, alt: 'Bedroom' },
  { type: 'video', src: video5 },
  { type: 'image', src: bathroom1, alt: 'Bathroom' },
  { type: 'video', src: video6 },
  { type: 'image', src: bathroom2, alt: 'Second bathroom' },
  { type: 'video', src: video7 },
  { type: 'image', src: exterior2, alt: 'Exterior view' },
];

interface GalleryCardProps {
  item: MediaItem;
  index: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && item.type === 'video') {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 perspective-1000"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl group">
        {item.type === 'image' ? (
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <>
            <video
              ref={videoRef}
              src={item.src}
              className="w-full h-full object-cover"
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
            />
            {/* Video Controls */}
            <div className={`absolute bottom-4 right-4 flex gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </>
        )}

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </motion.div>
  );
};

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('gallery.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <motion.div
        ref={containerRef}
        className="relative"
      >
        <motion.div
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className={`flex gap-6 px-4 md:px-8 pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ width: 'max-content' }}
        >
          {mediaItems.map((item, index) => (
            <GalleryCard key={index} item={item} index={index} />
          ))}
        </motion.div>

        {/* Scroll Hint */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      </motion.div>

      {/* Drag Instruction */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-sm mt-6"
      >
        ← Drag to explore →
      </motion.p>
    </section>
  );
};

export default Gallery;
