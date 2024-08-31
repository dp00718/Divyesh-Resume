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
                <p>Email : dp00718@gmail.com</p>
                <p>Mobile No : 9726731599, 7016034249</p>
                <p>Address : 98/B, Tuljanagar No - 02, B/H Makarpura St Depot, Vadodara - 390010</p>
                <p>Linkedin : http://linkedin.com/in/divyesh-patel-45a4384b</p>
            </div>
            <div className='resume_middle_left2'>
                <h4>Skills :</h4>
                <p>Online Communication - Proficiency</p>
                <p>Computer proficiency - Coding + Microsoft</p>
                <p>Languages Known - Gujarati - Hindi - English</p>
            </div>
            <div className='resume_middle_left3'>
                 <h4>Career Objectives :</h4>
                 <p>To pursue a highly challenging career in the field of IT Department, where I can apply my knowledge and acquire new skills. I fore see myself to be part of top-notch team of professional with Sincerity, Creativity and Dedication.</p>
            </div>
        </div>
        <div className='resume_middle_right'>
            <div className='resume_middle_right1'>
                <h4>Work Details :</h4>
                    <p>2012 - 2013 : Working as an apprentice in Jyoti Ltd as a junior engineer.</p><br />
                    <p>2014 - Till Date : Working as an Assistant Executive Engineer in Pakona Engineers I Pvt Ltd. 
                       Handling man power, Assembly department, trial and testing.
                       Also assured fin al inspection of machine packing and SAP work.</p>  
            </div>
            <div className='resume_middle_right2'>
                <h4>Full Stack Developer :</h4>
                <p>Knowledge of HTML, CSS and CSS Advance with detail designing of web site by  
                   communication done with User Interface.</p>
                <p>
                Front end developer : Bootstrap, Java Script and Reactjs.
                </p>
                <p>
                Back end developer : Expressjs using MongoDb database with reactjs.
                </p>
            </div>
            <div className='resume_middle_right3'>
                <h4>Full Stack Developer E-commerce Project :</h4>
                <p> E-commerce site developed using front end and back end with features of passing data
                from frontend to backend and from backend to frontend by get, post and fetch functions.</p>
            </div>
            <div className='resume_middle_right4'>
                <h5>Education :</h5>
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
            <div className='resume_middle_right5'>
                <h5>Declaration :</h5>
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
