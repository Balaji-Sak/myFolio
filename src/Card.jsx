import profilePic from "./assets/download.png"


function Card(){
    return(
        <div className="card">
            <img className="proPic" src={profilePic} alt="profile-pic" />
            <h3 className="name">Balaji S</h3>
            <p className="para">I am starting this project on some motivation what I need is consistency</p>

        </div>
    );

}
export default Card