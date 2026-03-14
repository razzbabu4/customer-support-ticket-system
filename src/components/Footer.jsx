import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="footer sm:footer-horizontal bg-black text-white p-5 lg:p-20">
                <aside>
                    <h2 className='text-xl font-bold text-white'>Support-Sphere</h2>
                    <p>
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-white">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div className='border'></div>
            <footer className="footer sm:footer-horizontal footer-center bg-black text-white p-10">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Support-Sphere</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;