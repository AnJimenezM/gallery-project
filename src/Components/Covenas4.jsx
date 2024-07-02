
import covenas4 from '../assets/img/covenas4.jpg'
import PropTypes from 'prop-types'
export const Covenas4 = ( {className} ) => {
  return (
  <div className={`image-container ${className}`}>
    <img src={covenas4} alt="gojo vs sukuna" className="image"  />
  </div>
  )
}
Covenas4.propTypes ={
  className: PropTypes.string
}

