import './delete.css';
import PropTypes from 'prop-types';



export default function Deletesubscription(props) {
  const submitDelete = ()=>{
    
  }
 
  
  return (
    <div className={`${props.isOpen?"active":"nonactive"}`}>
        <h2>Are you Sure You want to delete</h2>
        <button onClick={submitDelete}>Yes</button>
        <button>No</button>
    </div>
  )
}
Deletesubscription.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};  