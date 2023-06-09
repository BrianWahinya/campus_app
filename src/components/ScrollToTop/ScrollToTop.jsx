import { useState } from 'react';
import { DEPE } from '../../helpers/utils';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
  
    window.addEventListener('scroll', toggleVisible);
    return <a role="button" className="back-to-top" onClick={DEPE.scrollToTop} style={{display: visible ? 'inline' : 'none'}} title="Scroll-Up">
        <i className="fa fa-chevron-up"></i>
    </a>
}

export default ScrollToTop;