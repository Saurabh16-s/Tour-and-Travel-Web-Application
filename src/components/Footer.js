import "./FooterStyles.css";
const Footer = () => {
  return (
    
    <div className="footer">
        <div className="top">   
            <div>
                <h1>TRIPPY</h1>
                <p>Choose your favourite destination.</p>
            </div>
            <div>
  <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-facebook-square"></i>
  </a>

  <a href="https://www.instagram.com/saurabh16_s/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram-square"></i>
  </a>

 <a 
  href="https://github.com/Saurabh16-s" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <i className="fa-brands fa-github"></i>
</a>

  <a 
  href="https://www.linkedin.com/in/saurabh-singh-9645a9362/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <i className="fa-brands fa-linkedin"></i>
</a>
</div>

            



        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Linkedin</a>
                <a href="/">Instagram</a>
                <a href="/">Facebook</a>
            </div>
            <div>
                <h4>Characters</h4>
                <a href="/">Saurabh Singh</a>
                <a href="/">Trippy</a>
                <a href="/">Travel</a>
                <a href="/">Website</a>
            </div>
            <div>
                <h4>More Projects</h4>
                <a href="/">AWS image-uploader</a>
                <a href="/">Real-Time-chat website</a>
                <a href="/">Premier League</a>
                <a href="/">Banking management</a>
            </div>

        </div>
     </div>
   
    )
}
export default Footer