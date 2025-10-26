

import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import { TRIP_DATA, CURRENCY_RATES } from './constants';
import type { DayPlan, TourOverview, GuestDetails, Accommodation, TourCost, InclusionsExclusions, TermsAndConditions, FlightData, VisaInfo, HotelStay } from './types';

// --- HELPERS ---
const numberToWords = (num: number, currency: string): string => {
    if (num === null || num === undefined) return '';
    const number = Math.floor(num);
    if (number === 0 && num !== 0) return ''; // handles empty input but allows explicit 0
    if (number === 0) return 'Zero';


    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const scales = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

    const numToString = number.toString();
    if (numToString.length > 15) return 'Number is too large';

    const convertChunk = (n: string): string => {
        let chunkStr = '';
        const numN = parseInt(n);
        if (numN > 99) {
            chunkStr += ones[Math.floor(numN / 100)] + ' Hundred ';
        }
        const tensAndOnes = numN % 100;
        if (tensAndOnes >= 10 && tensAndOnes <= 19) {
            chunkStr += teens[tensAndOnes - 10];
        } else {
            chunkStr += tens[Math.floor(tensAndOnes / 10)];
            chunkStr += (chunkStr && tensAndOnes % 10 !== 0 ? ' ' : '') + ones[tensAndOnes % 10];
        }
        return chunkStr.trim();
    };

    let words = '';
    let scaleIndex = 0;
    let tempNum = numToString;

    while (tempNum.length > 0) {
        const chunk = tempNum.slice(Math.max(0, tempNum.length - 3));
        tempNum = tempNum.slice(0, Math.max(0, tempNum.length - 3));
        if (chunk !== '000') {
            const chunkInWords = convertChunk(chunk);
            words = chunkInWords + (scales[scaleIndex] ? ' ' + scales[scaleIndex] : '') + ' ' + words;
        }
        scaleIndex++;
    }
    
    let currencyName = '';
    switch(currency.toUpperCase()){
        case 'USD': currencyName = number === 1 ? 'US Dollar' : 'US Dollars'; break;
        case 'INR': currencyName = number === 1 ? 'Indian Rupee' : 'Indian Rupees'; break;
        case 'VND': currencyName = number === 1 ? 'Vietnamese Dong' : 'Vietnamese Dong'; break;
    }
    
    return (words.trim() + ' ' + currencyName).trim();
};

