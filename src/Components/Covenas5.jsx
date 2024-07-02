
import covenas5 from '../assets/img/covenas5.jpg'
import PropTypes from 'prop-types'
export const Covenas5 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={covenas5} alt="gojo vs sukuna" className="image"  />
    </div>
  )
}
Covenas5.propTypes ={
  className: PropTypes.string
}

