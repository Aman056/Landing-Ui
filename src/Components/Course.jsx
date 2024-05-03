import React from 'react'

import holdBooks from '../img/hold books.jpg'
import holdBook from '../img/hold book.jpg'
import holdBook2 from '../img/hold books2.jpg'
export default function Course() {
  return (
    <div className="course-section">
    <section className="courses">
      <div className="gallery">
        <div className="card-content">
          <img src={holdBooks} />
          <h5>Financials Security With Thinking & Principles</h5>
          <ul>
            <li><span class="material-symbols-outlined">school</span></li>
            <li><p>78 Students</p></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
          </ul>
        </div>

        <div className="card-content">
          <img src={holdBook} />
          <h5>Learning to Write As A Professional Author</h5>
          <ul>
            <li><span class="material-symbols-outlined">school</span></li>
            <li><p>78 Students</p></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
          </ul>
        </div>

        <div className="card-content">
          <img src={holdBook2} />
          <h5>Master jQuery in a Short Period of Time</h5>
          <ul>
            <li><span class="material-symbols-outlined">school</span></li>
            <li><p>78 Students</p></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  )
}
