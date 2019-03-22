import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import PriceList from "../components/PriceList"
import Testimonials from "../components/Testimonials"
import PhotoGallery from "../components/PhotoGallery"
import OpeningHours from "../components/OpeningHours"
import Footer from "../components/Footer"

class Index extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="Home" keywords={[`sweeney todd barbers`, `kilkenny`, `ireland`]} />
				<Hero scroll={this.scroll} />
				<About />
				<PriceList />
				<Testimonials />
				<PhotoGallery />
				<OpeningHours />
				<Footer />
			</Layout>
		)
	}
}

export default Index