import React from 'react'
import   './page.css';




const Header = () => {
    return(
        <header className="card">
            <div class ="navbar">
                <div class="logo">Start Bootstrap</div>
                <div class="tabs">
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div class="second">
                <h1>Welcome to Scrolling Nav</h1>
                <p>A functional Bootstrap 5 boilerplate for one page scrolling websites</p>
                <button class="btn">Start scrolling!</button>
            </div>
            <div class="third">
                <h2>About this page</h2>
                <p>This is a great place to talk about your webpage. This template is purposefully unstyled so you can<br></br> use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
    
            </div>
            <div class="list">
                    <ul>
                        <li>Clickable nav links that smooth scroll to page sections</li>
                        <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                        <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                        <li>Minimal custom CSS so you are free to explore your own unique design options</li>
                    </ul>
                </div>
            <div class="services">
                <h3>Services we offer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo<br></br> laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum<br></br> vel, labore ut velit dignissimos.</p>
            </div>
            <div class="contact-us">
                <h4>Contact us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident<br></br> officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in,<br></br> quo totam.</p>
            </div>
            <div class="footer">
            Copyright © Your Website 2022
            </div>
            
                
        </header>  
    )
}
export default Header