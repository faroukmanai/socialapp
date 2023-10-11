import "./rightbar.css"
import {Users} from "../../Data"
import Online from "../online/Online";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText"> <b>Aicha Chaouachi</b> and <b>2 other friends </b>birthday</span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
