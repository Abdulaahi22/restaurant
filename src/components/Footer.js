import React from "react";
// impott icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer(){
    return <div className="footer">
        {/* div represents all social media icons */}
        <div className="socialMedia">
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
        </div>
        <p> &copy; 2024 jamhuuriya.com</p>
    </div>;
}
export default Footer;