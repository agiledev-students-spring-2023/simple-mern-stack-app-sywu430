import { Link } from 'react-router-dom'
import './Home.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
    const [data, setData] = useState()
    const fetchMessages = () => {
        // setMessages([])
        // setLoaded(false)
        axios
          .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
          .then(response => {
            // axios bundles up all response data in response.data property
            const messages = response.data
            
            setData(messages)
          })
          .catch(err => {
          
          })
          .finally(() => {
            // the response has been received, so remove the loading icon
            

          })
      }
      
      useEffect(
          () => fetchMessages(),[]
      )
  return (
    <>
      <p>{data?data.text:null } </p>
      <img src ={data?data.imageurl:null } ></img>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
