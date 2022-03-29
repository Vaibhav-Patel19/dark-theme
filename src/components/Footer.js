import '../css/style.css'
import React from 'react';

export default function Footer(props) {
    return (
        <div className="footer">

            <h1 className="heading">CodingProfiles</h1>

            <div className="profiles">
                <ul>
                    <li> <a href = "https://leetcode.com/vaibhav-patel19/"> LeetCode </a></li>
                        <li> <a href = "https://auth.geeksforgeeks.org/user/vaibhavpatel19/practice/"> GeeksforGeeks </a></li>
                        <li> <a href = "https://www.interviewbit.com/profile/vaibhav-patel_118"> Interviewbit </a></li>
                        <li> <a href = "https://www.hackerrank.com/vaibhavpatel19"> HackerRank </a></li>
                </ul>
            </div>

            <br />
            
            <h1 className="heading">Let's Talk</h1>

            <p className="heading-2"> Want to Connect? My inbox is always open!</p>
            
            <div className="socials">

                <ul class="social-links list-unstyled mt-4">

                    <li><a href="mailto:vaibhav6644@gmail.com">
                        <ion-icon size="large" name="mail-outline"></ion-icon>
                    </a></li>
                    
                    <li><a href="https://github.com/Vaibhav-Patel19">
                        <ion-icon size="large" name="logo-github"></ion-icon>
                    </a></li>

                    <li><a href="https://www.linkedin.com/in/vaibhavpatel19/">
                        <ion-icon size="large" name="logo-linkedin"></ion-icon>
                    </a></li>
                    
                    <li><a href="https://www.facebook.com/vaibhav.patel.94801116/">                    
                        <ion-icon size="large" name="logo-facebook"></ion-icon>
                    </a></li>
                    
                    <li><a href="https://twitter.com/VaibhavPatel_19">               
                        <ion-icon size="large" name="logo-twitter"></ion-icon>
                    </a></li>
                                
                    <li><a href="https://www.instagram.com/vaibhavpatel_19/">
                        <ion-icon size="large" name="logo-instagram"></ion-icon>
                    </a></li>
                                    
                </ul>
                
            </div>

        </div>
    )
}