// --- ANIMATION WRAPPER ---
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; animationType?: 'fade-in-up' | 'flip-in'; delay?: number }> = ({ children, className, animationType = 'fade-in-up', delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const getAnimationClass = () => {
        if (!isVisible) {
            return animationType === 'flip-in' ? 'opacity-0' : 'opacity-0 translate-y-8';
        }
        return animationType === 'flip-in' ? 'animate-flip-in' : 'animate-fade-in-up';
    };

    return (
        <div
            ref={ref}
            className={`${className} ${getAnimationClass()}`}
            style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};


// --- SVG IONS ---
const StarIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.116 3.552 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.552c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>;
const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M11.54 22.35a.75.75 0 01-1.08 0l-6.75-6.75a.75.75 0 01.04-1.12l6.75-6.75a.75.75 0 011.08 0l6.75 6.75a.75.75 0 01.04 1.12l-6.75 6.75zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" /></svg>;
const CheckCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" className={`${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const CarIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>;
const FlightIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>;
const BedIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M19 7h-8v6h8V7zm2-2H5c-1.1 0-2 .9-2 2v12h2V11h14v6h2V7c0-1.1-.9-2-2-2zm-4 8H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>;
const WalkIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 14.7V22h2v-6h1v4h2v-6h1v6h2v-7.3l-2.5-5.4-1.7 1z"/></svg>;
const BoatIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20 13c2 0 4-2 4-4V7h-2v2h-2m0-9H4a2 2 0 0 0-2 2v11.5A3.5 3.5 0 0 0 5.5 19h13A3.5 3.5 0 0 0 22 15.5V11h-2v2H4V4h16V2M6 6v3h2V6H6m4 0v3h2V6h-2m4 0v3h2V6h-2z"/></svg>;
const FoodIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>;
const LandmarkIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>;
const ShoppingIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h12v12z"/></svg>;
const MountainIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M15 6l-2.5 4L10 4l-5 12h16z"/></svg>;
const CableCarIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M6 16.71V9c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v7.71a3.5 3.5 0 0 1-2.5 3.41V22h-1v-2h-5v2H9v-1.88a3.5 3.5 0 0 1-2.5-3.41zM16 11H8v5h8v-5zm-2.5 8.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-3 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/><path d="M3 4h18v3H3z"/></svg>;
const PagodaIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 9l4 1v9H3v2h18v-2h-2v-9l4-1L12 2zm0 4.69L15.31 9H8.69L12 6.69zM7 11h10v7H7v-7zm2 2v3h6v-3H9z"/></svg>;
const TrainIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2.23v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm0 2c3.51 0 5.42.48 5.95 1H6.05C6.58 4.48 8.49 4 12 4zm6 11.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V13h12v2.5zm0-4.5H6V7h12v4z"/><circle cx="8.5" cy="14.5" r="1.5"/><circle cx="15.5" cy="14.5" r="1.5"/></svg>;
const CyclingIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8.83 6.17l-3.37-2.1c-.27-.17-.62-.12-.84.13l-1.39 1.59c-1.48-1.01-3.28-1.5-5.23-1.5H8.8c-.51 0-.98.26-1.25.68L4.2 12.83c-.48.75.05 1.67.92 1.67h1.37c-.36.63-.59 1.35-.59 2.13v3.12c0 .55.45 1 1 1s1-.45 1-1v-2.13c0-1.1.9-2 2-2h.83l3.01 3.01c.2.2.45.29.71.29.26 0 .51-.1.71-.29l2.83-2.83c.39-.39.39-1.02 0-1.41l-2.04-2.04 1.5-1.5c.25-.22.3-.57.13-.84zM7 22c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>;
const SuitcaseIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-3V4c0-1.1-.9-2-2-2H9C7.9 2 7 2.9 7 4v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z"/></svg>;
const SparklesIcon = ({className="w-5 h-5"}: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 0112 18zM5.106 5.106a.75.75 0 011.06 0l2.122 2.121a.75.75 0 01-1.06 1.06L5.106 6.166a.75.75 0 010-1.06zM15.712 15.712a.75.75 0 011.06 0l2.121 2.121a.75.75 0 01-1.06 1.06l-2.121-2.12a.75.75 0 010-1.061zM3 12a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3A.75.75 0 013 12zM17.25 12a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM6.166 18.894a.75.75 0 010-1.06l2.121-2.122a.75.75 0 011.06 1.06L7.226 18.894a.75.75 0 01-1.06 0zM18.894 7.226a.75.75 0 010-1.06l2.121-2.121a.75.75 0 011.06 1.06L19.954 7.226a.75.75 0 01-1.06 0z"/></svg>;
const BuildingOfficeIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 4v2h2V6H6zm4 0v2h2V6h-2zm4 0v2h2V6h-2zM6 10v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H6zm4 0v2h2v-2h-2z" clipRule="evenodd" /></svg>;
const CreditCardIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>;
const XCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={`${className} text-red-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const XMarkIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
const InformationCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v2h-2zm0 4h2v6h-2z" clipRule="evenodd" /></svg>;
const TicketIcon = ({ className = "w-5 h-5" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM4 9h5V7H4v2z" clipRule="evenodd" /></svg>;
const PassportIcon = ({ className = "w-5 h-5" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 17V7h16v10H4zm6-7H8v4h2v-4zm4 0h-2v4h2v-4zm4 0h-2v4h2v-4z"/><circle cx="12" cy="10.5" r="1.5"/><path d="M12 14c-1.65 0-3 1.35-3 3h6c0-1.65-1.35-3-3-3z"/></svg>;
const ShirtIcon = ({ className = "w-5 h-5" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-2.4 0-4.47 1.63-4.92 3.82L6.15 9.5c-.22.61.02 1.29.57 1.72l4.13 3.27c.45.36 1.09.36 1.54 0l4.13-3.27c.55-.43.79-1.11.57-1.72l-.93-3.68C16.47 3.63 14.4 2 12 2zm-1.94 13.91L5 19v2h14v-2l-5.06-3.09c-.58.37-1.25.59-1.94.59s-1.36-.22-1.94-.59z"/></svg>;
const PassportStampIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 5" />
        <text x="50" y="40" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="currentColor" transform="rotate(-15 50 50)">APPROVED</text>
        <path d="M30 45 L45 60 L70 35" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-15 50 50)" />
        <text x="50" y="70" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor" transform="rotate(-15 50 50)">WANDERLUST DEPT.</text>
    </svg>
);
const WalletIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-1 11h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1zm3-4H4V8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v3z" /></svg>;
const CalendarDaysIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM7 12h5v5H7z" /></svg>;
const ExclamationTriangleIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>;
const LinkIcon = ({ className = "w-4 h-4" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.665l3-3z" /><path d="M8.603 14.53a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 005.656 5.656l3-3a4 4 0 00-.225-5.865.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.665l-3 3z" /></svg>;
const ClipboardListIcon = ({ className = "w-5 h-5" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3 2h6v2H7V4zm0 4h6v2H7V8zm0 4h6v2H7v-2z" clipRule="evenodd" /></svg>;
const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ChevronDownIcon = ({ className = "w-5 h-5" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>;
const DocumentTextIcon = ({ className = "w-5 h-5" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8.342a2 2 0 00-.586-1.414l-4.342-4.342A2 2 0 0011.658 2H4zm4 8a1 1 0 10-2 0v2a1 1 0 102 0v-2zm2-2a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" /></svg>;


// --- Currency Flags ---
const UsaFlagIcon = ({ className = "w-6 h-5 rounded-sm" }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className={className}><path fill="#b22234" d="M0 0h72v48H0z"/><path fill="#fff" d="M0 4h72v4H0zm0 8h72v4H0zm0 8h72v4H0zm0 8h72v4H0zm0 8h72v4H0z"/><path fill="#3c3b6e" d="M0 0h36v28H0z"/><path fill="#fff" d="M6 3.5L4.5 8l-3.5-2.5 4 1-1.5 4 2.5-3.5 2.5 3.5-1.5-4 4-1-3.5 2.5zm12 0L16.5 8l-3.5-2.5 4 1-1.5 4 2.5-3.5 2.5 3.5-1.5-4 4-1-3.5 2.5zm12 0L28.5 8l-3.5-2.5 4 1-1.5 4 2.5-3.5 2.5 3.5-1.5-4 4-1-3.5 2.5zM6 10.5l-1.5 4.5-3.5-2.5 4 1-1.5 4 2.5-3.5 2.5 3.5-1.5-4 4-1-3.5 2.5zm12 0l-1.5 4.5-3.5-2.5 4 1-1.5 4 2.5-3.5 2.5 3.5-1.5-4 4-1-3.5 2.5zm12 0l-1.5 4.5-3.5-2.5 4 1-1.5 4 2.5-3.5 2.5 3.5-1.5-4 4-1-3.5 2.5zM6 17.5l-1.5 4.5-3.5-2.5 4 1-1.5 4 2.5-3.5 2.5 3.5-1.5-4 4-1-3.5 2.5zm12 0l-1.5 4.5-3.5-2.5 4 1-1.5 4 2.5-3.5 2.5 3.5-1.5-4 4-1-3.5 2.5zm12 0l-1.5 4.5-3.5-2.5 4 1-1.5 4 2.5-3.5 2.5 3.5-1.5-4 4-1-3.5 2.5z"/></svg>);
const IndiaFlagIcon = ({ className = "w-6 h-5 rounded-sm" }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}><path fill="#f93" d="M0 0h900v200H0z"/><path fill="#fff" d="M0 200h900v200H0z"/><path fill="#128807" d="M0 400h900v200H0z"/><circle cx="450" cy="300" r="80" fill="#000080"/><circle cx="450" cy="300" r="70" fill="#fff"/><circle cx="450" cy="300" r="20" fill="#000080"/><path fill="#000080" d="M450 220l-10 30h20zm0 160l10-30H440zm-80-80l30 10v-20zm160 0l-30-10v20zM352.2 242.2l21.2 21.2-14.1 14.1-21.2-21.2zm195.6 195.6l-21.2-21.2 14.1-14.1 21.2 21.2zM352.2 357.8l-21.2 21.2 14.1 14.1 21.2-21.2zM547.8 242.2l21.2-21.2-14.1-14.1-21.2 21.2z"/></svg>);
const VietnamFlagIcon = ({ className = "w-6 h-5 rounded-sm" }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" className={className}><path fill="#da251d" d="M0 0h600v400H0z"/><path fill="#ff0" d="M300 115.5l58.8 180.9-153.8-111.8h190L241.2 296.4z"/></svg>);

// --- TIMELINE HELPER ---
const getActivityVisuals = (activity: string) => {
    const lower = activity.toLowerCase();
    
    if (lower.includes('flight to da nang')) return { type: 'MAJOR_TRAVEL', icon: <FlightIcon/>, details: 'Flight to Danang'};
    if (lower.includes('sapa night bus')) return { type: 'MAJOR_TRAVEL', icon: <CarIcon/>, details: 'VIP Cabin Bus to Sapa'};
    
    if (lower.includes('dinner cruise')) return { type: 'HIGHLIGHT', icon: <BoatIcon/>, title: 'Dinner Cruise on Saigon River' };
    if (lower.includes('my son sanctuary')) return { type: 'HIGHLIGHT', icon: <PagodaIcon/>, title: 'My Son Sanctuary (World Heritage)' };
    if (lower.includes('golden bridge')) return { type: 'HIGHLIGHT', icon: <LandmarkIcon/>, title: 'Iconic: Golden Bridge Walk' };
    if (lower.includes('coconut forest')) return { type: 'HIGHLIGHT', icon: <BoatIcon/>, title: 'Basket Boat Trip in Coconut Forest' };
    if (lower.includes('fansipan peak')) return { type: 'HIGHLIGHT', icon: <MountainIcon/>, title: 'Fansipan Peak via Cable Car' };
    if (lower.includes('halong bay luxury day cruise')) return { type: 'HIGHLIGHT', icon: <BoatIcon/>, title: 'Halong Bay Luxury Day Cruise' };

    if (lower.includes('hotel') || lower.includes('check-in') || lower.includes('overnight')) return { type: 'TRANSITION', icon: <BedIcon /> };
    
    if (lower.includes('airport') || lower.includes('private transfer')) return { type: 'TRANSITION', icon: <FlightIcon /> };
    if (lower.includes('car') || lower.includes('bus') || lower.includes('pickup') || lower.includes('transfer to')) return { type: 'TRANSITION', icon: <CarIcon/> };

    let icon = <LandmarkIcon />;
    if (lower.includes('pagoda')) icon = <PagodaIcon />;
    else if (lower.includes('train street')) icon = <TrainIcon />;
    else if (lower.includes('cycling')) icon = <CyclingIcon />;
    else if (lower.includes('cruise') || lower.includes('boat')) icon = <BoatIcon />;
    else if (lower.includes('walking') || lower.includes('walk on') || lower.includes('explore')) icon = <WalkIcon />;
    else if (lower.includes('lunch') || lower.includes('dinner') || lower.includes('breakfast')) icon = <FoodIcon />;
    else if (lower.includes('market') || lower.includes('shopping')) icon = <ShoppingIcon />;
    else if (lower.includes('mountain') || lower.includes('cave')) icon = <MountainIcon />;
    else if (lower.includes('cable car') || lower.includes('ba na hills')) icon = <CableCarIcon />;

    return { type: 'ACTIVITY', icon };
};

// --- MAP COMPONENT ---
const InteractiveMap: React.FC<{
    dayPlans: DayPlan[];
    openDay: number | null;
    onMarkerClick: (day: number) => void;
}> = ({ dayPlans, openDay, onMarkerClick }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<L.Map | null>(null);
    const markersRef = useRef<(L.Marker | null)[]>([]);

    useEffect(() => {
        if (mapContainerRef.current && !mapRef.current) {
            const map = L.map(mapContainerRef.current, {
                scrollWheelZoom: false,
                attributionControl: false,
            });
            mapRef.current = map;

            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            }).addTo(map);

            const markerGroup = L.featureGroup();
            const polylineCoords: L.LatLng[] = [];

            markersRef.current = dayPlans.map(plan => {
                if (!Array.isArray(plan.coords) || plan.coords.length !== 2 || typeof plan.coords[0] !== 'number' || typeof plan.coords[1] !== 'number') {
                    return null;
                }

                const latLng = L.latLng(plan.coords[0], plan.coords[1]);
                
                const isActive = openDay === plan.day;
                const iconHtml = `<div class="font-bold font-sans text-sm transition-all duration-300 ${isActive ? 'bg-brand-accent text-white scale-125 animate-pulse-slow shadow-2xl' : 'bg-white text-brand-accent opacity-80'} w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white">${plan.day}</div>`;
                
                const customIcon = L.divIcon({
                    html: iconHtml,
                    className: '', 
                    iconSize: [32, 32],
                    iconAnchor: [16, 16],
                });

                const marker = L.marker(latLng, { icon: customIcon })
                    .addTo(map)
                    .bindPopup(`<b class="font-sans">Day ${plan.day}:</b> <span class="font-sans">${plan.destination}</span>`);
                
                marker.on('click', () => {
                    onMarkerClick(plan.day);
                });

                markerGroup.addLayer(marker);
                polylineCoords.push(latLng);
                return marker;
            });

            if (markerGroup.getLayers().length > 0) {
                 map.fitBounds(markerGroup.getBounds(), { padding: [50, 50] });
            }
           
            L.polyline(polylineCoords, { color: 'rgba(231, 111, 81, 0.9)', weight: 4, dashArray: '8, 8' }).addTo(map);
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []); 

    useEffect(() => {
        if (!mapRef.current) return;

        markersRef.current.forEach((marker, index) => {
            if (!marker) return;
            const day = index + 1;
            const isActive = openDay === day;
            const iconHtml = `<div class="font-bold font-sans text-sm transition-all duration-300 ${isActive ? 'bg-brand-accent text-white scale-125 animate-pulse-slow shadow-2xl' : 'bg-white text-brand-accent opacity-80'} w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white">${day}</div>`;
            marker.setIcon(L.divIcon({
                html: iconHtml,
                className: '',
                iconSize: [32, 32],
                iconAnchor: [16, 16],
            }));
        });
        
        if (openDay) {
            const plan = dayPlans.find(p => p.day === openDay);
            if (plan && Array.isArray(plan.coords) && plan.coords.length === 2 && typeof plan.coords[0] === 'number' && typeof plan.coords[1] === 'number') {
                const latLng = L.latLng(plan.coords[0], plan.coords[1]);
                mapRef.current.flyTo(latLng, 11, {
                    animate: true,
                    duration: 1.5
                });
                const marker = markersRef.current[openDay - 1];
                if (marker) {
                    setTimeout(() => marker.openPopup(), 500);
                }
            }
        } else {
             if (markersRef.current.length > 0) {
                 const markerGroup = L.featureGroup(markersRef.current.filter(m => m) as L.Marker[]);
                 if (markerGroup.getLayers().length > 0) {
                    mapRef.current.flyToBounds(markerGroup.getBounds(), { padding: [50, 50], duration: 1.5 });
                 }
             }
        }

    }, [openDay, dayPlans]);


    return (
        <div className="p-1 bg-gradient-to-br from-brand-sky via-brand-sun to-brand-accent rounded-2xl shadow-lg">
            <div className="relative bg-white rounded-xl overflow-hidden">
                 <div className="p-4 bg-gray-50/70 border-b">
                    <div className="flex items-center">
                        <MapPinIcon className="w-6 h-6 text-brand-jungle mr-3" />
                        <h2 className="text-2xl font-bold font-handwriting text-brand-charcoal">Trip Route</h2>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-9">Click a number on the map to jump to that day's plan.</p>
                </div>
                <div ref={mapContainerRef} className="h-64 md:h-80 w-full" />
            </div>
        </div>
    )
};


// --- CORE COMPONENTS ---
const CreativeHeader: React.FC<{ main: string; script: string; icon: React.ReactNode }> = ({ main, script, icon }) => {
    return (
        <div className="relative p-6 bg-gradient-to-br from-brand-jungle to-brand-jungle/90 overflow-hidden rounded-t-xl">
             <div className="absolute -left-4 -top-8 text-white/10 opacity-70">
                {React.cloneElement(icon as React.ReactElement<any>, { className: "w-32 h-32" })}
            </div>
            <div className="relative text-center h-20 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold font-sans text-white/90 drop-shadow-lg tracking-wider uppercase z-10">
                    {main}
                </span>
                <span
                    className="text-5xl font-script font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-sun to-yellow-400 transform -rotate-6 -mt-6"
                    style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
                >
                    {script}
                </span>
            </div>
        </div>
    );
};

const StandaloneCreativeHeader: React.FC<{ main: string; script: string }> = ({ main, script }) => (
    <div className="relative text-center h-20 flex flex-col items-center justify-center my-6">
        <span className="text-4xl font-bold font-sans text-brand-charcoal/80 drop-shadow-sm tracking-wider uppercase z-10">
            {main}
        </span>
        <span
            className="text-6xl font-script font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-jungle to-brand-accent transform -rotate-6 -mt-6"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}
        >
            {script}
        </span>
    </div>
);

const Section: React.FC<{ mainTitle: string; scriptTitle: string; icon: React.ReactNode; children: React.ReactNode }> = ({ mainTitle, scriptTitle, icon, children }) => (
    <div className="p-1 bg-gradient-to-br from-brand-sky via-brand-sun to-brand-accent rounded-2xl shadow-lg">
        <div className="relative rounded-xl overflow-hidden bg-white">
            <CreativeHeader main={mainTitle} script={scriptTitle} icon={icon} />
            <div className="p-6 bg-white" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231E5950\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
                {children}
            </div>
        </div>
    </div>
);

const TimelineItem: React.FC<{ activity: string; index: number; isOpen: boolean, isLast: boolean }> = ({ activity, index, isOpen, isLast }) => {
    const timeMatch = activity.match(/^(\d{1,2}:\d{2}[^:]*?):/);
    const time = timeMatch ? timeMatch[1].trim() : null;
    const description = time ? activity.replace(timeMatch[0], '').trim() : activity;
    const visualInfo = getActivityVisuals(activity);

    let iconContainer: React.ReactNode;
    let content: React.ReactNode;

    switch (visualInfo.type) {
        case 'MAJOR_TRAVEL':
            iconContainer = (
                <div className="z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 border-brand-sky/50 bg-brand-sky/20 text-brand-sky">
                    {React.cloneElement(visualInfo.icon, { className: "w-6 h-6" })}
                </div>
            );
            content = (
                <div className="rounded-xl p-4 bg-brand-sky/10 border-2 border-dashed border-brand-sky/30">
                    <p className="font-bold text-brand-sky text-sm">{visualInfo.details}</p>
                    <p className="text-gray-600 text-xs mt-1">{description}</p>
                </div>
            );
            break;

        case 'HIGHLIGHT':
            iconContainer = (
                 <div className="z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 border-amber-300 bg-amber-100 text-amber-600 relative">
                    {React.cloneElement(visualInfo.icon, { className: "w-6 h-6" })}
                    <span className="absolute flex h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                    </span>
                </div>
            );
            content = (
                 <div className="relative rounded-xl p-4 bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 shadow-lg transform hover:scale-[1.03] hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer bg-[length:200%_100%]"></div>
                    <SparklesIcon className="absolute top-3 right-3 w-5 h-5 text-amber-500 opacity-80" />
                    <h5 className="font-bold text-amber-900 text-base">{visualInfo.title}</h5>
                    <p className="text-gray-700 mt-1 text-sm">{description}</p>
                </div>
            );
            break;
        
        default: 
            const isTransition = visualInfo.type === 'TRANSITION';
            iconContainer = (
                <div className={`z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 ${isTransition ? 'bg-indigo-100 border-indigo-200 text-indigo-600' : 'bg-green-100 border-green-200 text-green-600'}`}>
                    {React.cloneElement(visualInfo.icon, { className: "w-6 h-6" })}
                </div>
            );
            content = (
                <>
                    {time && <p className="text-xs font-bold text-brand-charcoal -mt-1 mb-1">{time.split('-')[0]}</p>}
                    <div className={`rounded-xl p-4 transition-shadow duration-300 hover:shadow-lg ${isTransition ? 'bg-indigo-50/70 border border-indigo-100' : 'bg-white border'}`}>
                        <p className={`text-gray-700 text-sm ${isTransition ? 'font-semibold' : ''}`}>{description}</p>
                    </div>
                </>
            );
            break;
    }

    return (
        <div className="flex">
            <div className="flex flex-col items-center mr-6">
                {iconContainer}
                {!isLast && <div className="w-0.5 flex-grow bg-gray-200" />}
            </div>
            <div 
                className={`flex-grow pb-10 transition-all duration-500 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${isOpen ? index * 80 : 0}ms` }}
            >
                {content}
            </div>
        </div>
    );
};

const ActivityTimeline: React.FC<{ activities: string[], isOpen: boolean }> = ({ activities, isOpen }) => {
    return (
        <div className="relative">
            {activities.map((activity, index) => (
                <TimelineItem 
                    key={index} 
                    activity={activity} 
                    index={index} 
                    isOpen={isOpen}
                    isLast={index === activities.length - 1}
                />
            ))}
        </div>
    );
};

const TravelStatusHeader: React.FC<{ currentDestination: string; prevDestination: string | null }> = ({ currentDestination, prevDestination }) => {
    if (!prevDestination) {
        return (
             <div className="flex items-center p-3 mb-4 rounded-lg bg-brand-jungle/10 border border-brand-jungle/20">
                <MapPinIcon className="w-6 h-6 text-brand-jungle mr-3 flex-shrink-0" />
                <div>
                    <p className="font-bold text-brand-jungle">Let the Adventure Begin!</p>
                    <p className="text-sm text-brand-jungle/80">First stop: {currentDestination}</p>
                </div>
            </div>
        );
    }
    const isTravelDay = currentDestination !== prevDestination;
    if (isTravelDay) {
        return (
            <div className="flex items-center p-3 mb-4 rounded-lg bg-brand-accent/10 border border-brand-accent/20">
                <SuitcaseIcon className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" />
                <div>
                    <p className="font-bold text-brand-accent">On The Move!</p>
                    <p className="text-sm text-brand-accent/80">From {prevDestination.split(' & ')[0]} to {currentDestination.split(' & ')[0]}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="flex items-center p-3 mb-4 rounded-lg bg-brand-sky/10 border border-brand-sky/20">
            <MapPinIcon className="w-6 h-6 text-brand-sky mr-3 flex-shrink-0" />
            <div>
                <p className="font-bold text-brand-sky">Exploring {currentDestination}</p>
                <p className="text-sm text-brand-sky/80">Still in the area, more to see!</p>
            </div>
        </div>
    );
};

const OutfitSuggestion: React.FC<{ suggestion: DayPlan['outfitSuggestion'] }> = ({ suggestion }) => {
    if (!suggestion) return null;

    return (
        <div>
            <h4 className="text-lg font-bold mb-2 text-brand-charcoal flex items-center">
                <ShirtIcon className="w-5 h-5 mr-2" />
                What to Wear
            </h4>
            <div className="p-4 bg-brand-sand rounded-lg border">
                <h5 className="font-semibold text-brand-jungle">{suggestion.title}</h5>
                <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                    {suggestion.points.map((point, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2 mt-1 text-brand-accent">▸</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const DayUseHotelInfo: React.FC<{ hotel: HotelStay }> = ({ hotel }) => {
    return (
        <div className="p-4 mb-6 rounded-lg bg-blue-50 border border-blue-200 flex items-start">
            <ClockIcon className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
            <div>
                <p className="font-bold text-blue-700 text-xs">Day Use Hotel</p>
                <a href={hotel.bookingUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2">
                    <h4 className="font-sans font-bold text-lg text-brand-accent group-hover:text-brand-accent/80 transition-colors">{hotel.name}</h4>
                    <LinkIcon className="w-4 h-4 text-brand-accent/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <p className="text-sm text-gray-600">in {hotel.city}</p>
                <p className="text-sm text-gray-600 mt-1">{hotel.rooms}</p>
            </div>
        </div>
    );
};

const HotelTimelineInfo: React.FC<{ hotel: HotelStay }> = ({ hotel }) => {
    return (
        <div className="p-4 mb-6 rounded-lg bg-brand-sand/70 border border-brand-jungle/20 flex items-start">
            <BedIcon className="w-8 h-8 text-brand-jungle mr-4 flex-shrink-0 mt-1" />
            <div>
                <p className="font-bold text-brand-jungle text-xs">Tonight's Accommodation</p>
                <a href={hotel.bookingUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2">
                    <h4 className="font-sans font-bold text-lg text-brand-accent group-hover:text-brand-accent/80 transition-colors">{hotel.name}</h4>
                    <LinkIcon className="w-4 h-4 text-brand-accent/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <p className="text-sm text-gray-600">in {hotel.city}</p>
            </div>
        </div>
    );
};


const DayAccordion: React.FC<{ dayPlan: DayPlan; isOpen: boolean; onClick: () => void; prevDestination: string | null; shortDate: string; weekday: string; }> = ({ dayPlan, isOpen, onClick, prevDestination, shortDate, weekday }) => {
    const meals = dayPlan.meals.split(',').map(m => m.trim()).filter(Boolean);
    const mealMap: { [key: string]: string } = { 'B': 'Breakfast', 'L': 'Lunch', 'D': 'Dinner' };
    const [dateMon, dateNum] = shortDate.split(' ');

    const hasOvernightTravel = dayPlan.activities.some(activity => 
        activity.toLowerCase().includes('overnight trip') || 
        activity.toLowerCase().includes('night bus')
    );

    const overnightHotelForThisDay = TRIP_DATA.accommodation.hotels.find(hotel => {
        const daysCovered = hotel.coversDays.match(/\d+/g);
        const isOvernightStay = hotel.nights.toLowerCase() !== 'day use';
        return daysCovered ? daysCovered.includes(String(dayPlan.day)) && isOvernightStay : false;
    });
    
    const dayUseHotelForThisDay = TRIP_DATA.accommodation.hotels.find(hotel => {
        const daysCovered = hotel.coversDays.match(/\d+/g);
        const isDayUse = hotel.nights.toLowerCase() === 'day use';
        return daysCovered ? daysCovered.includes(String(dayPlan.day)) && isDayUse : false;
    });

    return (
        <div className={`transition-all duration-500 ${isOpen ? 'pb-4' : ''}`}>
            <div className={`bg-white rounded-2xl shadow-lg transition-all duration-500 transform-preserve-3d ${isOpen ? '[transform:rotateX(5deg)]' : 'hover:shadow-xl'}`}>
                <button onClick={onClick} className="w-full text-left relative block group rounded-2xl overflow-hidden" aria-expanded={isOpen}>
                    {/* Background Image & Overlay */}
                    <img
                        src={dayPlan.imageUrl}
                        alt={dayPlan.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

                    {/* Content */}
                    <div className="relative flex items-center justify-between gap-4 p-4 min-h-[7.5rem]">
                        {/* Left: Text Info */}
                        <div className="text-white flex-grow pr-24" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.8)' }}>
                            <p className="font-bold text-xs uppercase tracking-wider opacity-90">{`Day ${dayPlan.day} - ${weekday}`}</p>
                            <p className="text-2xl lg:text-3xl font-script leading-tight text-brand-sun">{dayPlan.destination}</p>
                            {dayPlan.bannerSummary && (
                                <p className="text-xs lg:text-sm font-sans font-semibold mt-1 tracking-wide">{dayPlan.bannerSummary}</p>
                            )}
                        </div>

                        {/* Right: Date & Chevron */}
                        <div className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 flex items-center gap-2 sm:gap-4">
                            <div className="text-white text-right transition-transform duration-300 group-hover:scale-110">
                                <p className="font-extrabold font-sans text-2xl leading-none" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.8)' }}>{dateNum}</p>
                                <p className="font-bold font-sans text-xs leading-none tracking-wider uppercase" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.8)' }}>{dateMon}</p>
                            </div>
                            <div className={`p-1 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>
                                <svg className="w-8 h-8 text-white/80" style={{ filter: 'drop-shadow(1px 2px 4px rgba(0,0,0,0.8))' }} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                            </div>
                        </div>
                    </div>
                </button>
            </div>

            <div className={`grid transition-all duration-700 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="p-6 bg-white rounded-b-2xl shadow-inner-lg -mt-2 relative">
                         {isOpen && <div className="absolute top-4 right-4 text-brand-accent/50 opacity-0 animate-stamp-in"><PassportStampIcon/></div>}
                        <div className="text-center mb-6 border-b pb-4">
                            <div className="flex items-center justify-center gap-2 mt-2 px-4">
                                {dayPlan.isHighlight && (
                                    <div className="text-yellow-400 animate-point-and-shake flex-shrink-0" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }}>
                                        <StarIcon className="w-6 h-6" />
                                    </div>
                                )}
                                <h3 className="text-xs font-bold font-sans text-brand-charcoal/90">{dayPlan.title}</h3>
                            </div>
                        </div>
                        <TravelStatusHeader currentDestination={dayPlan.destination} prevDestination={prevDestination} />
                        
                        {isOpen && dayUseHotelForThisDay && (
                            <div 
                                className={`transition-all duration-500 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: '50ms' }}
                            >
                                <DayUseHotelInfo hotel={dayUseHotelForThisDay} />
                            </div>
                        )}
                        
                        {isOpen && overnightHotelForThisDay && !hasOvernightTravel && (
                            <div 
                                className={`transition-all duration-500 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: '100ms' }}
                            >
                                <HotelTimelineInfo hotel={overnightHotelForThisDay} />
                            </div>
                        )}

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-2">
                                <h4 className="text-lg font-bold mb-4 text-brand-charcoal">Daily Activities</h4>
                                <ActivityTimeline activities={dayPlan.activities} isOpen={isOpen} />
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold mb-2 text-brand-charcoal">Meals Included</h4>
                                    <div className="p-3 bg-brand-sand rounded-md border text-sm text-gray-600">
                                        {meals.length > 0 && meals[0] !== 'None'
                                            ? meals.map(m => mealMap[m] || m).join(', ')
                                            : 'Meals are not included today. Time for some local food exploration!'}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2 text-brand-charcoal">What's Covered</h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        {dayPlan.inclusions.map((inclusion, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mr-2 mt-0.5 text-emerald-500" />
                                                <span>{inclusion}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <OutfitSuggestion suggestion={dayPlan.outfitSuggestion} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- ADDITIONAL SECTIONS ---

const CurrencyInput = ({
    name,
    symbol,
    value,
    word,
    onChange,
    flagIcon,
}: {
    name: 'usd' | 'inr' | 'vnd',
    symbol: string,
    value: string,
    word: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    flagIcon: React.ReactNode,
}) => (
    <div>
        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 gap-2">
                {flagIcon}
                <span className="text-gray-500 sm:text-sm">{symbol}</span>
            </div>
            <input
                type="number"
                name={name}
                className="block w-full rounded-md border-0 bg-white py-2 pl-12 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-jungle sm:text-sm"
                placeholder={name === 'vnd' ? '0' : '0.00'}
                value={value}
                onChange={onChange}
                aria-label={`${name.toUpperCase()} Amount`}
                min="0"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <span className="text-gray-500 sm:text-sm font-bold">{name.toUpperCase()}</span>
            </div>
        </div>
        <div className="mt-1 text-xs italic text-brand-charcoal/80 h-8 flex items-center justify-center text-center px-1">
            {word}
        </div>
    </div>
);

const CurrencyConverter: React.FC = () => {
    const [values, setValues] = useState({ usd: '', inr: '', vnd: '' });
    const [wordRepresentations, setWordRepresentations] = useState({ usd: '', inr: '', vnd: '' });
    const [isExpanded, setIsExpanded] = useState(false);

    const handleConversion = (value: string, from: 'usd' | 'inr' | 'vnd') => {
        const cleanedValue = value.replace(/[^0-9.]/g, '');

        if (cleanedValue.trim() === '') {
            setValues({ usd: '', inr: '', vnd: '' });
            setWordRepresentations({ usd: '', inr: '', vnd: '' });
            return;
        }

        const amount = parseFloat(cleanedValue);
        if (isNaN(amount) || amount < 0) {
            setValues(v => ({ ...v, [from]: cleanedValue }));
            setWordRepresentations({ usd: '', inr: '', vnd: '' });
            return;
        }

        let usdVal = 0;
        if (from === 'usd') usdVal = amount;
        else if (from === 'inr') usdVal = amount / CURRENCY_RATES.USD_TO_INR;
        else if (from === 'vnd') usdVal = amount / CURRENCY_RATES.USD_TO_VND;

        const newValues = {
            usd: usdVal.toFixed(2),
            inr: (usdVal * CURRENCY_RATES.USD_TO_INR).toFixed(2),
            vnd: (usdVal * CURRENCY_RATES.USD_TO_VND).toFixed(0),
        };
        
        // Ensure the input field being typed in shows the exact value
        const displayValues = {
            ...newValues,
            [from]: cleanedValue
        };

        setValues(displayValues);

        setWordRepresentations({
            usd: numberToWords(parseFloat(newValues.usd), 'usd'),
            inr: numberToWords(parseFloat(newValues.inr), 'inr'),
            vnd: numberToWords(parseFloat(newValues.vnd), 'vnd'),
        });
    };

    return (
        <div className="p-1 bg-gradient-to-br from-brand-sky via-brand-sun to-brand-accent rounded-2xl shadow-lg">
            <div className="relative bg-white rounded-xl p-4 pb-5">
                <h3 className="text-center font-bold font-handwriting text-brand-charcoal mb-3 text-xl">Currency Converter</h3>
                <div className={`grid ${isExpanded ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2'} gap-2 sm:gap-2`}>
                    <CurrencyInput name="vnd" symbol="₫" value={values.vnd} word={wordRepresentations.vnd} onChange={(e) => handleConversion(e.target.value, 'vnd')} flagIcon={<VietnamFlagIcon className="w-5 h-4 rounded-sm" />} />
                    {isExpanded && (
                        <div className="transition-opacity duration-500">
                             <CurrencyInput name="usd" symbol="$" value={values.usd} word={wordRepresentations.usd} onChange={(e) => handleConversion(e.target.value, 'usd')} flagIcon={<UsaFlagIcon className="w-5 h-4 rounded-sm" />} />
                        </div>
                    )}
                    <CurrencyInput name="inr" symbol="₹" value={values.inr} word={wordRepresentations.inr} onChange={(e) => handleConversion(e.target.value, 'inr')} flagIcon={<IndiaFlagIcon className="w-5 h-4 rounded-sm" />} />
                </div>
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)} 
                        className="w-8 h-8 bg-white rounded-full shadow-lg border flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-brand-jungle focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-jungle transition-all duration-300"
                        aria-label={isExpanded ? "Show fewer currencies" : "Show more currencies"}
                    >
                        <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>
        </div>
    );
};


const FlightTicketsSection: React.FC<{ flightData: FlightData; isOpen: boolean; onClose: () => void; }> = ({ flightData, isOpen, onClose }) => {
    const [expandedRoute, setExpandedRoute] = useState<string | null>(null);

    const handleRouteToggle = (route: string) => {
        setExpandedRoute(prev => (prev === route ? null : route));
    };
    
    useEffect(() => {
        if (!isOpen) {
            setExpandedRoute(null);
        }
    }, [isOpen]);

    return (
        <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
                <div className="p-1 mt-4 bg-gradient-to-br from-brand-sky via-brand-sun to-brand-accent rounded-2xl shadow-lg">
                    <div className="relative bg-white rounded-xl p-6">
                        <button onClick={onClose} className="absolute top-3 right-3 p-1.5 rounded-full text-gray-500 hover:bg-gray-200/80 transition-colors z-10" aria-label="Close flight tickets section">
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                        <h3 className="text-center font-bold font-handwriting text-brand-charcoal mb-6 text-2xl">Flight E-Tickets</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {flightData.map((routeData) => {
                                const isRouteExpanded = expandedRoute === routeData.route;
                                return (
                                    <div key={routeData.route} className="flex flex-col items-center">
                                        <button
                                            onClick={() => handleRouteToggle(routeData.route)}
                                            className="w-full inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-jungle text-white font-bold text-sm shadow-md border-2 border-transparent hover:bg-brand-sun hover:text-brand-jungle transform transition-all duration-300 ease-in-out hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-sun"
                                            aria-expanded={isRouteExpanded}
                                        >
                                            <span className="mr-2">{routeData.route}</span>
                                            <svg
                                                className={`w-5 h-5 opacity-80 transform transition-transform duration-300 ${isRouteExpanded ? 'rotate-180' : ''}`}
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div className={`grid w-full transition-all duration-300 ease-in-out ${isRouteExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                            <div className="overflow-hidden">
                                                <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                                                    {routeData.tickets.map((ticket, tIndex) => (
                                                        <a
                                                            key={tIndex} href={ticket.url} target="_blank" rel="noopener noreferrer"
                                                            className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-brand-jungle text-white font-bold text-xs shadow-md border-2 border-transparent hover:bg-brand-sun hover:text-brand-jungle transform transition-all duration-300 ease-in-out hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-sun"
                                                        >
                                                            <TicketIcon className="mr-2 h-4 w-4 opacity-80 group-hover:text-brand-jungle transition-colors flex-shrink-0" />
                                                            <span>{ticket.passengers}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const VisaSection: React.FC<{ visaData: VisaInfo[]; isOpen: boolean; onClose: () => void; }> = ({ visaData, isOpen, onClose }) => {
    return (
        <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
                <div className="p-1 mt-4 bg-gradient-to-br from-brand-sky via-brand-sun to-brand-accent rounded-2xl shadow-lg">
                    <div className="relative bg-white rounded-xl p-6">
                        <button onClick={onClose} className="absolute top-3 right-3 p-1.5 rounded-full text-gray-500 hover:bg-gray-200/80 transition-colors z-10" aria-label="Close visa section">
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                        <h3 className="text-center font-bold font-handwriting text-brand-charcoal mb-4 text-2xl">Vietnam E-Visas</h3>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {visaData.map((visa, index) => (
                                <a
                                    key={index}
                                    href={visa.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-brand-jungle text-white font-bold text-xs shadow-md border-2 border-transparent hover:bg-brand-sun hover:text-brand-jungle transform transition-all duration-300 ease-in-out hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-sun ${isOpen ? 'animate-fade-in-up' : 'opacity-0'}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <PassportIcon className="mr-2 h-4 w-4 opacity-80 group-hover:text-brand-jungle transition-colors" />
                                    <span>{visa.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AccommodationDetails: React.FC<{ accommodation: Accommodation }> = ({ accommodation }) => (
    <Section mainTitle="Your Cozy" scriptTitle="Hideaways" icon={<BuildingOfficeIcon />}>
        <p className="mb-8 text-gray-600 text-center">Your home away from home will be in these lovely <strong>{accommodation.category}</strong> hotels.</p>
        <div className="space-y-6">
            {accommodation.hotels.map((hotel, index) => (
                <div key={index} className="p-4 bg-brand-sand/60 rounded-xl shadow-md border border-brand-jungle/10 transition-shadow hover:shadow-lg">
                    <div className="sm:flex sm:items-start sm:justify-between">
                        <div>
                            <div className="flex items-center mb-1">
                                <MapPinIcon className="w-5 h-5 text-brand-jungle mr-2" />
                                <h3 className="font-bold text-base text-brand-jungle tracking-wide uppercase">{hotel.city}</h3>
                            </div>
                            <a href={hotel.bookingUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2">
                                <h4 className="font-script text-2xl text-brand-accent group-hover:text-brand-accent/80 transition-colors">{hotel.name}</h4>
                                <LinkIcon className="w-4 h-4 text-brand-accent/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:text-right flex-shrink-0">
                             <div className="flex items-center justify-start sm:justify-end">
                                <CalendarDaysIcon className="w-4 h-4 text-brand-charcoal/70 mr-2" />
                                <p className="text-sm font-semibold text-brand-charcoal/90">{hotel.dates}</p>
                             </div>
                             <p className="text-xs text-gray-600 sm:ml-6">{hotel.nights}</p>
                        </div>
                    </div>
                   
                    <div className="mt-4 border-t border-brand-jungle/10 pt-4 space-y-3">
                        <div className="flex items-start">
                            <BedIcon className="w-5 h-5 text-brand-charcoal/70 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-brand-charcoal/90 text-sm">Room Details</p>
                                <p className="text-sm text-gray-600">{hotel.rooms}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <ClipboardListIcon className="w-5 h-5 text-brand-charcoal/70 mr-3 mt-0.5 flex-shrink-0" />
                             <div>
                                <p className="font-semibold text-brand-charcoal/90 text-sm">Covers Itinerary</p>
                                <p className="text-sm text-gray-600">{hotel.coversDays}</p>
                            </div>
                        </div>
                        {hotel.notes && (
                            <div className="flex items-start p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <InformationCircleIcon className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-yellow-800 text-sm">Special Note</p>
                                    <p className="text-sm text-yellow-700">{hotel.notes}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const TourCostDetails: React.FC<{ tourCost: TourCost }> = ({ tourCost }) => (
    <Section mainTitle="The Damage," scriptTitle="aka Your Investment" icon={<CreditCardIcon />}>
         <p className="mb-4 text-gray-600 text-center">Prices based on a group of <strong>{tourCost.category}</strong></p>
         <div className="space-y-4">
            {tourCost.costs.map((cost, index) => (
                <div key={index} className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-center sm:text-left p-4 bg-brand-sand/70 rounded-lg border border-brand-jungle/10">
                    <span className="text-gray-700 font-semibold">{cost.description}</span>
                    <span className="font-bold text-base sm:text-lg text-white bg-brand-accent px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">{cost.price}</span>
                </div>
            ))}
         </div>
    </Section>
);

const InclusionsExclusionsDetails: React.FC<{ data: InclusionsExclusions }> = ({ data }) => (
    <Section mainTitle="The Good Stuff," scriptTitle="and the Not-So-Good" icon={<CheckCircleIcon />}>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-200">
                <h3 className="text-lg font-semibold mb-3 text-emerald-700">You Get This! (Inclusions)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                    {data.inclusions.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mr-2 mt-0.5 text-emerald-500" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-red-50/50 p-4 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold mb-3 text-red-700">You're On Your Own For This! (Exclusions)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                    {data.exclusions.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <XCircleIcon className="w-5 h-5 flex-shrink-0 mr-2 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Section>
);

const TermsAndConditionsDetails: React.FC<{ data: TermsAndConditions }> = ({ data }) => (
    <Section mainTitle="The Boring," scriptTitle="but Important Stuff" icon={<InformationCircleIcon />}>
        <div className="space-y-6">
            <div>
                 <h3 className="text-lg font-semibold mb-2 text-brand-charcoal flex items-center"><WalletIcon className="w-5 h-5 mr-2 text-brand-jungle" />Payment Term</h3>
                <p className="text-sm text-gray-600 pl-7"><strong>Deposit:</strong> {data.paymentTerm.deposit}</p>
                <p className="text-sm text-gray-600 pl-7"><strong>Balance:</strong> {data.paymentTerm.balance}</p>
            </div>
            <div>
                 <h3 className="text-lg font-semibold mb-2 text-brand-charcoal flex items-center"><CalendarDaysIcon className="w-5 h-5 mr-2 text-brand-jungle" />{data.cancellationPolicy.title}</h3>
                <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside pl-7">
                    {data.cancellationPolicy.policies.map((policy, index) => (
                        <li key={index}>{policy}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2 text-brand-charcoal flex items-center"><ExclamationTriangleIcon className="w-5 h-5 mr-2 text-brand-jungle" />Important Notes</h3>
                <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside pl-7">
                    {data.importantNotes.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))}
                </ul>
            </div>
        </div>
    </Section>
);

const TravelersGuide: React.FC = () => (
    <Section mainTitle="Traveler's" scriptTitle="Guidebook" icon={<SuitcaseIcon />}>
        <div className="grid md:grid-cols-2 gap-8">
            {/* What to Carry */}
            <div className="p-4 bg-brand-sand/60 rounded-xl border border-brand-jungle/10">
                <h3 className="text-lg font-bold mb-3 text-brand-jungle flex items-center">
                    <CheckCircleIcon className="w-6 h-6 mr-2 text-emerald-500" />
                    What to Pack: The Essentials
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                    {[
                        "Lightweight clothing (cotton/linen)",
                        "Rain jacket or compact umbrella",
                        "Swimsuit for Halong Bay & beaches",
                        "Comfortable walking shoes & sandals",
                        "Sun protection: hat, sunglasses, sunscreen",
                        "Insect repellent (especially for rural areas)",
                        "Basic first-aid kit & personal meds",
                        "Passport, visa, and travel insurance docs",
                        "Power bank & universal adapter (Type A/C)",
                        "Reusable water bottle to stay hydrated",
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                           <span className="mr-2 mt-1 text-brand-accent">▸</span>
                           <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Do's and Don'ts */}
            <div className="space-y-6">
                <div className="p-4 bg-emerald-50/50 rounded-lg border border-emerald-200">
                    <h3 className="text-lg font-semibold mb-3 text-emerald-700">Do's: Embrace the Culture</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        {[
                            "Dress modestly when visiting temples.",
                            "Bargain with a smile at local markets.",
                            "Try the street food from busy stalls.",
                            "Learn basic phrases: 'Xin chào' (Hello), 'Cảm ơn' (Thank you).",
                            "Be extremely cautious when crossing streets.",
                        ].map((item, index) => (
                             <li key={index} className="flex items-start">
                                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mr-2 mt-0.5 text-emerald-500" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-red-50/50 p-4 rounded-lg border border-red-200">
                     <h3 className="text-lg font-semibold mb-3 text-red-700">Don'ts: Cultural Courtesy</h3>
                     <ul className="space-y-2 text-sm text-gray-700">
                        {[
                            "Don't drink tap water; use bottled water.",
                            "Avoid taking photos of military sites.",
                            "Don't touch anyone's head or pass items over it.",
                            "Refrain from public displays of affection.",
                            "Never lose your temper publicly.",
                        ].map((item, index) => (
                             <li key={index} className="flex items-start">
                                <XCircleIcon className="w-5 h-5 flex-shrink-0 mr-2 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </Section>
);

const FunSection: React.FC = () => {
    return (
        <Section mainTitle="Your Fun" scriptTitle="Survival Kit" icon={<SparklesIcon/>}>
            <div className="relative">
                 <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-10 text-brand-sun" style={{fontSize: '200px'}}>🇻🇳</div>
                <div className="p-6 grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-brand-sand rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                        <h3 className="font-bold text-brand-jungle">Phrase of the Day</h3>
                        <p className="font-handwriting text-2xl my-2 text-brand-accent">"Một, hai, ba, dzô!"</p>
                        <p className="text-sm text-gray-600">(Means "1, 2, 3, cheers!") Use when celebrating that you survived crossing the street in Hanoi.</p>
                    </div>
                    <div className="p-4 bg-brand-sand rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                        <h3 className="font-bold text-brand-jungle">Traveler's Joke</h3>
                        <p className="text-lg my-2 text-brand-charcoal">Why did the tourist get kicked out of the noodle shop?</p>

                        <p className="text-sm text-gray-600">For trying to pay with a credit <i className="font-semibold">pho</i>-ne!</p>
                    </div>
                    <div className="p-4 bg-brand-sand rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                        <h3 className="font-bold text-brand-jungle">Pro Packing Tip</h3>
                        <p className="text-lg my-2 text-brand-charcoal">Roll, Don't Fold</p>
                        <p className="text-sm text-gray-600">Roll your clothes to save space and prevent wrinkles. This also leaves more room for souvenirs you probably don't need.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};


const App: React.FC = () => {
    const [openDay, setOpenDay] = useState<number | null>(1);
    const [isFlightSectionOpen, setIsFlightSectionOpen] = useState(false);
    const [isVisaSectionOpen, setIsVisaSectionOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggle = (day: number) => {
        setOpenDay(openDay === day ? null : day);
    };

    const [month, year] = TRIP_DATA.tourOverview.travelDate.split(' ');
    const startDate = new Date(`${month} 13, ${year}`);
    
    return (
        <div className="min-h-screen font-sans text-brand-charcoal bg-brand-sand">
            <header className="relative h-[22rem] overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Vietnam Landscape" 
                        className="w-full h-full object-cover" 
                        style={{ transform: `translateY(${scrollY * 0.4}px) scale(1.1)` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-brand-jungle/40 to-transparent"></div>
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
                    <AnimatedSection delay={200}>
                       <div className="relative text-center h-28 flex flex-col items-center justify-center my-2">
                            <span className="text-5xl md:text-6xl font-bold font-sans text-white/95 drop-shadow-xl tracking-wider uppercase z-10">
                                Amazing Vietnam
                            </span>
                            <span
                                className="text-7xl md:text-8xl font-script font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-sun to-yellow-400 transform -rotate-6 -mt-8"
                                style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}
                            >
                                9 Day Tour
                            </span>
                        </div>
                    </AnimatedSection>
                     <AnimatedSection delay={400}>
                        <p className="text-lg md:text-xl -mt-4 text-white/90 drop-shadow">
                            An Unforgettable Adventure
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={600} className="relative mt-8">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button 
                                onClick={() => { setIsFlightSectionOpen(!isFlightSectionOpen); setIsVisaSectionOpen(false); }}
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-full shadow-lg text-brand-jungle bg-brand-sun hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-sun transition-all duration-300 transform hover:scale-105 active:scale-100"
                            >
                                <TicketIcon className="w-5 h-5 mr-2 -ml-1" />
                                Flight E-Tickets
                            </button>
                             <button 
                                onClick={() => { setIsVisaSectionOpen(!isVisaSectionOpen); setIsFlightSectionOpen(false); }}
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-full shadow-lg text-brand-jungle bg-brand-sun hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-sun transition-all duration-300 transform hover:scale-105 active:scale-100"
                            >
                                <PassportIcon className="w-5 h-5 mr-2 -ml-1" />
                                Visa
                            </button>
                             <a
                                href="https://drive.google.com/drive/u/3/folders/1xs1eDOhKS9Z7GKdvtEJTkXnEEZgkNA9E"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-full shadow-lg text-brand-jungle bg-brand-sun hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-sun transition-all duration-300 transform hover:scale-105 active:scale-100"
                            >
                                <DocumentTextIcon className="w-5 h-5 mr-2 -ml-1" />
                                All Docs
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
                <div className="absolute bottom-0 left-0 w-full text-brand-sand">
                    <svg viewBox="0 0 1440 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1440,120H0V21.32C240,42.66,480,64,720,64,960,64,1200,42.66,1440,21.32Z"/>
                    </svg>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 -mt-16 mb-8 space-y-1">
                    <FlightTicketsSection flightData={TRIP_DATA.flightData} isOpen={isFlightSectionOpen} onClose={() => setIsFlightSectionOpen(false)} />
                    <VisaSection visaData={TRIP_DATA.visaData} isOpen={isVisaSectionOpen} onClose={() => setIsVisaSectionOpen(false)} />
                </div>
            
                <div className="space-y-8">
                    <AnimatedSection>
                        <CurrencyConverter />
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <InteractiveMap 
                            dayPlans={TRIP_DATA.dayByDay}
                            openDay={openDay}
                            onMarkerClick={handleToggle}
                        />
                    </AnimatedSection>

                    <div className="space-y-4">
                        <AnimatedSection>
                           <StandaloneCreativeHeader main="Your Day-by-Day" script="Adventure" />
                        </AnimatedSection>
                        {TRIP_DATA.dayByDay.map((plan, index) => {
                            const prevPlan = index > 0 ? TRIP_DATA.dayByDay[index - 1] : null;
                            const currentDate = new Date(startDate);
                            currentDate.setDate(startDate.getDate() + index);

                            const shortDate = currentDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short' }).toUpperCase();
                            const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

                            return (
                                <AnimatedSection key={plan.day}>
                                    <DayAccordion 
                                        dayPlan={plan} 
                                        isOpen={openDay === plan.day} 
                                        onClick={() => handleToggle(plan.day)}
                                        prevDestination={prevPlan ? prevPlan.destination : null}
                                        shortDate={shortDate}
                                        weekday={weekday}
                                    />
                                </AnimatedSection>
                            )
                        })}
                    </div>
                </div>

                <div className="py-10 space-y-8">
                    <AnimatedSection><AccommodationDetails accommodation={TRIP_DATA.accommodation} /></AnimatedSection>
                    <AnimatedSection><TravelersGuide /></AnimatedSection>
                    <AnimatedSection><TourCostDetails tourCost={TRIP_DATA.tourCost} /></AnimatedSection>
                    <AnimatedSection><InclusionsExclusionsDetails data={TRIP_DATA.generalInclusionsExclusions} /></AnimatedSection>
                    <AnimatedSection><TermsAndConditionsDetails data={TRIP_DATA.termsAndConditions} /></AnimatedSection>
                    <AnimatedSection><FunSection /></AnimatedSection>
                </div>
            </main>

            <footer className="text-center py-6 bg-brand-jungle mt-10">
                <p className="text-sm text-brand-sand/80">Itinerary by <span className="font-semibold text-white">{TRIP_DATA.tourOverview.provider}</span> | Website crafted by <span className="font-semibold text-white">Akshay Patwa</span></p>
            </footer>
        </div>
    );
};

export default App;
