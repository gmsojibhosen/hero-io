import React from 'react';
import {  Facebook, FacebookIcon, Github, Linkedin, Mail, MapPin, MapPinIcon, Phone, X,  } from "lucide-react"
import { Link } from "react-router"
import logoImg from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="bg-black p-20">
        
       <img className="w-10 h-10 mx-auto mb-5" src={logoImg} alt="logo" />
        <div className="max-w-7xl mx-auto flex justify-between gap-10">
             <div>
            <h2 className="text-2xl text-gray-200 mb-5">Contact</h2>
            <ul>
                <li className="text-gray-400 mb-3"><Phone className="inline-block mr-1"></Phone><a >+800 1848241722</a></li>
                <li className="text-gray-400 mb-3"><MapPinIcon className="inline-block mr-1"></MapPinIcon><a >Dhaka, Bangladesh</a></li>
                <li className="text-gray-400 mb-3"><Mail className="inline-block mr-1"></Mail><a >gmsojib@gmail.com</a></li>
            </ul>
        </div>
       
          <div>
            <h2 className="text-2xl text-gray-200 mb-5">Discover Us</h2>
            <ul>
                <li className="text-gray-400 mb-3"><a >About Us</a></li>
                <li className="text-gray-400 mb-3"><a >Our Company</a></li>
                <li className="text-gray-400 mb-3"><a >Editors Policy</a></li>
                <li className="text-gray-400 mb-3"><a >FAQ & Support</a></li>

            </ul>
        </div>

       
             <div>
            <h2 className="text-2xl text-gray-200 mb-5">Our Service</h2>
            <ul>
                <li className="text-gray-400 mb-3"><a >Hero App Store</a></li>
                <li className="text-gray-400 mb-3"><a >Publish Your App</a></li>
                <li className="text-gray-400 mb-3"><a >Promote Your App</a></li>
                <li className="text-gray-400 mb-3"><a >FAQ & Support</a></li>
                <li className="text-gray-400 mb-3"><a >Download</a></li>

            </ul>
        </div>

            <div>
            <h2 className="text-2xl text-gray-200 mb-5">Social Link</h2>
            <ul className="">
                <li className="text-gray-400 mb-3  "><Link><FacebookIcon className="inline-block mr-1"></FacebookIcon> Facebook</Link></li>
                <li className="text-gray-400 mb-3"><Link><X className="inline-block mr-1"></X></Link>Twitter</li>
                <li className="text-gray-400 mb-3"><Link> <Linkedin className="inline-block mr-1" /> Linkdle</Link></li>
                <li className="text-gray-400 mb-3"><Link><Github className="inline-block mr-1"/>Github</Link></li>
               

            </ul>
        </div>
        </div>

        <p className="text-center text-gray-400 mt-5">Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;