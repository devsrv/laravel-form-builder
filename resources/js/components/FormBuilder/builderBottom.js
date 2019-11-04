import React, { Component }  from 'react';

const NotifyBox = (props) => {
	return (
		props.show?
		<div className="col">
			<div className="alert alert-success alert-dismissible fade show" role="alert">
				<h4 className="alert-heading">Well done!</h4>
				<p>Your form is successfully saved.</p>
				<hr/>
				<p className="mb-0">you can check the form here <a href="#">link</a>.</p>

				<button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => props.onNotifMsgClose()}>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</div>
		:
		null
	)
}

const SaveBtnArea = (props) => {
	return (
		<div className="col-12">
			<div className="section mt-5" style={{marginBottom: "120px"}}>
				<div className="row">
					<div className="col-6 offset-3">
                        <button type="button" className="btn btn-secondary btn-lg btn-block"
                            onClick={() => props.onFormSave()}
                        >
                        Save The Form</button>
					</div>

					<NotifyBox show={props.showSuccess} onNotifMsgClose={() => props.onMsgBoxClose()} />
				</div>
			</div>
		</div>
	)
}

export default SaveBtnArea;