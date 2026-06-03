import QZone from "../../layouts/SideLayout/QZone";
import SocialLinks from "../../layouts/SideLayout/SocialLinks";
import SocialLogins from "../../layouts/SideLayout/SocialLogins";

const Adverstise = () => {
    return (
        <div  className="col-span-3">
            <SocialLogins></SocialLogins>
            <SocialLinks></SocialLinks>
            <QZone></QZone>
            <h2 className="font-semibold">Advertisement</h2>       
        </div>
       
    );
};

export default Adverstise;