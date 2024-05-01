import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';


const Team = () => {

// const team = [
//   { 
//     name:"Bar",
//     title: "secure Storage",
//     discription: "loremdsfsdfsdfsfsfsfsdfdsfdscxvsfvdf fd",
//     degree:"Industrial & Management engineer",
//     image: "assets/images/bar.png"
//   },    
// ];

// return <section id="team" className="small_pb">
//   <div className="container">
//     <div className="row align-items-center">
//       <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
//         <div className="title_default_light title_border text-center ">
//           <h4 className="animation"
//               data-animation="fadeInUp"
//               data-animation-delay="0.2s">Meet our solution for you</h4>
//               <p className="animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.2s">Lorem ipsum dolor sit 
//                 amet consectetur adipisicing elit. 
//                 Laudantium cum iste, eius error aut vol
//                 uptate aliquid fuga harum illo nisi, inc
//                 idunt nihil nesciunt dolorum omnis molesti
//                 ae consequuntur.
//                  Cupiditate, minus atque?</p>
                 
//         </div>
//       </div>
//     </div>
//     <div className="row">
//       {
//         team.map((team,i) => (
//           <div key={i + 1} className="col-lg-4 col-md-6 col-sm-12">
//             <div className="box_wrap text-center animation"
//             data-animation="fadeInUp"
//               data-animation-delay={`0.${i + 1}`}>
//                  <img src={`${team.image}`} alt={team.name} style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
//                 <h4>{team.name}</h4>
//                 <p>{team.title}</p>
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   </div>
// </section>
// };

const team = [
  {
    name: "Bar Ozeri",
    title: "Lead Developer",
    degree: "Industrial & Management Engineer",
    image: "assets/images/bar.jpg", 
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in",
      github: "https://github.com"
    }
  },
  {
    name: "Gal Mansuri",
    title: "Data Analyst",
    degree: "Industrial & Management Engineer",
    image: "assets/images/bar.jpg", 
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in",
      github: "https://github.com"
    }
  },
  {
    name: "Niv Zano",
    title: "PMO",
    degree: "Industrial & Management Engineer",
    image: "assets/images/zano.jpg", 
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in",
      github: "https://github.com"
    }
  },
  {
    name: "Matan Cohen",
    title: "PMO",
    degree: "Industrial & Management Engineer",
    image: "assets/images/matan.jpg", 
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in",
      github: "https://github.com"
    }
  },
  {
    name: "Uriya Sabag",
    title: "Lead Donator",
    degree: "Industrial & Management Engineer",
    image: "assets/images/sabag.jpg", 
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in",
      github: "https://github.com"
    }
  },
];

return <section id="team" className="team-explanation-section">
<div className="container">
  <div className="row justify-content-center">
    {team.map((member, index) => (
      <div key={index} className="col-lg-3 col-md-6 mb-4" style={{ borderRadius: '10%'}}> 
        <div className="card text-center rounded animation"
        data-animation="fadeInUp"
        data-animation-delay="0.2s">
          <img src={member.image} className="card-img-top" alt={member.name} style={{ borderRadius: '10%', maxHeight:'15rem'}} />
          <div className="card-body">
            <h5 className="card-title">{member.name}</h5>
            <p className="card-text">{member.title}</p>
            <p className="card-text">{member.degree}</p>
            <div className="social-links">
              <a className="mr-4" href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a> 
              <a className="mr-4" href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a> 
              <a className="mr-4" href={member.socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a> 

              {/* Add more social links/icons as needed */}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</section>
};

export default Team;


