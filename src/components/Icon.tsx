import icons from '../lib/icons';

function Icon({ name }) {
  return (
    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 512 512">
      <path fill="currentColor" d={icons[name]}></path>
    </svg>
  )
}

export default Icon;
