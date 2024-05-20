import PageHeader from "../components/PageHeader";
import TestimonialItem from "../components/TestimonialItem";

export default function TestimonialsPage({ data }) {
  return (
    <>
      <PageHeader
        heading='Testimonials'
        desc="
Take a moment to peruse through our extensive collection of  Testimonials, where you can delve into the authentic experiences and  glowing feedback shared by our esteemed users. Discover firsthand why  they've developed such a strong affinity for Pulse and how our platform  has positively impacted their lives or businesses, reaffirming our  commitment to excellence and customer satisfaction.
"
      />
      <div className='clearfix mb-5 pb-3'></div>
      <div className='container-fluid'>
        <div className='row' id='testmonials-wrapper'>
          {data
            ? data.map(item => (
                <TestimonialItem key={item.id} data={item} />
              ))
            : ""}
        </div>
      </div>
    </>
  );
}
