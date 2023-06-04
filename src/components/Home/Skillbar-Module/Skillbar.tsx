import React from 'react';
import './skillbar.scss';

export default function Skillbar() {
    return (
        <>
            <div className='container'>

                <div className='skillBox'>

                    <div className='skillBar'>
                        <a className='ion-social-html5-outline'> </a>
                        <span className='skillName'> HTML5 </span>
                        <div className="skillArea">
                            <span className="skill-HTML"> </span>
                        </div>
                    </div>

                    <div className='skillBar'>
                        <a className='ion-social-css3-outline'> </a>
                        <span className='skillName'> CSS3 </span>
                        <div className="skillArea">
                            <span className="skill-CSS"> </span>
                        </div>
                    </div>

                    <div className='skillBar'>
                        <a className='ion-social-javascript'> </a>
                        <span className='skillName'> JAVASCRIPT </span>
                        <div className="skillArea">
                            <span className="skill-JS"> </span>
                        </div>
                    </div>

                    <div className='skillBar'>
                        <a className='ion-social-angular-outline'> </a>
                        <span className='skillName'> ANGULAR </span>
                        <div className="skillArea">
                            <span className="skill-A4"> </span>
                        </div>
                    </div>

                    <div className='skillBar'>
                        <a className='ion-social-nodejs'> </a>
                        <span className='skillName'> NODEJS </span>
                        <div className="skillArea">
                            <span className="skill-NODEJS"> </span>
                        </div>
                    </div>

                    <div className='skillBar'>
                        <a className='ion-social-wordpress-outline'> </a>
                        <span className='skillName'> WORDPRESS </span>
                        <div className="skillArea">
                            <span className="skill-WP"> </span>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
