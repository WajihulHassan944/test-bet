import React from 'react';
import Four from "../../Assets/affiliateDashboard/fourone.png";
import FourTwo from "../../Assets/affiliateDashboard/fourone.png";
import Five from "../../Assets/affiliateDashboard/five.png";
import Six from "../../Assets/affiliateDashboard/six.png";
import { useRouter } from 'next/router';
import "../HowToPlay/HowToPlay.module.css";
import Image from 'next/image';
const HowItWorks = () => {
    const router = useRouter();
   
    return (
        <div>
         <i
        className="fa fa-arrow-circle-left"
        aria-hidden="true"
        onClick={() => router.push(-1)} 
                style={{ position: 'fixed', top: '100px', left: '70px', cursor: 'pointer', fontSize: '24px', color: '#007bff'}}
      ></i>
   
            <div className='howtoplay-wrapper howtoplay-updated'>
           <Image src={Four} alt="img" className='four' />
           <Image src={FourTwo} alt="img" className='five' />
           <Image src={Five} alt="img" className='six' />
           <Image src={Six} alt="img" className='seven' />
           
           
           
                <h1>How it works</h1>
                <p style={{zIndex:'99999'}}>
                    Affiliate accounts on FantasyMMAdness.com are designed for promoters who want to host and promote shadow fights by inviting people to participate in their custom leagues. The process begins with affiliate registration, which is distinct from the general member registration. Affiliates must be approved by the site administrators before they can create or publish events. Once approved, affiliates can set up shadow fights, where they define the buy-in amount and set up prize pools, known as "POTS." Affiliates receive a unique URL for each event, which they can promote through social media, email, or other platforms. If the required budget for a fight is not met, the fight is canceled, and all tokens are returned to participants. When the fight's budget is reached, half of the profits beyond the set amount go into the affiliate's wallet. Affiliates can request payouts through services like PayPal, Venmo, or CashApp. Although they do not participate in the fights themselves, affiliates can interact with members through a chat feature during the fights, promoting engagement and creating a dynamic experience for their leagues. The system provides affiliates a robust way to host, promote, and monetize their events while engaging directly with their audience.
                </p>
                
            </div>
        </div>
    );
};

export default HowItWorks;
