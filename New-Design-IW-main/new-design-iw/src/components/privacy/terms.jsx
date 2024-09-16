import React, { useEffect } from 'react';
import './privacy.css';

const Terms = () => {
    useEffect(() => {
        document.title = 'Terms of Service | Innovate Work';
      }, []);
  return (
    <div className="container">

        <h2 className="privacy-container-h1">Terms and Conditions</h2>
        
        <div className="privacy-container">
        <h3 className="privacy-container-h3">Introduction</h3>    
        <p className="privacy-container-p">
            Welcome to Innovate Work L.L.C., accessible at <span className="privacy-container-span"> innovatework.net</span>. By accessing our site and
            using our website and application development services, you agree to be bound by the
            following terms and conditions. If you disagree with any part of these terms, please do not
            use our services.	 	
        </p>
        </div>

        <div className="privacy-container">
        <h3 className="privacy-container-h3">Service Description</h3>    
        <p className="privacy-container-p">
            Innovate Work L.L.C. provides customized website and application development services,
            tailored to meet the unique needs of each client. Our services range from ideation to
            implementation and ongoing maintenance, utilizing the latest technologies and
            methodologies to ensure the highest quality of our products. We carefully assess each
            client's requirements to deliver optimal solutions.	  	
        </p>
        </div>

        <div className="privacy-container">
        <h3 className="privacy-container-h3">User Responsibilities</h3>    
        <p className="privacy-container-p">
            Users engaging with Innovate Work L.L.C. for project development must adhere to the
            following responsibilities:	
            • Submission of Project Details: Detailed information about their project, including scope,
            desired technologies, timelines, and budget.	
            • Communication Protocols: Adherence to specific communication protocols, including
            the use of designated project management tools and attendance at scheduled meetings.	
            • Feedback and Revisions: Provision of timely feedback on delivered milestones, with a
            limited number of revisions without incurring additional charges.	
            • Payment Policies: Compliance with payment policies, including making deposits,
            adhering to payment schedules, and using accepted payment methods.	
            • Acceptable Use Policy: Adherence to guidelines on the use of services or produced
            software to prevent illegal, unethical, or otherwise harmful activities.		    
        </p>
        </div>

        <div className="privacy-container">
        <h3 className="privacy-container-h3">Intellectual Property Rights</h3>    
        <p className="privacy-container-p">
            All original content, features, and functionality of our services remain the exclusive property
            of Innovate Work L.L.C. and its licensors. Use of our trademarks, trade dress, and intellectual
            property without prior written consent is strictly prohibited.	
        </p>
        </div>

        <div className="privacy-container">
        <h3 className="privacy-container-h3">Termination</h3>    
        <p className="privacy-container-p">
            Innovate Work L.L.C. reserves the right to terminate or suspend access to our services
             without prior notice, for any reason including, but not limited to, breaches of these Terms
            and Conditions, engaging in illegal or harmful activities, or non-payment of fees.	    
        </p>
        </div>

        <div className="privacy-container">
        <h3 className="privacy-container-h3">Governing Law</h3>    
        <p className="privacy-container-p">
            These Terms and Conditions are governed by and construed in accordance with the laws of
            California, without regard to its conflict of law provisions.	
        </p>
        </div>

        <div className="privacy-container">
        <h3 className="privacy-container-h3">Changes to Terms</h3>    
        <p className="privacy-container-p">
             We reserve the right to modify or replace these Terms at any time. You will be notified of any
            changes through an update to the effective date of these Terms or via email.	
        </p>
        </div>

        <div className="privacy-container">
        <h3 className="privacy-container-h3">Contact Information</h3>    
        <p className="privacy-container-p">
            For any questions or concerns regarding these Terms and Conditions, please contact us at
            <span className="privacy-container-span"> contact@innovatework.net</span>.
        </p>
        </div>

        <div className="privacy-container">   
        <p className="privacy-container-p">
            INNOVATE WORK L.L.C.
        </p>
        </div>

     </div>
  );
};

export default Terms;