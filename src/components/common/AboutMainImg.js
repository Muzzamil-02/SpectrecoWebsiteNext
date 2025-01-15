import Image from 'next/image';

const AboutMainImg = ({imageUrl}) => {
  return (
 <section >
    {imageUrl && (
      <div style={{ position: 'relative', width: '100%', height: '600px', marginBottom: '20px' }}>
        <Image 
          src={imageUrl} 
          alt="new" 
          fill 
          style={{ objectFit: 'cover',display:"inline" }}
        />
      </div>
    )}
   
  </section>
  )
}

export default AboutMainImg