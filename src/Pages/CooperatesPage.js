import React from "react";
import PageHeader from "../components/PageHeader";

function CooperatesPage() {
  const { PUBLIC_URL } = process.env;
  const cooperatesData = [
    {
      img: `${PUBLIC_URL}/assets/img/cooperates/cooperates_01.png`,
      title: "Huda Beauty",
      desc: "Earn up to 30% cash back",
    },
    {
      img: `${PUBLIC_URL}/assets/img/cooperates/cooperates_02.png`,
      title: "Shiseido",
      desc: "Earn up to 15% cash back",
    },
    {
      img: `${PUBLIC_URL}/assets/img/cooperates/cooperates_03.png`,
      title: "Zain",
      desc: "Earn up to 22% cash back",
    },
    {
      img: `${PUBLIC_URL}/assets/img/cooperates/cooperates_04.png`,
      title: "Emaar",
      desc: "Earn up to 6% cash back",
    },
    {
      img: `${PUBLIC_URL}/assets/img/cooperates/cooperates_05.png`,
      title: "Ooredoo",
      desc: "Earn up to 10% cash back",
    },
    {
      img: `${PUBLIC_URL}/assets/img/cooperates/cooperates_06.png`,
      title: "Stc",
      desc: "Earn up to 20% cash back",
    },
    {
      img: `${PUBLIC_URL}/assets/img/cooperates/cooperates_07.png`,
      title: "Etisalat",
      desc: "Earn up to 10% cash back",
    },
    {
      img: `${PUBLIC_URL}/assets/img/cooperates/cooperates_08.png`,
      title: "Anastasia Beverly Hills",
      desc: "Earn up to 13% cash back",
    },
    {
      img: `${PUBLIC_URL}/assets/img/cooperates/cooperates_09.png`,
      title: "Amazon",
      desc: "Earn up to 8% cash back",
    },
  ];
  return (
    <>
      <PageHeader
        heading='Cooperates'
        desc='see how we collaborate with clients, organizations, and participants to  drive impactful survey research. Discover success stories, community  engagement, and innovative partnerships shaping the future of  data-driven insights.'
      />
      <div className='container-lg'>
        <div className='row my-5 py-5'>
          {cooperatesData?.map((item, index) => (
            <div key={index} className='col-md-4 col-sm-6 d-flex'>
              <div className='card mb-5 w-100 '>
                <div
                  className='d-flex card-body  align-items-center justify-content-center pt-5'
                  style={{ minHeight: "150px" }}>
                  <img className='img-fluid ' src={item.img} alt='' />
                </div>
                <div className='card-footer bg-transparent border-0  py-3'>
                  <h6>{item.title}</h6>
                  <div
                    className='px-2 py-1 rounded-2 '
                    style={{
                      backgroundColor: "var(--color-gradient-main)",
                    }}>
                    <p className='m-0 card-title '>{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CooperatesPage;
