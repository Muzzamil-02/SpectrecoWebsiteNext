import Image from 'next/image';

const IndustryImage2 = ({ imageUrl }) => {
  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
      {imageUrl && (
        <div style={{
          position: 'relative',
          width: '80%',
          height: '500px',
        
          borderRadius: '10px',
          
       
        }}>
          <Image 
            src={imageUrl} 
            alt="Industry Transition" 
            layout="fill" 
            objectFit="contain"
          />
        </div>
      )}
    </section>
  );
};

export default IndustryImage2;
