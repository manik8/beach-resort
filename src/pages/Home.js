import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import FeaturedRoom from '../components/FeaturedRoom';

export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="Luxurious Rooms" subtitle="Delux Room Starting at $299">
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRoom />

        </>
    )
}
