
import covenas1 from '../assets/img/covenas1.jpg'
import PropTypes from 'prop-types'
export const Covenas1 = ( {className} ) => {
  return (
    <div  className={`image-container ${className}`}>
    <img  src={covenas1} alt="Paisaje1" className="image"/>
    </div>
  )
}
Covenas1.propTypes ={
  className: PropTypes.string
}

