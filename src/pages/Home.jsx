import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* landing */}
      <div
        style={{
          height: '100vh',
          backgroundImage: 'url("/Teamwork Discussion.png")',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          style={{ backgroundColor: 'rgba(0,0,0,.4)' }}
          className="w-50 p-5 rounded text-light text-center"
        >
          <h1>
            Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.
          </h1>

          <Link
            to="/resume"
            style={{ backgroundColor: '#755846' }}
            className="btn text-light mt-3"
          >
            Make your Resume with AI
          </Link>
        </div>
      </div>

      
      {/* about */}

    <div className=' container my-5'>

      <h1 className='text-center mb-5'>What's AI rBulider</h1>

      <div className='row'>

        <div className='col-lg-1'></div>

        <div className='col-lg-5'>

          <p style={{textAlign:'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>



          <p style={{textAlign:'justify'}}>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.

</p>



           <p style={{textAlign:'justify'}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>



            <p style={{textAlign:'justify'}}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>

        </div>

        <div className='col-lg-1'></div>

        <div className='col-lg-5'>

          <img className width={'100%'} height={'600px'} src="/about.png" alt="no img"/>

        </div>

      </div>

    </div>

      {/* banner */}
      <div
        style={{
          height: '80vh',
          backgroundImage: 'url("/Team.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* testimony */}

<div className="container my-5">
  <div className="row align-items-center">

    {/* Left Side */}
    <div className="col-lg-6">
      <h2 className="fw-bold mb-4">Trusted by professionals worldwide.</h2>

      <p style={{ textAlign: "justify" }}>
        At AI Resume Builder, we don't just help you create resumes—we help
        you land the job. Whether you're a seasoned professional or just
        starting out, our tools are designed to get results.
      </p>

      <p style={{ textAlign: "justify" }}>
        Our AI-powered resume builder helps you create ATS-friendly resumes
        that stand out and improve your chances of getting shortlisted.
      </p>

      <p style={{ textAlign: "justify" }}>
        Join thousands of job seekers who have fast-tracked their careers with
        a resume that truly stands out.
      </p>
    </div>

    {/* Right Side */}
    <div className="col-lg-6">
      <div className="row g-3">

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

        <div className="col-3">
          <img className="img-fluid rounded" src="https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg" alt="user" />
        </div>

      </div>
    </div>

  </div>
</div>

    </>

  )

}



export default Home
