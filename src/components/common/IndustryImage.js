import Image from 'next/image';

const IndustryImage = ({imageUrl}) => {
  return (
    <section >
    {imageUrl && (
      <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '20px' }}>
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

export default IndustryImage