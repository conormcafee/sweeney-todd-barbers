import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import PriceList from "../components/PriceList"
import Testimonials from "../components/Testimonials"
import PhotoGallery from "../components/PhotoGallery"
import OpeningHours from "../components/OpeningHours"

const Index = () => (
	<Layout>
		<SEO title="Home" keywords={[`sweeney todd barbers`, `kilkenny`, `ireland`]} />
		
		<Hero />
		
			<About />

			<PriceList />

			<Testimonials />

			<PhotoGallery />

			<OpeningHours />
			
	</Layout>
)

export default Index