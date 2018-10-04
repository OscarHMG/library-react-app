import React, { Component } from 'react';
import '../../resources/css/HomePage.css';

import bookImage from '../../resources/images/books.jpg';
import groupBooks from '../../resources/images/groupBooks.png';
import student from '../../resources/images/student.png';
import bookSelf from '../../resources/images/bookshelf.png';

import {Link} from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
			<div className="row mt-4 ">
				<div className="row">
					<div className="col-md-5 p-5">
						<img src={bookImage} alt="Book image" style={{width: "inherit"}}/>
					</div>
					<div className="col-md-7 align-self-center">
						<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut suspendisse 
							ornare purus justo turpis habitasse varius blandit, aenean mollis neque 
							himenaeos taciti pulvinar hac non nostra eros pellentesque interdum vehicula 
							malesuada lacus. Eleifend enim potenti urna nascetur aliquet aptent hendrerit magna</p>
						<div className="text-center mt-5 mb-5">
							<button type="button" className="btn btn-outline-secondary btn-lg" >JOIN FOR FREE</button>
							<strong><span style={{marginLeft: 10}}>Do you have an account? <Link to="/loginPage"> Login In</Link></span></strong>
						</div>

					
					</div>
				</div>
				<div className="row bg-white p-5 text-center">
					
					<div className="col-md-4 ">
						<div className="mb-5 centerImg" style={{width: 150}}>
							<img src={groupBooks} style={{width: "inherit"}}/>
						</div>
						<p class="text-justify p-3">Lorem ipsum dolor sit amet consectetur adipiscing elit ut suspendisse 
							ornare purus justo turpis habitasse varius blandit, aenean mollis neque 
							himenaeos taciti pulvinar hac non nostra eros pellentesque interdum vehicula 
							malesuada lacus. Eleifend enim potenti urna nascetur aliquet aptent hendrerit magna</p>
					</div>
					<div className="col-md-4">
						<div className="mb-5 centerImg" style={{width: 150}}>
							<img src={student} style={{width: "inherit"}}/>
						</div>

						<p class="text-justify p-3">Lorem ipsum dolor sit amet consectetur adipiscing elit ut suspendisse 
							ornare purus justo turpis habitasse varius blandit, aenean mollis neque 
							himenaeos taciti pulvinar hac non nostra eros pellentesque interdum vehicula 
							malesuada lacus. Eleifend enim potenti urna nascetur aliquet aptent hendrerit magna</p>
					
					</div>
					<div className="col-md-4 ">
						<div className="mb-5 centerImg" style={{width: 150}}>
							<img src={bookSelf} style={{width: "inherit"}}/>
						</div>
						<p class="text-justify p-3">Lorem ipsum dolor sit amet consectetur adipiscing elit ut suspendisse 
								ornare purus justo turpis habitasse varius blandit, aenean mollis neque 
								himenaeos taciti pulvinar hac non nostra eros pellentesque interdum vehicula 
								malesuada lacus. Eleifend enim potenti urna nascetur aliquet aptent hendrerit magna</p>
					
					</div>
				</div>
		</div>
    )
  }
}
