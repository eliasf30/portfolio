
import "./projectCard.css"
import GitHub from "../images/Github.png"
import { AiFillGithub } from 'react-icons/ai'

export default function ProjectCard({ Title, Image, Link, GitHubLink }) {
    return (
        <div className="project_card">
            <a target="_blank" className="project_a" href={Link}>
                <img alt={Title} className="project_img" src={Image} />

            </a>
            <div className="title_div" >
                <a target="_blank" className="title_a" href={Link} >
                    <h4 className="card_title"> {Title}</h4>
                </a>

                <button className="github_button">
                    <a target="_blank" href={GitHubLink}>

                        <AiFillGithub className="Github_icon" />
                    </a>
                </button>


            </div>
        </div>
    )
}