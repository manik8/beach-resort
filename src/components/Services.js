import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "cocktail offers a blend of sweet and sour flavors. Pour whiskey, lemon juice and simple syrup into an ice-filled mixer. Have some leisure time. "
            },
            {
                icon: <FaHiking />,
                title: "EndLess Hiking",
                info: "Trail into the heart of the old growth hemlock forest at the Dutlinger Natural Area. This place feels so timeless. Lots of wildflowers along the trail."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "There is a Hassle free shuttle service from the hotel to the beach. You can go anywhere within the city by using our free hassle free shuttle service."
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "The World's Strongest Beer Is 67.5 Percent Alcohol, Scottish brewery Brewmeister Available. Drink and Enjoy! with the awesome weather."
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {
                        this.state.services.map((item,index) => {
                            return (
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            );
                        })
                    }
                </div>
            </section>
        )
    }
}
