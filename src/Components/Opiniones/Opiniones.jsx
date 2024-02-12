
function Review() {
  return (
    <section className="review" id="review">
      <h1 className="heading">Opiniones <span>Lo que Dicen los Clientes</span></h1>

      <div className="swiper review-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
           
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/iltlvdwpu7rfjsxhs78c" alt="" />
            <div className="stars">
              
            </div>
            <p>sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur illum.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
            
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/ifdsxghyyadcpggqy1tm" alt="" />
            
            <p>sit amet consectetur adipisicing elit. Rerum optio quasi ut, illo ipsam assumenda.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
           
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/fnstz7ftrcldpbfeu57r" alt="" />
           
            <p>sit amet consectetur adipisicing elit. Eius asperiores aliquam hic quis! Eligendi, aliquam.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
            
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/yoc39uejzlse2uzfppxd" alt="" />
            <p>sit amet consectetur adipisicing elit. Eligendi modi perspiciatis distinctio velit aliquid a.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Review;
