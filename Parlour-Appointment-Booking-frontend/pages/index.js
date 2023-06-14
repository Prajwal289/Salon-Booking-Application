import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
    return (
        <div>
			<div className="tp-banner-container">
				<div className="tp-banner-slider">
					<ul>
						<li data-masterspeed="700">
							<img src="/images/img_men/slider-1.jpg"  />
						</li>
					</ul>
				</div>
			</div>
            <section className="page-section">
			<div className="container">
				<div className="row">


					<div className="col-md-12 col-lg-6">
						<a href="images/promo-1@2x.jpg" className="lightbox-single mfp-image">
							<img className="img-border" src="images/img_men/slider.png" data-at2x="images/promo-1@2x.jpg"   />
						</a>
					</div>
					<div className="col-md-12 col-lg-6 mt-lg-50">
						<h3 className="banner-title font-alt">Welcome To Hair Crush</h3>
						<div className="section-text mt-10">
							<span className="circle-letter-1 font-alt">S</span>
							<p>uperior service, personalized attention
							We're proud to offer the highest quality, most unique merchandise on the market today. 
							From our family to yours, we put lots of love and careful attention in each item. We hope you 
							enjoy our work as much as we enjoy bringing it to you.
							</p>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<ul className="list-style-2">
									<li>Special Offer on Gift Cards</li>
									<li>Go to Great Lengths for Beauty</li>
									<li>Non-Surgical Treatments, No Recovery Time</li>
								</ul>
							</div>
							<div className="col-sm-6">
								<ul className="list-style-2">
									<li>Get a Professionally Contoured Makeup </li>
									<li>Customizable Facial Treatments</li>
									<li>Beauty Salon & Spa</li>
								</ul>
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>

        

        <section className="small-section alt-color">
			<div className="container">

				<div className="row">
					<div className="col-md-3 mb-md-30">
						<div className="features-center">
							<div className="features-icon">
                            <i className="fab fa-canadian-maple-leaf mt-20"></i>                            							</div>
							<h3 className="features-title font-alt">Body Care</h3>
							<p>Recover from your join pain by applying body treatment</p>
						</div>
					</div>
					<div className="col-md-3 mb-md-30">
						<div className="features-center">
							<div className="features-icon">
                            <i className="fas fa-feather-alt mt-20"></i>
                            							</div>
							<h3 className="features-title font-alt">Hands & Feet</h3>
							<p>Menicure & Pedicure is useful to enhance your beauty</p>
						</div>
					</div>
					<div className="col-md-3 mb-md-30">
						<div className="features-center">
							<div className="features-icon">
                            <i className="fas fa-spa mt-20"></i>
                            							</div>
							<h3 className="features-title font-alt">Spa Massage</h3>
							<p>It's a Hygienic Spa in Pune with all Massage facilities</p>
						</div>
					</div>
					<div className="col-md-3">
						<div className="features-center">
							<div className="features-icon">
                            <i className="fas fa-grin mt-20"></i>
                            							</div>
							<h3 className="features-title font-alt">Face Care</h3>
							<p>Different types of facial are available which makes your skin healthy</p>
						</div>
					</div>
				</div>
			</div>
		</section>

        <section className="page-section">
        <div className="">
			<div className="container align-center">
				<h3 className="section-title bottom-line font-alt">Services For You<span>The Greatest Pleasure</span></h3>
				<div className="col-md-10 col-md-offset-1 mb-30">
					<p>Your style is a reflection of your personality and we know how to bring out the real you. Let our professionals style your body to complement your facial features, then add a personal touch.</p>
				</div>
			</div>

			<div className="slider-4 dots-alt ">
				<div className="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-2@2x.jpg" className="lightbox mfp-image">
						<div className="portfolio-media">
							<div className="portfolio-img">
								<img src="/images/img_men/haircut.jpg" data-at2x="images/portfolio/img-2@2x.jpg"  />
							</div>
							<div className="info">
								<h3>Haircut Styles</h3>
								<div>
									<div className="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png"  />
									</div>
								</div>
								<div>
									<p>Providing Different Hair Styles</p>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-2@2x.jpg" className="lightbox mfp-image">
						<div className="portfolio-media">
							<div className="portfolio-img">
								<img src="/images/img_men/Beard Trimming.jpg" data-at2x="images/portfolio/img-2@2x.jpg"  />
							</div>
							<div className="info">
								<h3>Beard Styling</h3>
								<div>
									<div className="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png"  />
									</div>
								</div>
								<div>
									<p>Providing neat and well-groomed beard.</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div className="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-4@2x.jpg" className="lightbox mfp-image">
						<div className="portfolio-media">
							<div className="portfolio-img">
								<img src="/images/img_men/Body_massage.jpg" data-at2x="images/portfolio/img-4@2x.jpg"  />
							</div>
							<div className="info">
								<h3>Body Massage</h3>
								<div>
									<div className="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png"  />
									</div>
								</div>
								<div>
									<p>Relaxing touch, soothes tense muscles.</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div className="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-7@2x.jpg" className="lightbox mfp-image">
						<div className="portfolio-media">
							<div className="portfolio-img">
								<img src="/images/img_men/Head_massage.jpg" data-at2x="images/portfolio/img-7@2x.jpg"  />
							</div>
							<div className="info">
								<h3>Head Massage</h3>
								<div>
									<div className="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png"  />
									</div>
								</div>
								<div>
									<p>Relaxing touch, tension relief, scalp stimulation.</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div className="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/card4.jpg" className="lightbox mfp-image">
						<div className="portfolio-media">
							<div className="portfolio-img">
								<img src="/images/img_men/staright.jpg" data-at2x="images/portfolio/img-8@2x.jpg"  />
							</div>
							<div className="info">
								<h3>Hair Starighting</h3>
								<div>
									<div className="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png"  />
									</div>
								</div>
								<div>
									<p>To look your hairs sleek, smooth, straight hair with precision styling.</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div className="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-9@2x.jpg" className="lightbox mfp-image">
						<div className="portfolio-media">
							<div className="portfolio-img">
								<img src="/images/img_men/hair_color.jpg" data-at2x="images/portfolio/img-9@2x.jpg"  />
							</div>
							<div className="info">
								<h3>Hi - Lites</h3>
								<div>
									<div className="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png"  />
									</div>
								</div>
								<div>
									<p>Alter natural shade, enhance personal style.</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div className="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-10@2x.jpg" className="lightbox mfp-image">
						<div className="portfolio-media">
							<div className="portfolio-img">
								<img src="/images/img_men/hair_spa.jpg" data-at2x="images/portfolio/img-10@2x.jpg"  />
							</div>
							<div className="info">
								<h3>Hair Spa</h3>
								<div>
									<div className="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png"  />
									</div>
								</div>
								<div>
									<p>Rejuvenating treatment for hair and scalp, promoting relaxation and revitalization.</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div className="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="images/portfolio/img-5@2x.jpg" className="lightbox mfp-image">
						<div className="portfolio-media">
							<div className="portfolio-img">
								<img src="/images/img_men/facial.jpg" data-at2x="images/portfolio/img-5@2x.jpg"  />
							</div>
							<div className="info">
								<h3>Groom Facial</h3>
								<div>
									<div className="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png"  />
									</div>
								</div>
								<div>
									<p>Radiant complexion, luminous skin, glowing face, youthful appearance.</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div className="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="images/portfolio/img-6@2x.jpg" className="lightbox mfp-image">
						<div className="portfolio-media">
							<div className="portfolio-img">
								<img src="/images/img_men/scalp.jpg" data-at2x="images/portfolio/img-6@2x.jpg"  />
							</div>
							<div className="info">
								<h3>Scalp Treatments</h3>
								<div>
									<div className="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png"  />
									</div>
								</div>
								<div>
									<p>Soothing therapies that nourish and rejuvenate the scalp and hair.</p>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
            </div>
		</section>
        <div className="sep-lane alt-3"><span></span></div>

           
        </div>
    );
}
