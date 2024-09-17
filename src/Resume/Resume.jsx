import React from 'react'
import './Resume.scss'
import { MdNotStarted } from "react-icons/md";
import { TbSectionFilled } from "react-icons/tb";


const Resume = () => {
  return (
    <div className='resume_main'>
      <div className='resume_header'>
        <h1>Divyesh G Patel</h1><br />
        <h2>Full Stack Developer</h2>
        <h4>B.E.Mechanical</h4>
      </div>
      <div className='resume_middle'>
        <div className='resume_middle_left'>
        <div className='resume_middle_left1'>
        <h4><TbSectionFilled style={{marginRight:'5px', color:'#e67e22'}}/>Contact Details:</h4>
             <p><span className="label">Email :</span> <span className="value">dp00718@gmail.com</span></p>
             <p><span className="label">Mobile No :</span> <span className="value">9726731599, 7016034249</span></p>
             <p><span className="label">Address :</span> <span className="value">98/B, Tuljanagar No - 02, B/H Makarpura St Depot, Vadodara - 390010</span></p>
             <p><span className="label">Linkedin :</span> <span className="value">http://linkedin.com/in/divyesh-patel-45a4384b</span></p>
        </div>

        <div className='resume_middle_left2'>
        <h4><TbSectionFilled style={{marginRight:'5px', color:'#e67e22'}}/>Certifications :</h4>
  <div className="skills">
    <p>Full-Stack Web Development with React Certification</p>
    <p>Front End Web Development Certificate</p>
    <p>Back End Web Development Certificate</p>
  </div>
</div>


            <div className='resume_middle_left3'>
            <h4><TbSectionFilled style={{marginRight:'5px', color:'#e67e22'}}/>Career Objectives :</h4>
                 <p>Learn a new programming language or framework, or to gain expertise in cloud computing.</p> <br />
                  <p>Have interest in engaging with the open source community.</p><br />
                  <p>My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.</p>
            </div>
            <div className='resume_middle_left4'>
            <h4><TbSectionFilled style={{marginRight:'5px', color:'#e67e22'}}/>Declaration :</h4>
                <p>
                    Here I declared that the information related to me and my qualification is correct to the 
                best of my knowledge and belief.</p>
            </div>
        </div>
        <div className='resume_middle_right'>
            <div className='resume_middle_right1'>
               <h4><TbSectionFilled style={{marginRight:'5px', color:'#e67e22'}}/>Work Details :</h4>
             <div className="work-details">
                <div className="work-item">
                    <span className="label">2012 - 2013 :</span>
                    <span className="value">Working as an apprentice in Jyoti Ltd as a junior engineer.</span>
                </div>
                <div className="work-item">
                    <span className="label">2014 - Till Date :</span>
                    <span className="value">
                          Working as an Assistant Executive Engineer in Pakona Engineers I Pvt Ltd. Handling manpower, Assembly department, trial and testing. Also assured final inspection of machine packing and SAP work.
                    </span>
                </div>
             </div>
            </div>

            <div className='resume_middle_right2'>
                  <h4><TbSectionFilled style={{marginRight:'5px', color:'#e67e22'}}/>Key Qualifications & Responsibilities :</h4>
              <div className="developer-details">
                 <div className="detail-item">
                     {/* <span className="label"><h5>V-Ex Tech Solutions:</h5></span> */}
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">Developed full-stack web site which processed, analyzed, and rendered data visually.</span><br />
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">Liaised with back end developers, front end developers, quality assurance testers, and CTO as needed.</span><br />
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">Managed time-sensitive updates, including content changes and database upgrades.</span><br />
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">Planned, wrote, and debugged web sites with complete accuracy.</span><br />
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">Deployed web design on multiple cloud-based production environments and maintained staging environments for testing, leading to smoother releases.</span>

                 </div>
                 <div className="detail-item">
                     <span className="label"><h5>Skills & Competencies :</h5></span>
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">HTML/CSS.</span><br />
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">JAVASCRIPT</span><br />
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">REACTJS</span><br />
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">NODE.js</span><br />
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">BOOTSTRAP</span><br />
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">Debugging and Troubleshooting</span>
                 </div>
                 <div className="detail-item">
                     <span className="label"><h5>Back End Developer:</h5></span>
                     <MdNotStarted style={{color:'#2c3e50'}} className='value_icon'/><span className="value">Express.js using MongoDB database with React.js.</span>
                 </div>
             </div>
           </div>

            <div className='resume_middle_right3'>
                <h4><TbSectionFilled style={{marginRight:'5px', color:'#e67e22'}}/>Full Stack Developer E-commerce Project :</h4>
                <p> E-commerce site developed using front end and back end with features of passing data
                from frontend to backend and from backend to frontend by get, post and fetch functions.</p>
            </div>
            <div className='resume_middle_right4'>
                <h4><TbSectionFilled style={{marginRight:'5px', color:'#e67e22'}}/>Education :</h4><br />
                <p>Bachelor of Mechanical : CGPA 7.1</p>
                <p>Year : 2008 - 2012</p> 
                <p>Babaria Institute of Technology, Varnama, Vadodara</p>
            </div>
            <div className='resume_middle_right5'>
            <h4><TbSectionFilled style={{marginRight:'5px', color:'#e67e22'}}/>Declaration :</h4>
                <p>
                    Here I declared that the information related to me and my qualification is correct to the 
                best of my knowledge and belief.</p>
            </div>
            
        </div>
      </div>
      <div className='resume_footer'>
        <h4>Signature :</h4>
        <p>Divyesh G Patel</p>
      </div>
    </div>
  )
}

export default Resume
