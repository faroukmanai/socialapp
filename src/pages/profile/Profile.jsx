import "./profile.css"
import Topbar from "../../components/Topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"

function Profile() {
  return (
    <>
        <Topbar/>
        <div className="Profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop"> 
                    <div className="profileCover">
                        <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                        <img className="profileUserImg" src="assets/person/3.jpeg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="ProfileInfoName">Aicha Chaouachi</h4>
                        <p className="profileInfoDesc">Hello World</p>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile