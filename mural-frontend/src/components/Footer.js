import React from 'react';
import '../styles/footer.css'; // Import the CSS file for styling

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                {/* First column */}
                <div className='footer-column'>
                    <p>Gender watch</p>
                </div>
                {/* Second column */}
                <div className='footer-column'>
                    {/* Sub-columns within the second column */}
                    <div className='sub-column'>
                        <p>Sub Column 1 Content</p>
                    </div>
                    <div className='sub-column'>
                        <p>Sub Column 2 Content</p>
                    </div>
                    <div className='sub-column'>
                        <p>Sub Column 3 Content</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
