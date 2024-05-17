import React from "react";
import PageHeader from "../components/PageHeader";

function HowPage() {
  const { PUBLIC_URL } = process.env;
  const stepsData = [
    {
      title:
        "Become a member of the most prestigious panel community",
      desc: `Embark on a journey of belonging and influence by
      joining our esteemed panel community, where individuals
      from diverse backgrounds converge to form a collective
      voice that resonates across industries. As a member, you
      gain access to exclusive opportunities, unparalleled
      rewards, and a supportive network of fellow
      participants, enriching your journey and amplifying your
      impact.`,
      img: `${PUBLIC_URL}/assets/img/steps/steps-01.png`,
    },
    {
      title: "Complete your profile with the correct information",
      desc: `Maximize your potential for meaningful engagement and reward attainment by meticulously curating your profile with accurate and up-to-date information that reflects your preferences, demographics, and interests. This ensures that you receive surveys tailored precisely to your profile, optimizing your experience and enhancing the relevance of your contributions.`,
      img: `${PUBLIC_URL}/assets/img/steps/steps-02.png`,
    },
    {
      title:
        "Take part in online surveys and share your honest opinion",
      desc: `Immerse yourself in a world of discovery and expression as you embark on  a journey of survey participation, where each questionnaire serves as a  canvas for your thoughts, insights, and perspectives. By actively  engaging with surveys and sharing your unfiltered opinions, you become  an integral part of the feedback loop, driving innovation, and shaping  the future of products and services.`,
      img: `${PUBLIC_URL}/assets/img/steps/steps-03.png`,
    },
    {
      title: "Complete surveys and earn rewards and gift cards",
      desc: `Embark on a journey of belonging and influence by
      joining our esteemed panel community, where individuals
      from diverse backgrounds converge to form a collective
      voice that resonates across industries. As a member, you
      gain access to exclusive opportunities, unparalleled
      rewards, and a supportive network of fellow
      participants, enriching your journey and amplifying your
      impact.`,
      img: `${PUBLIC_URL}/assets/img/steps/steps-04.png`,
    },
  ];

  return (
    <>
      <PageHeader
        heading='How It Works'
        desc="
If you're eager to dive into the world of survey participation and  unlock a plethora of opportunities to voice your opinions and shape the  landscape of products and services, allow us to guide you through the  process, providing comprehensive insights and step-by-step instructions  to ensure a seamless and rewarding experience from the very outset.
"
      />
      <div className='py-5'>
        {stepsData?.map((step, index) => (
          <div key={index} className='container py-3'>
            <div className={`row ${index % 2 > 0 ? "rtl" : ""}`}>
              <div className='col-md-8'>
                <p className='main ltr'>
                  <strong>{step.title}</strong>
                  <br />
                  {step.desc}
                </p>
              </div>
              <div
                className='col col-md-4 d-flex justify-content-center '
                style={{ width: "106px" }}>
                <img src={step.img} className='img-fluid' alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HowPage;
