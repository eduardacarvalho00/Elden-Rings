
import { Link } from 'react-router-dom';
import theme from '../Home/theme.mp4';


const Theme = () => {
  return (
    <div>
      <Link to='/menu'>
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
          <source src={theme} type="video/mp4" />
        </video>
      </Link>
    </div>
  );
}

export default Theme;