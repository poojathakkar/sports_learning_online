import React, {useContext} from 'react'
import './studenthomepage.css';
import Course from '../components/Course';
import axios from 'axios';
import { AuthContext } from '../components/AuthProvider';
// import useApplicationData from '../hooks/useApplicationData';

function Studenthomepage(props) {

  const auth = useContext(AuthContext);
  // const [course, setCourse] = useState();
  function addToBasket(obj) {
    console.log("user_id", obj.id);
    const currentUserId = Number(auth.user.id);
    const currentCourseId = Number(obj.id);
    
    axios.post('api/addToCart', { currentUserId, currentCourseId })
    .then(res => {
      console.log("1", res.data);
    props.setBasket(prev => [...prev, obj])
    })
    .catch(error => {
      console.log(error);
      //setDanger(true);
    })

  }
  

  return (
    <div className="studenthome">
      <img className="home__image" src="https://sportslearning.online/uploads/system/home-banner.jpg" alt="" />
      <div className="home__row">

     {props.course.map(c => <Course key={c.id} {...c} onClick={() => addToBasket(c)}/>)}
      </div>
    </div>
  )
}

export default Studenthomepage
