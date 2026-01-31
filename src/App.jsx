import React, { Component } from 'react'
import './App.css'


export default class App extends Component {
  constructor() {
    super();
    this.state = {data: {
        name: "RENU SREE",
        id: "2500030337",
        department: "Computer Science",
        role:"Full Stack Developer",
        status:[{label:"Posts",value:"69"},
            {label:"Followers",value:"123.1M"},
            {label:"Following",value:"1.1k"}
        ]
      }
    };
  }

  render() {
    const {data}= this.state;
   const BASEURL=import.meta.env.BASEURL;
  
    return (
       <div className='app'>
                <div className='profile'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/004/956/030/small/camera-icon-simple-style-vector.jpg" alt='image error' />
                    <div className='info'>
                        <legend className='name'>{data.name}</legend>
                        <legend className='role'>{data.role}</legend>
                        <legend className='bio'>{data.bio}</legend>
                         <button className='follow'>Follow</button>
                        <button className='message'>Message</button>
                    </div>
                </div>
                <div className='status'>
                    {data.status.map((d)=>(
                        <div className='info'>
                            <legend className='value'>{d.value}</legend>
                            <legend className='label'>{d.label.toUpperCase()}</legend>
                        </div>
                    ))}
                </div>
            </div>
  )
}
}