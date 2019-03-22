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
	constructor(props) {
		super(props);
		this.about = React.createRef()
		this.prices = React.createRef()
		this.opening = React.createRef()
	} 

	scroll = (data) => window.scrollTo({
		left: 0, 
		top: this[data].current.offsetTop,
		behavior: 'smooth'
	}) //console.log(this[data])

	render() {
		return (
			<Layout>
				<SEO title="Home" keywords={[`sweeney todd barbers`, `kilkenny`, `ireland`]} />
				<Hero scroll={this.scroll} />
				
				<div ref={this.about}>
					<About />
				</div>

				<div ref={this.prices}>
					<PriceList />
				</div>
				
				<Testimonials />
				
				<PhotoGallery />

				<div ref={this.opening}>
					<OpeningHours />
				</div>
				<Footer />
			</Layout>
		)
	}
}

export default Index