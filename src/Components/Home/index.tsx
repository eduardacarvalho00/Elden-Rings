import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './styles.css';

const teste = require('../../assets/videos/theme.mp4')

const Theme = () => {

  return (
    <div>

      <Link to='/about'>
        <ReactPlayer
          url={teste}
          width="100%"
          height="100%"
          playing={true}
          muted
        />
      </Link>
    </div>
  );
}

export default Theme;