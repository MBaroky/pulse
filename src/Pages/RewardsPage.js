import React from "react";
import PageHeader from "../components/PageHeader";

function HowPage() {
  const { PUBLIC_URL } = process.env;
  const rewardsData = [
    {
      title: "Wide Choice",
      desc: `Explore a vast and varied selection comprising more than 200 esteemed  retail brands and philanthropic organizations, each carefully curated to  offer a spectrum of choices tailored to your preferences and passions.  Take the opportunity to carefully select those that resonate most deeply  with you, igniting your enthusiasm and commitment.`,
    },
    {
      title: "Lasting Value",
      desc: `Indulge in the luxurious freedom of time with our exceptional offer! Your Reward Links are generously extended to remain valid for a full  twelve months, affording you abundant flexibility and convenience to  meticulously plan and seamlessly redeem your rewards at your leisure,  ensuring every moment is savored and every opportunity fully embraced.`,
    },
    {
      title: "Multiple Redemptions",
      desc: `Embrace the liberating notion of choice without constraints! There's  absolutely no requirement to confine yourself to a solitary purchase;  instead, revel in the versatility afforded by our Reward program, which  allows you to effortlessly allocate your Reward value across a diverse  array of e-gift selections and charitable contributions. This  unparalleled flexibility empowers you to meticulously tailor your  rewards to align perfectly with your individual preferences and  priorities, ensuring each allocation reflects your unique tastes and  passions.`,
    },
    {
      title: "No Leftovers, All Satisfaction",
      desc: `Explore a vast and varied selection comprising more than 200 esteemed  retail brands and philanthropic organizations, each carefully curated to  offer a spectrum of choices tailored to your preferences and passions.  Take the opportunity to carefully select those that resonate most deeply  with you, igniting your enthusiasm and commitment.`,
    },
  ];

  return (
    <>
      <PageHeader
        heading='Rewards'
        desc="
        Here's our reward  program, elucidating the myriad ways it is tailored to enhance your  experience and provide you with tangible benefits as a valued  participant in our community.
        "
      />
      <div className='py-5 container '>
        <div className='row flex-md-row-reverse '>
          <div className='col-md-4 d-flex align-items-center justify-content-center '>
            <img
              className='img-fluid '
              src={`${PUBLIC_URL}/assets/img/reward.png`}
              alt=''
            />
          </div>
          <div className='col-md-8'>
            {rewardsData?.map((step, index) => (
              <div key={index} className={`row my-3`}>
                <div className='col'>
                  <p className='main ltr'>
                    <strong>{step.title}</strong>
                    <br />
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HowPage;
