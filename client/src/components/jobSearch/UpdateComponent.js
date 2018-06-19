import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import actions from '../../actions/jobSearchAction'
import requireAuth from '../../components/requireAuth';
import { compose } from 'redux'

import { renderTextareaField } from '../../common/reduxForm/renderField'

class JobSearchUpdateComponent extends React.Component {
    render() {
        const { handleSubmit, invalid, submitting, reset, setUpdateDone } = this.props
        return (
            <div style={{ 'backgroundColor': 'white' }} className="jobdetails">
                <form onSubmit={handleSubmit(setUpdateDone)}>
                    <div>
                        <Field name="comment" component={renderTextareaField} placeholder="Comment" /><br />
                        <h3>Pending: <Field name="isStatusPending" component="input" type="checkbox" /></h3>
                    </div>
                    <hr />
                    <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
                    </p>
                </form>
            </div>
        )
    }
}


JobSearchUpdateComponent.propTypes = {
    setUpdateDone: PropTypes.func.isRequired,
};

JobSearchUpdateComponent = reduxForm({
    form: 'jobUpdateForm'
})(JobSearchUpdateComponent)

JobSearchUpdateComponent = connect(
    state => ({
        initialValues: {
            comment: state.jobs.jobs2Display[0].job.comment,
            isStatusPending: state.jobs.jobs2Display[0].job.status == "JOB_STATUS_PENDING" ? true : false
        }
    })
)(JobSearchUpdateComponent)
export default compose(
    connect(null, actions),
    reduxForm({
        form: 'jobUpdateForm'
    })
)(requireAuth(JobSearchUpdateComponent))
