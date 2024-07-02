
import covenas6 from '../assets/img/covenas6.jpeg'
import PropTypes from 'prop-types'
export const Covenas6 = ( {className} ) => {
  return (
   <div  className={`image-container ${className}`}>
   
    <img src={covenas6} alt="chain saw man" className="image" />
   </div>
  )
}
Covenas6.propTypes ={
  className: PropTypes.string
}
