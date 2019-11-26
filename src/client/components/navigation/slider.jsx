import React, { useEffect } from 'react'
import Slider from 'react-slick'

import { UserAvatar } from '../form/components'

export default function ({ components, setting }) {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }

    return (
            <Slider {...settings} id='slider'>
            {components.map((component, i) => {
                return (
                    <div>
                        <UserAvatar alt='slider' url={component.userData.url} key={i} />
                    </div>
                )
            })}
        </Slider>
    )
}