import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Datepickertofrom() {
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');

  const handleStartDate = (e) => {
    const getStartDateValue = e.target.value;
    setStartDate(getStartDateValue);
  };

  const handleEndDate = (e) => {
    const getEndDateValue = e.target.value;
    if (new Date(getEndDateValue) < new Date(startdate)) {
      alert("End date cannot be earlier than start date");
      return;
    }
    setEndDate(getEndDateValue);
  };

  return (
    <React.Fragment>
      <Container>
        <div className="row fthight">
          <div className="col-sm-8 mt-3">
            <form>
              <div className="form-group mb-4">
                <label className="mr-2">Start Date<span className="astriccolor">*</span></label>
                <input type="date" className="form-control mr-12 border-rounded " name="startdate" placeholder="mm/dd/yyyy"   style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }} onChange={(e) => handleStartDate(e)} />
                <label className="mr-2">End Date<span className="astriccolor">*</span></label>
                <input type="date" className="form-control" name="enddate" placeholder="mm/dd/yyyy" disabled={!startdate}   style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }} onChange={(e) => handleEndDate(e)} />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Datepickertofrom;

