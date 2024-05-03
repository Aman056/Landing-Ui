import React from 'react'
import idea from '../img/casual-life-3d-idea-yellow-lamp.png'
import universe from '../img/Screenshot 2024-05-02 231644.png'
import heart from '../img/casual-life-3d-pink-heart-1.png'
import dimond from '../img/icons8-ruby-a-dynamic,-open-source-programming-language.-24.png'
export default function Icons() {
    return (
        <>
            <img src={idea} className="idea-png" height={30} />
            <img src={universe} className="universe-png" height={50} />
            <img src={universe} className="universe2-png" height={80} />
            <img src={heart} className="heart-png" height={30} />
            <img src={heart} className="heart2-png" height={50} />
            <img src={dimond} className="dimond-png" height={30} />
        </>
    )
}
