import React from 'react';
import { useState } from 'react';
import FooterColumn from './components/FooterColumn/FooterColumn';
import { Row, Col } from 'antd';
import SocialFooter from './components/SocialFooter/SocialFooter';
import Copyright from './components/Copyright/Copyright';

const Footer = () => {
    const [footerColumns] = useState([
        {
            title: 'Subject',
            data: [
                {
                    name: 'Arts and Humanities',
                    slug: '/'
                },
                {
                    name: 'Languages',
                    slug: '/'
                },
                {
                    name: 'Math',
                    slug: '/'
                },
                {
                    name: 'Science',
                    slug: '/'
                },
                {
                    name: 'Social Science',
                    slug: '/'
                },
                {
                    name: 'Other',
                    slug: '/'
                },
            ]
        },
        {
            title: 'Features',
            data: [
                {
                    name: 'Words, mine! Live',
                    slug: '/'
                },
                {
                    name: 'Words, mine! Learn',
                    slug: '/'
                },
                {
                    name: 'Diagrams',
                    slug: '/'
                },
                {
                    name: 'Flashcards',
                    slug: '/'
                },
                {
                    name: 'Flashcards',
                    slug: '/'
                },
                {
                    name: 'Premium Content',
                    slug: '/'
                },
                {
                    name: 'Partnerships',
                    slug: '/'
                },
            ]
        },
        {
            title: 'Help',
            data: [
                {
                    name: 'Sign up',
                    slug: '/'
                },
                {
                    name: 'Help Center',
                    slug: '/'
                },
                {
                    name: 'Honor Code',
                    slug: '/'
                },
                {
                    name: 'Community Guidelines',
                    slug: '/'
                },
                {
                    name: 'Students',
                    slug: '/'
                },
                {
                    name: 'Teachers',
                    slug: '/'
                },
            ]
        },
        {
            title: 'About',
            data: [
                {
                    name: 'Company',
                    slug: '/'
                },
                {
                    name: 'Company',
                    slug: '/'
                },
                {
                    name: 'Company',
                    slug: '/'
                },
                {
                    name: 'Company',
                    slug: '/'
                },
                {
                    name: 'Testimonials',
                    slug: '/'
                },
                {
                    name: 'Privacy',
                    slug: '/'
                },
                {
                    name: 'Ad and Cookie Policy',
                    slug: '/'
                },
                {
                    name: 'Terms',
                    slug: '/'
                },
            ]
        }
    ])
    return (
       <footer className="footer">
            <div className="footer__top">
            <Row justify="center" align="center">
                {
                    footerColumns.map((item, index) => (
                        <Col key={index} className="feature__item" lg={5} sm={6}>
                            <FooterColumn {...item} />
                        </Col>
                    ))
                }
            </Row>
            </div>
            <div className="footer__bottom">
                <SocialFooter/>
                <Copyright/>
            </div>
       </footer>
    );
}

export default Footer;