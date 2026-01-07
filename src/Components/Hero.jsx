import myPhoto from "../assets/myPhoto.jpg"


function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Balaji S</h1>
                <h2>java fullstack developer</h2>
                <p>“ECE graduate passionate about building modern, scalable web applications.”</p>

            </div>
            <div className="photo-f">
                <img src={myPhoto} alt="profile pic" />

            </div>
            
        </section>
    );
}

export default Hero