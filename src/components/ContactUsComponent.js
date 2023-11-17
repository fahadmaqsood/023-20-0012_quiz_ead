import "./ContactUsComponent.css";

const ContactUsComponent = () => {
  return (

    <div className="row contact-us p-5 d-flex text-center justify-content-center">

      <h3 className="md-5 text-left">Contact Us</h3>

      <div className="row">
        <div className="col-6">
            <input className="contact-us-input" placeholder="Full Name" />
        </div>

        <div className="col-6">
            <input className="contact-us-input" placeholder="Phone" />
        </div>
      </div>
      
      <div className="row">
        <div className="col-6">
            <input className="contact-us-input" placeholder="Address" />
        </div>

        <div className="col-6">
            <input className="contact-us-input" placeholder="Email" />
        </div>
      </div>

      <div className="row">
        <textarea placeholder="Description" className="contact-us-textarea" />
      </div>


      <div className="row">
        <div className="col-1">
          <button className="btn btn-success">Submit</button>
        </div>
      </div>

    </div>
  );
};

export default ContactUsComponent;
