import InstaIcon from "@/assets/icons/insta.svg";
import XSocialIcon from "@/assets/icons/x-social.svg";
import TiktokIcon from "@/assets/icons/tiktok.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="py-6 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <p className="text-center">
            &copy; 2024 Your Company, Inc. All rights reserved
          </p>
          <ul className="flex justify-center gap-2">
            <li>
              <XSocialIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <TiktokIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
