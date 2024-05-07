import { useState } from "react"
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap"
import Job from "./Job"
import { useDispatch, useSelector } from "react-redux"
import { getJobsAction } from "../redux/actions"

const MainSearch = () => {
  const [query, setQuery] = useState("")
  // const [jobs, setJobs] = useState([]);

  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs.content)
  const hasError = useSelector((state) => state.jobs.hasError)
  const errorMsg = useSelector((state) => state.jobs.errorMsg)
  const isLoading = useSelector((state) => state.jobs.isLoading)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(getJobsAction(query))
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='display-1'>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Control type='search' value={query} onChange={handleChange} placeholder='type and press Enter' />
          </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>
          {hasError && !isLoading && (
            <Alert variant='danger' className='my-2'>
              <Alert.Heading>WARNING!</Alert.Heading>
              <p>{errorMsg}</p>
            </Alert>
          )}
          {isLoading ? (
            <div className='d-flex my-3 justify-content-center'>
              <Spinner animation='border' variant='primary' />
            </div>
          ) : (
            jobs.data && jobs.data.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
