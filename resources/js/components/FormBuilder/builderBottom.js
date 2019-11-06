import React, { Component }  from 'react';

const NotifyBox = (props) => {
	const { show, type, msg, } = props.notification;

	return (
		show?
		<div className="col-8 offset-2 my-5">
			<div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
				<h4 className="alert-heading">{type == "success"? "Well done " : "Oops "}!</h4>
				<p>{msg}.</p>
				{/* <hr/>
				<p className="mb-0">
					{props.formData}
				</p> */}

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
							disabled={props.disableBtn}
                        >
                        Save The Form</button>
					</div>

					<NotifyBox notification={props.notification} formData={props.formData} onNotifMsgClose={() => props.onMsgBoxClose()} />
				</div>
			</div>
		</div>
	)
}

export default SaveBtnArea;