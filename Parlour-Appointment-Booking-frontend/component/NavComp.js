import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
function NavComp({isLoggedIn, username, role}) {
	const router = useRouter();
	const handleLogout = (e) => {
		e.preventDefault();
		cookieCutter.set("jwt", "", {
			expires: new Date(new Date().toLocaleDateString()),
			path: "/",
		});
		cookieCutter.set("name", "", {
			expires: new Date(new Date().toLocaleDateString()),
			path: "/",
		});
		cookieCutter.set("role", "", {
			expires: new Date(new Date().toLocaleDateString()),
			path: "/",
		});
		router.push("/");
	};
	return (

		<div className="" id="top">

			<header className='header  top-fixed'>
				<div className="container">
					
					<nav className=" navbar navbar-expand-lg  ">
				
					{/* <div className="navbar-header">
						<div className='navbar-toggle collapsed '>

								<i className="fa fa-bars"></i>
						</div>
							</div> */}

<div className="navbar-header">
<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">

<i className="fa fa-bars"></i>

      </button>
    
    </div>
						<div className="full-wrapper  align-center">

							<div className="inner-nav collapse navbar-collapse desktop-nav" >
							{ role =="admin" ? 
							<ul className="clearlist nav navbar-nav" id="bs-example-navbar-collapse-1">

									
									<li className="nav-logo-wrap">
										<a href="/" className="logo">
											<img src="images/img_men/logo.png" data-at2x="images/logo@2x.png"  width="130%" />
										</a>
									</li>
									
							<li>
								<Link href="/admin">
									<a className="nav-submenu active nav">Home</a></Link>
							</li>
							{/* <li className="sep">
								<a>/</a>
							</li> */}
							
							<li>
								<Link href="/admin/acceptAppointment "><a className="nav-submenu nav">Appointment</a></Link>

							</li>
							{/* <li>
								<Link href="/admin/appointment_report">
									<a className="nav-submenu">Reports</a></Link>

							</li> */}
							{/* <li className="sep">
								<a>/</a>
							</li> */}
							<li>
								<Link href="/admin/add_beautition">
									<a className="nav-submenu nav">Beautician</a></Link>
							</li>

							{/* <li className="nav-logo-wrap">
								<a href="index.html" className="logo">
									<img src="images/logo.png" data-at2x="images/logo@2x.png" width="70%"  />
								</a>
							</li> */}


							<li>
								<Link href="/admin/add_offers"><a className="nav-submenu nav">Offers</a></Link>

							</li>

							<li>
								<Link href="/admin/add_services"><a className="nav-submenu nav">Services</a></Link>

							</li>

							{/* <li className="sep">
								<a>/</a>
							</li> */}


							{!isLoggedIn &&
								<>
									<li>
										<Link href="/login">
											<a className="nav-submenu nav">Login</a></Link>
									</li>
									{/* <li className="sep">
										<a>/</a>
									</li> */}
									<li>
										<Link href="/registration">
											<a className="nav-submenu nav">Registration</a></Link>
									</li> </>
							}{isLoggedIn &&
								<> 
								{/* <li>
									<Link href="/profile">
									<a className="nav-submenu">{username}</a></Link> </li> */}
									{/* <li className="sep">
										<a>/</a>
									</li> */}
									<li><a onClick={handleLogout} className="nav-submenu nav">logout</a></li>
								</>
							}

						</ul>
							:  
								<ul className="clearlist nav navbar-nav" id="bs-example-navbar-collapse-1">

									<li className="nav-logo-wrap">
										<a href="/" className="logo">
											<img src="images/img_men/logo.png" data-at2x="images/logo@2x.png"  width="130%" />
										</a>
									</li>
									<li>
										<Link href="/">
											<a className="nav-submenu active nav">Home</a></Link>
									</li>
									{/* <li className="sep">
										<a>/</a>
									</li> */}
									<li>
										<Link href="/appointment">
											<a className="nav-submenu nav">Appointment</a></Link>

									</li>
									{/* <li className="sep">
										<a>/</a>
									</li> */}
									<li>
										<Link href="/about">
											<a className="nav-submenu nav">About Us</a></Link>
									</li>

									


									<li>
										<Link href="/offer"><a className="nav-submenu nav">Offers</a></Link>

									</li>
									{/* <li className="sep">
										<a>/</a>
									</li> */}


									{!isLoggedIn &&
										<>
											<li>
												<Link href="/login">
													<a className="nav-submenu nav">Login</a></Link>
											</li>
											{/* <li className="sep">
												<a>/</a>
											</li> */}
											<li>
												<Link href="/registration">
													<a className="nav-submenu nav">Registration</a></Link>
											</li> </>
									}{isLoggedIn &&
										<> <li>
											<Link href="/profile">
											<a className="nav-submenu">{username}</a></Link> </li>
											{/* <li className="sep">
												<a>/</a>
											</li> */}
											<li><a onClick={handleLogout} className="nav-submenu nav">logout</a></li>
										</>
									}

								</ul>
							}
								{/* <div className="menu-rect">
									<img src="/images/rectangle-1.png" data-at2x="images/lines/rectangle-1@2x.png"  />
								</div> */}
							</div>
						</div>
					</nav>
				</div>
			</header>
			
		</div>
	)
}

export default NavComp; 