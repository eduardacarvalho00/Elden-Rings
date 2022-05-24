import video from '../../assets/Menu_Theme.mp4';


const Theme = () => {
  return (
    <div>
      <video
        autoPlay
        preload='true'
        loop
        style={{
          position: 'absolute',
          width: '100%',
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default Theme;