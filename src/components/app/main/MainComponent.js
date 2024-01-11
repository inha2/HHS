import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MainComponent.css';
function MainComponent() {
    const onMouseOutHandle = () => {
        console.log('12312323');
    };
    return (
        <div onMouseOver={onMouseOutHandle}>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
        </div>
    );
}

export default MainComponent;
