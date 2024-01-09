import React, { useEffect, useState } from 'react';
import './SwiperComponent.css';

const SwiperComponent = ({ param }) => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(param);
    }, []);
    return (
        <section class="notify-wrap">
            <div class="notify-wrap-inner ellipsis">
                <div class="notify-scroll">
                    <ul>
                        <li>{title}</li>
                        <li>{title}</li>
                        <li>{title}</li>
                        <li>{title}</li>
                        <li>{title}</li>
                        <li>{title}</li>
                        <li>{title}</li>
                        <li>{title}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SwiperComponent;
