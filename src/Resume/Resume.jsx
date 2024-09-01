import React from 'react'
import './Resume.scss'

const Resume = () => {
  return (
    <div className='resume_main'>
      <div className='resume_header'>
        <h1>Divyesh G Patel</h1>
        <h3>Full Stack Developer</h3>
        <h5>B.E.Mechanical</h5>
      </div>
      <div className='resume_middle'>
        <div className='resume_middle_left'>
        <div className='resume_middle_left1'>
             <h4>Contact :</h4>
             <p><span className="label">Email :</span> <span className="value">dp00718@gmail.com</span></p>
             <p><span className="label">Mobile No :</span> <span className="value">9726731599, 7016034249</span></p>
             <p><span className="label">Address :</span> <span className="value">98/B, Tuljanagar No - 02, B/H Makarpura St Depot, Vadodara - 390010</span></p>
             <p><span className="label">Linkedin :</span> <span className="value">http://linkedin.com/in/divyesh-patel-45a4384b</span></p>
        </div>

        <div className='resume_middle_left2'>
  <h4>Skills :</h4>
  <div className="skills">
    <div className="skill-item">
      <span className="label">Online Communication:</span>
      <div className="progress-bar" data-percentage="100">
        <div className="progress"></div>
      </div>
    </div>
    <div className="skill-item">
      <span className="label">Computer Proficiency:</span>
      <div className="progress-bar" data-percentage="100">
        <div className="progress"></div>
      </div>
    </div>
    <div className="skill-item">
      <span className="label">English - Hindi - Gujarati:</span>
      <div className="progress-bar" data-percentage="100">
        <div className="progress"></div>
      </div>
    </div>
  </div>
</div>


            <div className='resume_middle_left3'>
                 <h4>Career Objectives :</h4>
                 <p>To pursue a highly challenging career in the field of IT Department, where I can apply my knowledge and acquire new skills. <br />I fore see myself to be part of top-notch team of professional with Sincerity, Creativity and Dedication.</p>
            </div>
            <div className='resume_middle_left4'>
                <h4>Declaration :</h4>
                <p>
                    Here I declared that the information related to me and my qualification is correct to the 
                best of my knowledge and belief.</p>
            </div>
        </div>
        <div className='resume_middle_right'>
            <div className='resume_middle_right1'>
               <h4>Work Details :</h4>
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
                   <h4>Full Stack Developer :</h4>
              <div className="developer-details">
                 <div className="detail-item">
                     <span className="label">HTML, CSS, and Adv. CSS:</span>
                     <span className="value">Detail designing of websites by communication done with User Interface.</span>
                 </div>
                 <div className="detail-item">
                     <span className="label">Front End Developer:</span>
                     <span className="value">Bootstrap, JavaScript, and React.js.</span>
                 </div>
                 <div className="detail-item">
                     <span className="label">Back End Developer:</span>
                     <span className="value">Express.js using MongoDB database with React.js.</span>
                 </div>
             </div>
           </div>

            <div className='resume_middle_right3'>
                <h4>Full Stack Developer E-commerce Project :</h4>
                <p> E-commerce site developed using front end and back end with features of passing data
                from frontend to backend and from backend to frontend by get, post and fetch functions.</p>
            </div>
            <div className='resume_middle_right4'>
                <h4>Education :</h4>
                <table>
                    <tr>
                        <th>Class</th>
                        <th>Board</th>
                        <th>Percentage</th>
                        <th>Year</th>
                    </tr>
                    <tr>
                        <td>10th SSC</td>
                        <td>G.S.E.B</td>
                        <td>83.14 %</td>
                        <td>March - 2006</td>
                    </tr>
                    <tr>
                        <td>12th Science</td>
                        <td>G.H.S.E.B</td>
                        <td>75.06</td>
                        <td>March - 2008</td>
                    </tr>
                    <tr>
                        <td>B.E.Mechanical</td>
                        <td>G.T.U</td>
                        <td>7.1 CGPA</td>
                        <td>May - 2012</td>
                    </tr>
                </table>
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
