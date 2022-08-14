import Head from 'next/head'
import Image from 'next/image'
import Slider from 'react-slick/lib/slider'
import About from '../components/About/About'
import Banner from '../components/Slider/Banner'
import BrowseCourses from '../components/BrowseCourses/BrowseCourses'
import Courses from '../components/Courses/Courses'
import Footer from '../components/Footer/Footer'
import BanneGrowthSpeaks from '../components/GrowthSpeaks/GrowthSpeaks'
// import Header from '../components/Header/Header'

import Meetus from '../components/Meet-us/Meetus'
import News from '../components/News/News'
import Ourdivisions from '../components/Ourdivisions/Ourdivisions'


export default function Home() {
  return (
    <div>
      <Head>
        <title>{"M&M"}</title>
      </Head>
      {/* <Header/> */}
      <Banner/>
      {/* <Banner/> */}
      {/* <Slider/> */}
      <BrowseCourses/>
      <BanneGrowthSpeaks/>
      <Courses/>
      <About/>
      <News/>
      <Ourdivisions/>
      <Meetus/>
      <Footer/>
    </div>
  )
}
