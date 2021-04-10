import React from 'react'
import LoadIcon from './loading-dots.svg';
import './LoadingScreen.css'
export default function LoadingScreen() {
    return (
        <img src={LoadIcon} className="rotate" alt='Loading...'/>
    )
}
