import Header from '../Common/Header'
import { containerClassName } from '../../components/Charts/Constants'

const AboutPage = () => {
  return (
    <div>
      <Header name="Vida"/>
      <div className={containerClassName + " px-6 pt-4 pb-2"}>
        <p className="mt-6 leading-relaxed sm:text-lg md:text-xl xl:text-lg text-gray-800">
          Contributor: Phuoc Do
          <br/>
          Started in Seattle
          <br/>
          Want to contribute? Submit a <a href="https://github.com/vidalab/vida/pulls" target="_blank">Pull Request</a>.
          <br/>
          Implemented with: <a href="https://redwoodjs.com/" target="_blank">RedwoodJS</a>, <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>, <a href="https://fontawesome.com/license" target="_blank">FontAwesome</a>
        </p>
      </div>
    </div>
  )
}

export default AboutPage
